import React, { createContext, useContext, useState, useEffect } from 'react';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookingItems, setBookingItems] = useState(() => {
    const saved = localStorage.getItem('steak_kenangan_booking');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('steak_kenangan_booking', JSON.stringify(bookingItems));
  }, [bookingItems]);

  const addItem = (item) => {
    setBookingItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (id) => {
    setBookingItems(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setBookingItems(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = Math.max(0, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }).filter(i => i.quantity > 0));
  };

  const clearBooking = () => {
    setBookingItems([]);
  };

  const totalItems = bookingItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = bookingItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <BookingContext.Provider value={{ 
      bookingItems, 
      addItem, 
      removeItem, 
      updateQuantity, 
      clearBooking, 
      totalItems, 
      totalPrice 
    }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);
