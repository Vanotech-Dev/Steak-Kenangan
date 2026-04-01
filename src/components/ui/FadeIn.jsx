import React, { useEffect, useRef, useState } from 'react';

export default function FadeIn({ children, delay = 0, direction = 'up', distance = 30, duration = 700, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, we can unobserve if we want it to animate only once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  let initialTransform = '';
  switch (direction) {
    case 'up': initialTransform = `translateY(${distance}px)`; break;
    case 'down': initialTransform = `translateY(-${distance}px)`; break;
    case 'left': initialTransform = `translateX(${distance}px)`; break;
    case 'right': initialTransform = `translateX(-${distance}px)`; break;
    case 'none': initialTransform = 'none'; break;
    default: initialTransform = `translateY(${distance}px)`;
  }

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0,0)' : initialTransform,
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div ref={domRef} style={style} className={className}>
      {children}
    </div>
  );
}
