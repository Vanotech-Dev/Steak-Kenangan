import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import FadeIn from '../components/ui/FadeIn';
import { supabase } from '../lib/supabase';

export default function ReservationPage() {
  const { bookingItems, totalPrice, totalItems, updateQuantity, removeItem, clearBooking } = useBooking();
  const [guests, setGuests] = useState(2);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert('Mohon lengkapi data reservasi utama.');
      return;
    }

    setLoading(true);

    try {
      // 1. Simpan ke tabel 'reservations'
      const { data: reservation, error: resError } = await supabase
        .from('reservations')
        .insert([{
          name: formData.name,
          phone: `0${formData.phone}`,
          reservation_date: formData.date,
          reservation_time: formData.time,
          guests: guests,
          notes: formData.notes,
          total_amount: totalPrice
        }])
        .select()
        .single();

      if (resError) throw resError;

      // 2. Simpan daftar makanan ke 'reservation_items' (jika ada)
      if (bookingItems.length > 0) {
        const itemsToInsert = bookingItems.map(item => ({
          reservation_id: reservation.id,
          item_name: item.name,
          quantity: item.quantity,
          price: item.price,
          subtotal: item.price * item.quantity
        }));

        const { error: itemsError } = await supabase
          .from('reservation_items')
          .insert(itemsToInsert);

        if (itemsError) throw itemsError;
      }

      // 3. Bersihkan Keranjang
      clearBooking();

      // 4. Buka WhatsApp untuk konfirmasi
      const foodList = bookingItems
        .map(item => `- ${item.name} (x${item.quantity})`)
        .join('%0A');

      const message = `Halo Steak Kenangan! Saya ingin melakukan reservasi:%0A%0A` +
        `*ID Order:* ${reservation.id.slice(0, 8)}%0A` +
        `*Detail Reservasi:*%0A` +
        `- Nama: ${formData.name}%0A` +
        `- WhatsApp: 0${formData.phone}%0A` +
        `- Tanggal: ${formData.date}%0A` +
        `- Waktu: ${formData.time}%0A` +
        `- Jumlah Tamu: ${guests} Orang%0A` +
        `${formData.notes ? `- Catatan: ${formData.notes}%0A` : ''}%0A` +
        `*Daftar Pesanan:*%0A${foodList || '- Belum memilih menu'}%0A%0A` +
        `*Total Estimasi: Rp ${totalPrice.toLocaleString('id-ID')}*%0A%0A` +
        `Terima kasih!`;

      window.open(`https://wa.me/6285180536854?text=${message}`, '_blank');
      
      // Reset Form sederhana
      setFormData({ name: '', phone: '', date: '', time: '', notes: '' });
      setGuests(2);
      
    } catch (error) {
      console.error('Error saving reservation:', error);
      alert('Maaf, terjadi kesalahan saat menyimpan reservasi. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto grain-overlay min-h-screen flex-grow">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Order Summary & Visual */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <span className="text-primary font-label text-xs uppercase tracking-[0.2em] font-bold">The Embers of Memory</span>
            <h1 className="text-5xl md:text-7xl font-headline font-black leading-[0.9] text-on-surface tracking-tighter">
              RESERVASI <br /> MEJA
            </h1>
          </div>
          
          <FadeIn direction="up" className="bg-surface-container-low rounded-xl p-8 border border-primary/10 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16"></div>
            <h3 className="text-2xl font-headline font-bold italic mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">restaurant_menu</span>
              Pesanan Anda
            </h3>
            
            {bookingItems.length > 0 ? (
              <div className="space-y-6">
                <div className="max-h-[300px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-outline-variant">
                  {bookingItems.map(item => (
                    <div key={item.id} className="flex justify-between items-start group">
                      <div className="flex-1">
                        <h4 className="font-bold text-on-surface line-clamp-1">{item.name}</h4>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center bg-surface-container rounded-full px-2 py-0.5 border border-outline-variant/10">
                            <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-primary transition-colors cursor-pointer" type="button">
                              <span className="material-symbols-outlined text-sm">remove</span>
                            </button>
                            <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-primary transition-colors cursor-pointer" type="button">
                              <span className="material-symbols-outlined text-sm">add</span>
                            </button>
                          </div>
                          <span className="text-xs text-on-surface-variant font-bold">
                            Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                          </span>
                        </div>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-outline-variant hover:text-error transition-colors opacity-0 group-hover:opacity-100 cursor-pointer" type="button">
                        <span className="material-symbols-outlined text-lg">close</span>
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-outline-variant/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-on-surface-variant text-sm font-label uppercase tracking-widest">Subtotal</span>
                    <span className="font-bold text-on-surface">Rp {totalPrice.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant text-sm font-label uppercase tracking-widest">Total Item</span>
                    <span className="font-bold text-primary">{totalItems} Potong</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <span className="material-symbols-outlined text-4xl text-outline-variant mb-4">shopping_basket</span>
                <p className="text-on-surface-variant text-sm italic">Belum ada makanan yang dipilih.</p>
                <a href="/menu" className="text-primary font-bold text-xs uppercase tracking-widest mt-4 inline-block hover:underline">Lihat Menu Sekarang</a>
              </div>
            )}
          </FadeIn>
          
          <div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/10">
            <p className="text-sm text-on-surface-variant mb-4 font-label uppercase tracking-wider">Grup Besar &amp; Event Khusus</p>
            <a className="flex items-center justify-between group cursor-pointer" href="https://wa.me/6281930649262" target="_blank" rel="noreferrer">
              <span className="text-xl font-headline italic">Meja untuk lebih dari 10 orang?</span>
              <div className="flex items-center gap-2 text-primary group-hover:translate-x-2 transition-transform">
                <span className="font-bold">Hubungi Kami</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </a>
          </div>
        </div>
        
        {/* Right Side: Reservation Form */}
        <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -mr-32 -mt-32"></div>
          
          <form className="space-y-8 relative z-10" onSubmit={handleSendWhatsApp}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant ml-1">Nama Lengkap</label>
                <input name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-surface-container-lowest border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-md px-4 py-3 text-on-surface transition-all" placeholder="Contoh: Budi Santoso" type="text" required />
              </div>
              
              <div className="space-y-2">
                <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant ml-1">Nomor WhatsApp</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold">+62</span>
                  <input name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-surface-container-lowest border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-md pl-14 pr-4 py-3 text-on-surface transition-all" placeholder="819 3064 9262" type="tel" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant ml-1">Tanggal</label>
                <input name="date" value={formData.date} onChange={handleInputChange} className="w-full bg-surface-container-lowest border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-md px-4 py-3 text-on-surface transition-all appearance-none" type="date" required />
              </div>
              
              <div className="space-y-2">
                <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant ml-1">Waktu</label>
                <select name="time" value={formData.time} onChange={handleInputChange} className="w-full bg-surface-container-lowest border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-md px-4 py-3 text-on-surface transition-all appearance-none cursor-pointer" required>
                  <option value="">Pilih Jam</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-4">
              <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant ml-1">Meja untuk Berapa Orang?</label>
              <div className="flex flex-wrap gap-3">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setGuests(num)}
                    className={`min-w-[50px] h-12 rounded-lg border-2 font-bold transition-all ${
                      guests === num
                        ? 'border-primary bg-primary/10 text-primary shadow-lg shadow-primary/10 scale-105'
                        : 'border-outline-variant/20 text-on-surface-variant hover:border-primary/40'
                    }`}
                  >
                    {num === 6 ? '6+' : num}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-on-surface-variant italic ml-1">Pilih jumlah tamu untuk memundahkan penempatan meja.</p>
            </div>
            
            <div className="space-y-2">
              <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant ml-1">Catatan Spesial</label>
              <textarea name="notes" value={formData.notes} onChange={handleInputChange} className="w-full bg-surface-container-lowest border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-md px-4 py-3 text-on-surface transition-all resize-none" placeholder="Alergi makanan, kejutan ulang tahun, atau permintaan posisi meja..." rows="3"></textarea>
            </div>
            
            <div className="pt-4">
              <button className="fire-gradient w-full py-5 rounded-md text-on-primary-fixed font-black text-lg tracking-widest uppercase flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 cursor-pointer" type="submit">
                Kirim via WhatsApp
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
