import React from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';

export default function FloatingReservationBanner() {
  const { totalItems, totalPrice } = useBooking();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg animate-in slide-in-from-bottom-10 fade-in duration-500">
      <div className="bg-surface-container-high/80 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl p-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-primary/30 shrink-0">
            <span className="material-symbols-outlined font-bold">restaurant_menu</span>
          </div>
          <div>
            <p className="text-on-surface font-bold text-sm leading-tight">
              {totalItems} Menu Terpilih
            </p>
            <p className="text-primary font-headline text-lg font-black leading-tight">
              Rp {totalPrice.toLocaleString('id-ID')}
            </p>
          </div>
        </div>
        
        <Link to="/reservasi">
          <button className="fire-gradient text-on-primary-fixed px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-2 cursor-pointer">
            Lanjut Reservasi
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
