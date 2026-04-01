import React from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '../data/menuData';
import MenuCard from '../components/ui/MenuCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import FadeIn from '../components/ui/FadeIn';
import { testimonialsData } from '../data/testimonialsData';

export default function HomePage() {
  return (
    <main>
      {/* Section 1: Hero View */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="Hero Steak"
            className="w-full h-full object-cover scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpPGlmzqHQHXr512pioFMXxGdwEtL9OH3Tq5V4OgRYBSqashN-PUdr8TaLwV3IHD4VfJgklEQetAlsr2HrlHuf2GlSNaYCy7LPiJs_3F0ugmllQ-znhkADDclIkRAYAuGldSDy7de41OO0ZDdn_CBO6wWQUy6b4-uBveK_vkshi5WS_OPqz5kWFoXmWId4LFCdx0aR8k74SmRdF1ZJVRvYkt7bgMl8Thiic9vg6vMSBkWBd18Erzef9wSlNWdRsMOrzGmDXnjPXlI"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-9xl font-headline font-black text-on-surface leading-[0.9] tracking-tighter mb-6">
              STEAK <span className="text-primary italic block">KENANGAN</span>
            </h1>
            <p className="text-xl md:text-2xl font-headline italic text-on-surface-variant mb-12 border-l-4 border-primary pl-6">
              Setiap Gigitan, Sebuah Kenangan
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/reservasi">
                <button className="fire-gradient text-on-primary-fixed px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary/20 cursor-pointer">
                  Pesan Meja Sekarang
                </button>
              </Link>
              <Link to="/menu">
                <button className="border border-outline-variant text-on-surface px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-high transition-colors cursor-pointer">
                  Lihat Menu
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Highlight Menu */}
      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        <FadeIn className="max-w-7xl mx-auto px-8 relative z-10" direction="up">
          <div className="mb-16">
            <h2 className="text-4xl font-headline font-bold text-primary mb-2">Sajian Favorit</h2>
            <p className="text-on-surface-variant max-w-lg">Pilihan potongan daging terbaik yang dipanggang dengan bumbu rahasia Kenangan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuData.filter(item => item.isBestSeller || item.isPremium).map((item) => (
              <MenuCard key={item.id} item={item} variant="steak" />
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Section 3: About */}
      <section className="py-24 bg-surface">
        <FadeIn className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" direction="up">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-xl transition-all group-hover:scale-105"></div>
            <img
              alt="Interior"
              className="relative rounded-lg shadow-2xl z-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0gQmO8S_ZBUuPnjnUFB2WQqw-OmBWCGE7RTVp2oQgAt4kLRsrySNXkPvQE82EQYbMkmEDvx7IAUuoQJaESnfkD_T83suJrvB-SFhG00hvjAB1U2lO4AIja3XYCNlF-Q4pUua3dxehBCb9z65RCfgpeRboZ1TpXVAQM1Q5Wm0MwUiozLcCSd9Ul236rISCvaDk31aSZkXMMZArMzd1SXszLqLR64h-EnOeG1rL6vf1LnM82Esz_6sBssIf0GRI5L5khBwXrKzVzAg"
            />
          </div>
          <FadeIn direction="left" delay={200}>
            <h2 className="text-4xl font-headline font-bold text-on-surface mb-8">
              Cerita di Balik <span className="text-primary">Kenangan</span>
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>
                Berawal dari kecintaan akan seni memanggang daging yang sempurna di tanah Belitung, Steak Kenangan hadir untuk memberikan pengalaman kuliner yang tidak hanya memanjakan lidah, tapi juga menetap di hati.
              </p>
              <p>
                Kami percaya bahwa setiap hidangan adalah sebuah babak baru dalam cerita hidup Anda. Dengan bahan-bahan berkualitas pilihan dan suasana yang hangat, kami mengundang Anda untuk merajut kenangan indah bersama keluarga dan kerabat di sini.
              </p>
            </div>
            <div className="mt-10 flex items-center space-x-4">
              <div className="h-px w-12 bg-primary"></div>
              <span className="font-headline italic text-primary text-xl">The Embers of Memory</span>
            </div>
          </FadeIn>
        </FadeIn>
      </section>

      {/* Section 4: Services (Bento Style) */}
      <section className="py-24 bg-surface-container-low">
        <FadeIn className="max-w-7xl mx-auto px-8 text-center mb-16" direction="up">
          <h2 className="text-4xl font-headline font-bold mb-4">Layanan Kami</h2>
          <p className="text-on-surface-variant">Kami hadir untuk menemani setiap momen spesial Anda.</p>
        </FadeIn>
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <FadeIn direction="up" delay={0} className="md:col-span-2 bg-surface-container-high p-10 rounded-xl relative overflow-hidden flex flex-col justify-end h-72">
            <span className="material-symbols-outlined text-5xl text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
            <h3 className="text-2xl font-headline font-bold mb-2">Catering</h3>
            <p className="text-on-surface-variant text-sm">Hidangan steak premium langsung di lokasi acara Anda dengan pelayanan profesional.</p>
          </FadeIn>
          <FadeIn direction="up" delay={100} className="bg-surface-container-high p-10 rounded-xl flex flex-col justify-end h-72 border-b-4 border-primary">
            <span className="material-symbols-outlined text-5xl text-secondary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>celebration</span>
            <h3 className="text-2xl font-headline font-bold mb-2">Hajatan</h3>
            <p className="text-on-surface-variant text-sm">Paket pesta istimewa untuk hari bahagia Anda.</p>
          </FadeIn>
          <FadeIn direction="up" delay={200} className="bg-surface-container-high p-10 rounded-xl flex flex-col justify-end h-72">
            <span className="material-symbols-outlined text-5xl text-tertiary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
            <h3 className="text-2xl font-headline font-bold mb-2">Snack Box</h3>
            <p className="text-on-surface-variant text-sm">Kudapan lezat untuk rapat atau acara kantor.</p>
          </FadeIn>
          <FadeIn direction="up" delay={300} className="md:col-span-4 bg-primary text-on-primary-fixed p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
              <div>
                <h3 className="text-2xl font-headline font-bold">Sedekah Kenangan</h3>
                <p className="opacity-80">Program berbagi untuk sesama melalui paket makanan berkah.</p>
              </div>
            </div>
            <Link to="/kontak">
              <button className="bg-on-primary-fixed text-primary px-6 py-2 rounded font-bold hover:scale-105 transition-transform whitespace-nowrap">Hubungi Kami</button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Section 5: Large CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="Grill Background"
            className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuUSROvGnTIBEHc6TeZHAtrbaBmmJlQcLFiATqEz2i86rJcJFO4btAeFL8OA9WWZMzSrwjx0iTY7ypBpCXEn5C2W6iXxkzFe07qqee2STjgyYWVSJvqfb4Tr7LFwVkLsy010wGT6J66ZxSs6BWIHWGSSrn0_nvnZDxz64iS2hBnm5Qoc3iDy8ehVpcusd6nmpi4gO5RW24UNtm9w4pjwsQrL75YffjPxfl1RgWMhPKdtsbZ_2PPsfpWZoZRqq0Zr0X2vaeVjg5qZM"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface"></div>
        </div>
        <FadeIn className="relative z-10 max-w-4xl mx-auto px-8 text-center" direction="up">
          <h2 className="text-5xl md:text-7xl font-headline font-black mb-8 leading-tight">
            Siap Membuat <br />
            <span className="text-primary italic">Kenangan Baru?</span>
          </h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Meja Anda sudah kami siapkan. Nikmati malam yang hangat dengan sajian steak terbaik di Belitung.
          </p>
          <Link to="/reservasi">
            <button className="fire-gradient text-on-primary-fixed px-12 py-5 rounded-lg font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-primary/40 cursor-pointer">
              Reservasi Meja Sekarang
            </button>
          </Link>
        </FadeIn>
      </section>

      {/* Section 6: Testimonials */}
      <section className="py-24 bg-surface">
        <FadeIn className="max-w-7xl mx-auto px-8" direction="up">
          <h2 className="text-3xl font-headline font-bold text-center mb-16 italic">Suara Dari Mereka</h2>
          <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-8 snap-x p-4 hide-scrollbar">
            {testimonialsData.map((t, index) => (
              <TestimonialCard key={t.id} testimonial={t} highlight={index === 0} />
            ))}
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
