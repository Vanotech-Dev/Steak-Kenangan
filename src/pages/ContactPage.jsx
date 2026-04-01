import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto grain-overlay min-h-screen flex-grow relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] -ml-48 mt-20 pointer-events-none"></div>
      
      {/* Header Section */}
      <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto relative z-10">
        <span className="text-primary font-label text-xs uppercase tracking-[0.2em] font-bold mb-4 block">Tetap Terhubung</span>
        <h1 className="text-5xl md:text-7xl font-headline font-black leading-[0.9] text-on-surface tracking-tighter mb-6 uppercase">
          HUBUNGI <span className="italic">KAMI</span>
        </h1>
        <p className="text-on-surface-variant font-body text-lg leading-relaxed">
          Punya pertanyaan tentang menu, rencana acara khusus, atau sekadar ingin menyapa? Kami selalu siap mendengarkan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10">
        {/* Left Side: Information Cards */}
        <div className="lg:col-span-4 space-y-6">
          {/* Card: Location */}
          <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
            <h3 className="text-xl font-headline font-bold mb-3">Tatap Muka</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              Pangkal Lalang, Kec. Tj. Pandan, Kabupaten Belitung, Kepulauan Bangka Belitung 33411
            </p>
            <a href="https://maps.google.com/?q=Pangkal+Lalang,+Kec.+Tj.+Pandan,+Belitung" target="_blank" rel="noreferrer" className="text-primary text-xs font-bold uppercase tracking-widest hover:text-secondary flex items-center gap-1">
              Buka di Peta <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </a>
          </div>

          {/* Card: WhatsApp */}
          <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">WhatsApp</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                Layanan pelanggan yang responsif untuk membantu reservasi atau katering Anda.
              </p>
            </div>
            <a href="https://wa.me/6281930649262" target="_blank" rel="noreferrer" className="text-on-surface text-lg font-headline font-bold tracking-widest hover:text-primary transition-colors flex items-center gap-2">
              0819-3064-9262
            </a>
          </div>

          {/* Card: Instagram */}
          <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary">photo_camera</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">Instagram</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                Lihat keseruan di balik dapur dan promo harian kami.
              </p>
            </div>
            <a href="https://instagram.com/steakkenangan" target="_blank" rel="noreferrer" className="text-on-surface text-lg font-headline font-bold tracking-widest hover:text-primary transition-colors flex items-center gap-2 italic">
              @steakkenangan
            </a>
          </div>
        </div>

        {/* Right Side: Visual Map & Operational Hours */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Operational Hours Banner */}
          <div className="bg-surface-container p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 border-l-4 border-primary">
            <div>
              <h3 className="text-2xl font-headline font-bold mb-2">Jam Operasional</h3>
              <p className="text-on-surface-variant">Senin hingga Minggu melayani sepenuh hati.</p>
            </div>
            <div className="bg-surface-container-highest px-8 py-4 rounded-lg text-center min-w-[200px]">
              <div className="text-3xl font-headline font-black italic tracking-tighter text-primary">
                12.00 - 22.00
              </div>
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant mt-1">WIB</div>
            </div>
          </div>

          {/* Interactive Placeholder Map */}
          <div className="flex-1 bg-surface-container-low rounded-xl overflow-hidden shadow-2xl relative min-h-[400px] border border-outline-variant/10 group">
            {/* The Visual Grid Overlay for "Map" feel */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#f06620 1px, transparent 1px), linear-gradient(90deg, #f06620 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            <div className="w-full h-full flex flex-col items-center justify-center gap-6 z-10 relative">
              <span className="material-symbols-outlined text-outline-variant/30 group-hover:scale-110 transition-transform duration-700" style={{ fontSize: '120px', fontVariationSettings: "'FILL' 0" }}>map</span>
              <div className="text-center px-8">
                <span className="block font-headline font-bold text-2xl text-on-surface/50 mb-2 italic">Integrasi Peta Digital</span>
                <span className="block text-sm text-on-surface-variant/50 max-w-sm mx-auto">
                  // TODO: Anda bisa memasang kode iframe Google Maps Steak Kenangan di area ini agar pelanggan dapat langsung menavigasi arah ke restoran.
                </span>
              </div>
            </div>
            
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface-container-low to-transparent pointer-events-none z-20"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
