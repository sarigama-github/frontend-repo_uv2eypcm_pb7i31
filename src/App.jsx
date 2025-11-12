import { useEffect, useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const link = 'text-sm md:text-base text-gray-700 hover:text-blue-600 transition-colors'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/80 shadow' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">G</div>
            <div className="leading-tight">
              <div className="font-semibold text-gray-900">GBI HMJ</div>
              <div className="text-[11px] text-gray-500">House of His Majesty</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className={link}>Beranda</a>
            <a href="#about" className={link}>Tentang</a>
            <a href="#ministries" className={link}>Pelayanan</a>
            <a href="#services" className={link}>Ibadah</a>
            <a href="#sermons" className={link}>Kotbah</a>
            <a href="#events" className={link}>Event</a>
            <a href="#contact" className={link}>Kontak</a>
            <a href="#giving" className="px-3 py-1.5 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700">Donasi</a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700">
            <span className="sr-only">Menu</span>
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            <a onClick={() => setOpen(false)} href="#home" className={link}>Beranda</a>
            <a onClick={() => setOpen(false)} href="#about" className={link}>Tentang</a>
            <a onClick={() => setOpen(false)} href="#ministries" className={link}>Pelayanan</a>
            <a onClick={() => setOpen(false)} href="#services" className={link}>Ibadah</a>
            <a onClick={() => setOpen(false)} href="#sermons" className={link}>Kotbah</a>
            <a onClick={() => setOpen(false)} href="#events" className={link}>Event</a>
            <a onClick={() => setOpen(false)} href="#contact" className={link}>Kontak</a>
            <a onClick={() => setOpen(false)} href="#giving" className="w-full text-center px-3 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700">Donasi</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXb3JzaGlwfGVufDB8MHx8fDE3NjI5Mzg2OTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Worship" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white/10"/>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 text-white">
        <p className="uppercase tracking-[0.3em] text-sm md:text-base text-white/80">Gereja Bethel Indonesia</p>
        <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          GBI HMJ
          <span className="block text-white/80 text-2xl md:text-3xl font-normal mt-2">Hadir Untuk Meninggikan Nama Yesus</span>
        </h1>
        <p className="mt-6 max-w-2xl text-white/80">Kami adalah komunitas yang mengasihi Allah dan sesama, bertumbuh dalam firman, dan melayani kota dengan kasih.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#services" className="px-5 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-white/90">Jadwal Ibadah</a>
          <a href="#giving" className="px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">Dukung Pelayanan</a>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({label, title, subtitle}){
  return (
    <div className="text-center mb-12">
      <p className="uppercase tracking-widest text-blue-600 text-xs md:text-sm font-semibold">{label}</p>
      <h2 className="mt-2 text-2xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}

function About(){
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle label="Tentang Kami" title="Yesus adalah pusat dari segala sesuatu" subtitle="Visi kami adalah melihat orang-orang mengenal Yesus, bertumbuh dalam kedewasaan rohani, dan berdampak bagi dunia." />
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img className="w-full h-72 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBYm91dHxlbnwwfDB8fHwxNzYyOTM4NzAyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="About" />
          <div className="space-y-4 text-gray-600">
            <p>Kami percaya gereja adalah rumah bagi setiap orang. Di GBI HMJ, Anda akan menemukan komunitas yang hangat, ibadah yang membawa hadirat Tuhan, dan pengajaran firman yang relevan.</p>
            <p>Terinspirasi dari semangat excellence dan keramahtamahan, kami ingin menghadirkan pengalaman ibadah yang modern namun tetap berakar pada kebenaran firman Tuhan.</p>
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-blue-50">
                <div className="text-2xl font-bold text-blue-700">3</div>
                <div className="text-xs text-blue-700/80">Ibadah Minggu</div>
              </div>
              <div className="p-4 rounded-xl bg-indigo-50">
                <div className="text-2xl font-bold text-indigo-700">12+</div>
                <div className="text-xs text-indigo-700/80">Komunitas</div>
              </div>
              <div className="p-4 rounded-xl bg-cyan-50">
                <div className="text-2xl font-bold text-cyan-700">1000+</div>
                <div className="text-xs text-cyan-700/80">Jemaat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Ministries(){
  const items = [
    {title:'Anak & Remaja', desc:'Tempat anak bertumbuh dalam iman dengan sukacita.', image:'https://images.unsplash.com/photo-1694588100986-96c4ae947b8e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmFrJTIwJTI2JTIwUmVtYWphfGVufDB8MHx8fDE3NjI5Mzg3MDd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'},
    {title:'Youth & Young Adult', desc:'Generasi muda yang berapi-api bagi Tuhan.', image:'https://images.unsplash.com/photo-1694588100986-96c4ae947b8e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmFrJTIwJTI2JTIwUmVtYWphfGVufDB8MHx8fDE3NjI5Mzg3MDd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'},
    {title:'Keluarga', desc:'Membangun keluarga yang sehat dan kuat di dalam Kristus.', image:'https://images.unsplash.com/photo-1694588100986-96c4ae947b8e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmFrJTIwJTI2JTIwUmVtYWphfGVufDB8MHx8fDE3NjI5Mzg3MDd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'},
  ]
  return (
    <section id="ministries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle label="Pelayanan" title="Bergabung dalam komunitas yang hidup" />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition">
              <div className="relative h-48">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                <div className="absolute bottom-3 left-3 text-white font-semibold text-lg">{item.title}</div>
              </div>
              <div className="p-5 text-gray-600">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services(){
  const schedules = [
    {name:'Ibadah Pagi', time:'Minggu 08.00', place:'Main Hall'},
    {name:'Ibadah Siang', time:'Minggu 11.00', place:'Main Hall'},
    {name:'Ibadah Sore', time:'Minggu 17.00', place:'Main Hall'},
  ]
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle label="Ibadah" title="Mari bersekutu dan menyembah" subtitle="Kami menantikan kehadiran Anda di salah satu jadwal berikut." />
        <div className="grid md:grid-cols-3 gap-6">
          {schedules.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <div className="text-sm text-blue-600 font-semibold">{s.name}</div>
              <div className="mt-2 text-2xl font-bold text-gray-900">{s.time}</div>
              <div className="mt-1 text-gray-600">{s.place}</div>
              <a href="#contact" className="mt-5 inline-block text-blue-600 hover:text-blue-700 font-medium">Kunjungi Kami →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Sermons(){
  const sermons = [
    {title:'Hidup Dalam Anugerah', speaker:'Ps. Daniel', date:'1 Sep 2025', thumb:'https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?q=80&w=2070&auto=format&fit=crop'},
    {title:'Iman Yang Mengalahkan Dunia', speaker:'Ps. Maria', date:'25 Agu 2025', thumb:'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2069&auto=format&fit=crop'},
    {title:'Kuat & Teguh', speaker:'Ps. Andi', date:'18 Agu 2025', thumb:'https://images.unsplash.com/photo-1475688621402-4257c3024b31?q=80&w=2069&auto=format&fit=crop'},
  ]
  return (
    <section id="sermons" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle label="Kotbah" title="Firman yang membangun iman" />
        <div className="grid md:grid-cols-3 gap-6">
          {sermons.map((s, i) => (
            <a key={i} href="#" className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition">
              <div className="relative h-44">
                <img src={s.thumb} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-white/90 text-xs font-medium">{s.date}</div>
              </div>
              <div className="p-5">
                <div className="text-gray-900 font-semibold group-hover:text-blue-700 transition">{s.title}</div>
                <div className="text-sm text-gray-500 mt-1">{s.speaker}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Events(){
  const items = [
    {title:'Prayer Night', date:'Jumat, 19.30', desc:'Malam doa bersama untuk kota dan bangsa.'},
    {title:'Connect Group', date:'Setiap Kamis', desc:'Bergabung dalam komunitas kecil untuk bertumbuh.'},
    {title:'Baptisan Air', date:'Bulan Ini', desc:'Daftarkan diri Anda untuk baptisan air.'},
  ]
  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle label="Event" title="Jangan lewatkan kegiatan kami" />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((e, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <div className="text-sm text-blue-600 font-semibold">{e.date}</div>
              <div className="mt-2 text-xl font-bold text-gray-900">{e.title}</div>
              <p className="mt-2 text-gray-600">{e.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium">Info lebih lanjut →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Giving(){
  return (
    <section id="giving" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <SectionTitle label="Donasi" title="Bersama kita membangun Rumah Tuhan" subtitle="Terima kasih untuk dukungan Anda melalui persembahan dan persepuluhan." />
        <div className="mt-6 grid md:grid-cols-3 gap-6 text-left">
          <div className="p-5 rounded-xl bg-white/10">
            <div className="font-semibold">Transfer Bank</div>
            <div className="mt-2 text-white/80 text-sm">BCA - 123 456 7890 a.n. GBI HMJ</div>
          </div>
          <div className="p-5 rounded-xl bg-white/10">
            <div className="font-semibold">QRIS</div>
            <div className="mt-2 text-white/80 text-sm">Tersedia di meja informasi</div>
          </div>
          <div className="p-5 rounded-xl bg-white/10">
            <div className="font-semibold">Online Giving</div>
            <div className="mt-2 text-white/80 text-sm">Hubungi kami untuk link donasi</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact(){
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle label="Kontak" title="Kunjungi atau hubungi kami" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden h-72">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.999999!2d106.8166667!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTEnNTIuMCJTIDEwNsKwNDknMDAuMCJF!5e0!3m2!1sen!2sid!4v1680000000000" className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="space-y-4 text-gray-600">
            <div>
              <div className="text-gray-900 font-semibold">Alamat</div>
              <div>Jalan Damai No. 123, Jakarta</div>
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Jam Kantor</div>
              <div>Selasa - Sabtu, 10.00 - 16.00</div>
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Kontak</div>
              <div>+62 812-0000-0000 • info@gbihmj.org</div>
            </div>
            <form className="pt-2 grid grid-cols-1 gap-3">
              <input className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nama" />
              <input className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
              <textarea className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Pesan" rows="4" />
              <button className="px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 w-full md:w-auto">Kirim</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-white text-gray-900 flex items-center justify-center font-bold">G</div>
            <div className="text-white font-semibold">GBI HMJ</div>
          </div>
          <p className="mt-3 text-sm">Meninggikan Yesus, Mengasihi Sesama, Membangun Kota.</p>
        </div>
        <div>
          <div className="text-white font-semibold">Tautan</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">Tentang</a></li>
            <li><a href="#ministries" className="hover:text-white">Pelayanan</a></li>
            <li><a href="#services" className="hover:text-white">Ibadah</a></li>
            <li><a href="#giving" className="hover:text-white">Donasi</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Alamat</div>
          <p className="mt-3 text-sm">Jalan Damai No. 123, Jakarta<br/>+62 812-0000-0000</p>
        </div>
        <div>
          <div className="text-white font-semibold">Ikuti Kami</div>
          <div className="mt-3 flex gap-3">
            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h11v-9.29H9.69V11.1h3.08V8.41c0-3.05 1.86-4.71 4.58-4.71 1.3 0 2.41.1 2.73.14v3.17h-1.88c-1.48 0-1.77.7-1.77 1.73v2.26h3.55l-.46 3.61h-3.09V24h6.06A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 2.86 8.14 6.83 9.46.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.2-3.37-1.2-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.33 1.09 2.9.84.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.29.1-2.69 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8a9.6 9.6 0 012.5.34c1.9-1.3 2.74-1.02 2.74-1.02.55 1.4.2 2.44.1 2.69.64.69 1.03 1.58 1.03 2.67 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.18.59.69.49A9.97 9.97 0 0021.96 12c0-5.5-4.46-9.96-9.96-9.96z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .4 1.5.9.5.5.7.9.9 1.5.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.4 1-.9 1.5-.5.5-.9.7-1.5.9-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.4-1.5-.9-.5-.5-.7-.9-.9-1.5-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.4-1 .9-1.5.5-.5.9-.7 1.5-.9.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.2 0 6.9.1 5.6.1 4.6.3 3.8.6c-.9.3-1.6.7-2.3 1.4C.8 2.7.4 3.4.1 4.3.3 5.1.1 6.1.1 7.4 0 8.8 0 9.3 0 12s0 3.2.1 4.6c.1 1.3.2 2.3.5 3.1.3.9.7 1.6 1.4 2.3.7.7 1.4 1.1 2.3 1.4.8.3 1.8.5 3.1.5 1.4.1 1.9.1 4.6.1s3.2 0 4.6-.1c1.3-.1 2.3-.2 3.1-.5.9-.3 1.6-.7 2.3-1.4.7-.7 1.1-1.4 1.4-2.3.3-.8.4-1.8.5-3.1.1-1.4.1-1.9.1-4.6s0-3.2-.1-4.6c-.1-1.3-.2-2.3-.5-3.1-.3-.9-.7-1.6-1.4-2.3C20 1.3 19.3.9 18.4.6 17.6.3 16.6.1 15.3.1 13.9 0 13.4 0 12 0z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm">© {new Date().getFullYear()} GBI HMJ. All rights reserved.</div>
    </footer>
  )
}

export default function App(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ministries />
        <Services />
        <Sermons />
        <Events />
        <Giving />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
