import React from 'react';

export default function TestimonialCard({ testimonial, highlight = false }) {
  return (
    <div className={`min-w-full md:min-w-[400px] snap-center bg-surface-container p-8 rounded-xl transition-transform hover:-translate-y-1 duration-300 shadow-md hover:shadow-xl ${highlight ? 'border-l-4 border-primary' : ''}`}>
      <div className="flex text-secondary mb-4 gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="material-symbols-outlined star-glow text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        ))}
        {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
           <span key={i} className="material-symbols-outlined text-outline-variant/30 text-lg" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
        ))}
      </div>
      <p className="italic text-on-surface mb-6 leading-relaxed font-headline">
        "{testimonial.text}"
      </p>
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary tracking-widest uppercase">
          {testimonial.initial}
        </div>
        <span className="font-bold text-sm uppercase tracking-widest text-on-surface-variant">{testimonial.name}</span>
      </div>
    </div>
  );
}
