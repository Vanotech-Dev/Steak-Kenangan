import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { menuCategories, menuData } from '../data/menuData';
import MenuCard from '../components/ui/MenuCard';
import FadeIn from '../components/ui/FadeIn';
import { useBooking } from '../context/BookingContext';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('semua');
  const { totalItems, totalPrice, clearBooking } = useBooking();
  const menuTitleRef = useRef(null);

  useEffect(() => {
    // Scroll to the menu title when the category changes, 
    // but only if it's not the initial mount or 'semua'
    if (activeCategory !== 'semua' && menuTitleRef.current) {
      const headerOffset = 100;
      const elementPosition = menuTitleRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (activeCategory === 'semua') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeCategory]);

  return (
    <main className="pt-24 pb-20 grain-overlay">
      {/* Hero & Category Section */}
      <header className="max-w-7xl mx-auto px-8 pt-12 pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="label-md uppercase tracking-[0.2em] text-primary mb-4 block">Eksplorasi Rasa</span>
            <h1 ref={menuTitleRef} className="text-6xl md:text-8xl font-headline font-black tracking-tighter leading-none italic">
              MENU KAMI
            </h1>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-12 flex flex-wrap gap-4 items-center">
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-colors cursor-pointer ${activeCategory === cat.id
                ? 'fire-gradient text-on-primary-fixed shadow-lg shadow-primary/20'
                : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </header>

      {/* Featured Item Spotlight */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <FadeIn className="relative group overflow-hidden rounded-xl bg-surface-container-low flex flex-col md:flex-row items-center transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10" direction="up">
          <div className="w-full md:w-3/5 h-[400px] md:h-[600px] relative overflow-hidden">
            <div className="w-full h-full bg-surface-container flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
              {/* TODO: Masukkan gambar asli di sini */}
              <span className="material-symbols-outlined text-outline-variant/50" style={{ fontSize: '100px', fontVariationSettings: "'FILL' 0" }}>add_a_photo</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container-low hidden md:block"></div>
          </div>
          <div className="w-full md:w-2/5 p-12 relative">
            <span className="inline-block fire-gradient text-on-primary-fixed px-4 py-1 text-xs font-black tracking-widest uppercase mb-6 rounded-sm">Expensive</span>
            <h2 className="text-5xl font-headline font-bold text-on-surface mb-4 leading-tight italic">Beef Double Steak Grill</h2>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">Dua potong sirloin pilihan yang dipanggang dengan api membara, disajikan dengan saus spesial Kenangan dan sayuran segar.</p>
            <div className="flex items-center gap-4 mb-8">
               <span className="text-4xl font-headline font-bold text-primary italic">Rp 60.000</span>
            </div>
            <button className="flex items-center gap-2 group-hover:gap-4 transition-all duration-300 text-secondary font-bold tracking-widest uppercase text-sm cursor-pointer">
              Tambah Ke Pesanan <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
            </button>
          </div>
        </FadeIn>
      </section>

      {/* Grid Menu View */}
      <section className="max-w-7xl mx-auto px-8">
        {menuCategories.filter(cat => cat.id !== 'semua').map(category => {
          // If a specific category is selected (and it's not 'semua'), hide the others
          if (activeCategory !== 'semua' && activeCategory !== category.id) return null;

          const items = menuData.filter(item => item.categoryId === category.id);
          // If a category has no items in data, don't show the section
          if (items.length === 0) return null;

          const isSteak = category.id === 'steak';

          return (
            <FadeIn key={category.id} className="mb-20" direction="up">
              <div className="flex items-center gap-6 mb-12">
                <h3 className="text-3xl font-headline font-bold tracking-tight italic">{category.name} Menu</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-outline-variant/30 to-transparent"></div>
              </div>

              <div className={`grid grid-cols-1 ${isSteak ? 'md:grid-cols-3 gap-10' : 'md:grid-cols-2 lg:grid-cols-4 gap-8'}`}>
                {items.map(item => (
                  <MenuCard key={item.id} item={item} variant={isSteak ? 'steak' : 'default'} />
                ))}
              </div>
            </FadeIn>
          );
        })}
      </section>

      {/* Doneness Guide (Signature Component) */}
      <section className="max-w-7xl mx-auto px-8 mb-24 py-20 bg-surface-container-low rounded-3xl overflow-hidden relative">
        <FadeIn className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center" direction="up">
          <div>
            <h3 className="text-4xl font-headline font-bold italic mb-6">Pilih Kematangan Sempurna</h3>
            <p className="text-on-surface-variant mb-12">Setiap potongan daging memiliki karakter berbeda pada tingkat kematangan tertentu. Sesuaikan dengan selera Anda.</p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden flex">
                  <div className="h-full w-1/5 bg-tertiary"></div>
                  <div className="h-full w-1/5 bg-[#ff7b72]"></div>
                  <div className="h-full w-1/5 bg-primary"></div>
                  <div className="h-full w-1/5 bg-[#d8581b]"></div>
                  <div className="h-full w-1/5 bg-[#3d1400]"></div>
                </div>
              </div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest font-black text-on-surface-variant">
                <span>Rare</span>
                <span>Medium Rare</span>
                <span>Medium</span>
                <span>Medium Well</span>
                <span>Well Done</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl shadow-2xl bg-surface-container flex items-center justify-center min-h-[400px]">
              {/* TODO: Masukkan gambar panduan asli */}
              <span className="material-symbols-outlined text-outline-variant/50" style={{ fontSize: '80px', fontVariationSettings: "'FILL' 0" }}>add_a_photo</span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Floating CTA / Cart Summary */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
        {totalItems > 0 && (
          <FadeIn direction="up" className="bg-surface-container-high/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-primary/20 min-w-[200px]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Pesanan Kamu</span>
              <button 
                onClick={clearBooking}
                className="text-[10px] font-black text-primary hover:text-secondary uppercase cursor-pointer"
              >
                Hapus
              </button>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-2xl font-headline font-bold italic">{totalItems} Item</p>
                <p className="text-primary font-bold">Rp {totalPrice.toLocaleString('id-ID')}</p>
              </div>
            </div>
          </FadeIn>
        )}
        
        <Link to="/reservasi">
          <button className={`h-16 w-16 md:w-auto md:px-8 rounded-full flex items-center justify-center gap-3 shadow-2xl transition-all duration-500 kinetic-flame-hover group cursor-pointer ${
            totalItems > 0 
              ? 'fire-gradient shadow-primary/40' 
              : 'bg-surface-container-highest text-on-surface hover:bg-primary hover:text-white'
          }`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' ${totalItems > 0 ? 1 : 0}` }}>
              {totalItems > 0 ? 'shopping_cart_checkout' : 'restaurant'}
            </span>
            <span className="hidden md:block font-bold font-headline uppercase tracking-widest text-sm">
              {totalItems > 0 ? 'Lanjut ke Reservasi' : 'Pesan Meja'}
            </span>
          </button>
        </Link>
      </div>
    </main>
  );
}
