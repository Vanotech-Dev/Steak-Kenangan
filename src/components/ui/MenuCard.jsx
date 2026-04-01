import React from 'react';
import { useBooking } from '../../context/BookingContext';

export default function MenuCard({ item, variant = 'default' }) {
  const { bookingItems, addItem, updateQuantity } = useBooking();
  const currentItem = bookingItems.find(i => i.id === item.id);
  const quantity = currentItem ? currentItem.quantity : 0;

  if (variant === 'steak') {
    return (
      <div className="group bg-surface-container-low rounded-xl overflow-hidden transition-all duration-300 hover:bg-surface-container-high flex flex-col hover:-translate-y-1 shadow-md hover:shadow-xl">
        <div className="h-64 overflow-hidden relative bg-surface-container flex items-center justify-center">
          <span className="material-symbols-outlined text-6xl text-outline-variant/30 group-hover:scale-110 transition-transform duration-700" style={{ fontVariationSettings: "'FILL' 0" }}>add_a_photo</span>
          {item.isBestSeller && (
            <div className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-tighter shadow-lg">
              BEST SELLER
            </div>
          )}
          {item.isPremium && (
            <div className="absolute top-4 left-4 fire-gradient text-on-primary-fixed px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-tighter shadow-lg">
              EXPENSIVE
            </div>
          )}
          {quantity > 0 && (
            <div className="absolute bottom-4 right-4 bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg animate-bounce">
              {quantity}
            </div>
          )}
        </div>
        <div className="p-8 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <h4 className="text-2xl font-headline font-bold italic">{item.name}</h4>
            <span className="text-primary font-bold font-headline">{(item.price / 1000)}k</span>
          </div>
          <p className="text-on-surface-variant text-sm line-clamp-2 mb-6 flex-1">{item.description}</p>
          
          {quantity === 0 ? (
            <button 
              onClick={() => addItem(item)}
              className="w-full py-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors font-bold text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary cursor-pointer active:scale-95"
            >
              Pesan Sekarang
            </button>
          ) : (
            <div className="flex items-center justify-between bg-surface-container-highest rounded-lg p-1 border border-primary/20">
              <button 
                onClick={() => updateQuantity(item.id, -1)}
                className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high rounded transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">remove</span>
              </button>
              <span className="font-bold font-headline">{quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, 1)}
                className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high rounded transition-colors text-primary cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">add</span>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default / Sub-category Variant
  return (
    <div className="group flex flex-col">
      <div className="relative aspect-square overflow-hidden rounded-xl mb-6 bg-surface-container shadow-md flex items-center justify-center hover:bg-surface-container-highest transition-colors cursor-pointer hover:shadow-xl hover:-translate-y-1 duration-300">
        <span className="material-symbols-outlined text-6xl text-outline-variant/30 group-hover:scale-110 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 0" }}>add_a_photo</span>
        {quantity > 0 && (
          <div className="absolute top-3 right-3 bg-primary text-on-primary w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shadow-lg">
            {quantity}
          </div>
        )}
      </div>
      <h4 className="text-xl font-headline font-bold italic mb-1 px-1">{item.name}</h4>
      <div className="flex items-baseline justify-between gap-2 mb-4 px-1">
        <span className="text-secondary font-bold">Rp {(item.price).toLocaleString('id-ID')}</span>
        
        {quantity === 0 ? (
          <button 
            onClick={() => addItem(item)}
            className="text-xs font-bold text-primary uppercase tracking-widest hover:text-secondary cursor-pointer active:opacity-70 transition-all hover:scale-110"
          >
            Tambah
          </button>
        ) : (
          <div className="flex items-center gap-3 bg-surface-container px-2 py-1 rounded-full border border-outline-variant/10">
            <button onClick={() => updateQuantity(item.id, -1)} className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[16px]">remove_circle</span>
            </button>
            <span className="text-xs font-bold">{quantity}</span>
            <button onClick={() => updateQuantity(item.id, 1)} className="text-primary hover:text-secondary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[16px]">add_circle</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
