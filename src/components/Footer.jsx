import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1c1b1b] w-full pt-16 pb-8 tonal-layering-low mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <span className="text-xl font-bold text-[#f06620] font-headline block mb-6">STEAK KENANGAN</span>
          <p className="text-[#e5e2e1]/60 font-body text-sm leading-relaxed">Merayakan setiap gigitan dengan kehangatan bara api dan kenangan yang abadi.</p>
        </div>
        <div>
          <h4 className="text-[#f06620] font-bold text-xs uppercase tracking-widest mb-6">Navigasi</h4>
          <ul className="space-y-4">
            <li><Link className="text-[#e5e2e1]/60 text-sm hover:text-[#ffb955] transition-colors" to="/">Beranda</Link></li>
            <li><Link className="text-[#e5e2e1]/60 text-sm hover:text-[#ffb955] transition-colors" to="/menu">Menu</Link></li>

            <li><Link className="text-[#e5e2e1]/60 text-sm hover:text-[#ffb955] transition-colors" to="/kontak">Kontak</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#f06620] font-bold text-xs uppercase tracking-widest mb-6">Ikuti Kami</h4>
          <ul className="space-y-4">
            <li><a className="text-[#e5e2e1]/60 text-sm hover:text-[#ffb955] transition-colors" href="https://instagram.com/steakkenangan" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a className="text-[#e5e2e1]/60 text-sm hover:text-[#ffb955] transition-colors" href="https://wa.me/6281930649262" target="_blank" rel="noreferrer">WhatsApp</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#f06620] font-bold text-xs uppercase tracking-widest mb-6">Lokasi</h4>
          <p className="text-[#e5e2e1]/60 text-sm leading-relaxed mb-4">Pangkal Lalang, Kec. Tj. Pandan, Kab. Belitung</p>
          <p className="text-[#e5e2e1]/60 text-sm">Open: 12:00 - 22:00</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-outline-variant/10 text-center">
        <p className="text-[#e5e2e1]/60 text-xs font-body tracking-wide">© 2024 Steak Kenangan. The Embers of Memory.</p>
      </div>
    </footer>
  );
}
