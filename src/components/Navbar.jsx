import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10 shadow-2xl">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter text-primary font-headline" onClick={() => setIsOpen(false)}>
          STEAK <span className="px-2"> KENANGAN</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `font-poppins text-sm font-bold uppercase tracking-widest transition-colors ${isActive
                ? 'text-primary'
                : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            Beranda
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `font-poppins text-sm font-bold uppercase tracking-widest transition-colors ${isActive
                ? 'text-primary'
                : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/kontak"
            className={({ isActive }) =>
              `font-poppins text-sm font-bold uppercase tracking-widest transition-colors ${isActive
                ? 'text-primary'
                : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            Kontak
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/reservasi" className="hidden sm:block">
            <button className="fire-gradient px-5 py-2 rounded-lg text-on-primary-fixed font-bold font-poppins text-xs uppercase tracking-widest kinetic-flame-hover transition-all cursor-pointer">
              Pesan Meja
            </button>
          </Link>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-on-surface p-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden bg-surface-container overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 gap-6 border-t border-outline-variant/10">
          <NavLink
            to="/"
            end
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `font-poppins font-bold uppercase tracking-widest ${isActive ? 'text-primary' : 'text-on-surface'}`
            }
          >
            Beranda
          </NavLink>
          <NavLink
            to="/menu"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `font-poppins font-bold uppercase tracking-widest ${isActive ? 'text-primary' : 'text-on-surface'}`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/kontak"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `font-poppins font-bold uppercase tracking-widest ${isActive ? 'text-primary' : 'text-on-surface'}`
            }
          >
            Kontak
          </NavLink>
          <Link to="/reservasi" onClick={() => setIsOpen(false)}>
            <button className="fire-gradient w-full py-4 rounded-xl text-on-primary-fixed font-bold font-headline text-lg italic shadow-lg">
              Pesan Meja Sekarang
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
