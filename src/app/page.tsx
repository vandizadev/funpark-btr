'use client';

import React, { useState, useEffect } from 'react';
import { 
  MapPin, Phone, Clock, Star, CheckCircle, Navigation, 
  Calculator, Users, Calendar, Send, Menu 
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-blue-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex-shrink-0 flex items-center gap-2">
          {/* Logo Text */}
          <span className="font-extrabold text-2xl tracking-tighter text-blue-600">
            FunPark<span className="text-yellow-500">BTR</span>
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-gray-600 font-medium hover:text-blue-600 transition">Tentang</a>
          <a href="#facilities" className="text-gray-600 font-medium hover:text-blue-600 transition">Wahana</a>
          <a href="#calculator" className="text-blue-600 font-bold hover:text-blue-700 transition">Tiket Rombongan</a>
        </div>
        
        <div>
          <a href="#location" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-300/50 flex items-center gap-2">
            <Navigation size={18} /> Lokasi
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 text-sm font-medium text-blue-50">
        🎉 Wahana Air Keluarga Terbaik di Bekasi Timur
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
        Liburan Seru Gak Perlu Jauh, <br className="hidden md:block" />
        <span className="text-yellow-300">Cukup di FunPark BTR!</span>
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-blue-50 max-w-3xl mx-auto mb-10 leading-relaxed">
        Nikmati 4 kolam renang tematik, water slide seru, dan ember tumpah raksasa. 
        Harga tiket terjangkau, fasilitas lengkap, dan air yang selalu jernih.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#calculator" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-xl transform hover:-translate-y-1 flex justify-center items-center gap-2">
          <Calculator size={20} /> Cek Harga Rombongan
        </a>
        <a href="#facilities" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition flex justify-center items-center">
          Lihat Wahana
        </a>
      </div>
    </div>
    
    {/* Decorative Wave */}
    <div className="absolute bottom-0 w-full overflow-hidden leading-none">
      <svg className="relative block w-full h-12 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
      </svg>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-8 md:py-12 bg-white relative z-20 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
        <div className="p-2">
          <div className="text-3xl md:text-4xl font-bold text-blue-600 flex justify-center items-center gap-1">
            4.3 <Star className="text-yellow-400 fill-yellow-400 w-5 h-5 md:w-6 md:h-6"/>
          </div>
          <div className="text-gray-500 text-xs md:text-sm mt-2 font-medium uppercase tracking-wide">Rating Google</div>
        </div>
        <div className="p-2">
          <div className="text-3xl md:text-4xl font-bold text-blue-600">±25rb</div>
          <div className="text-gray-500 text-xs md:text-sm mt-2 font-medium uppercase tracking-wide">Tiket Hemat</div>
        </div>
        <div className="p-2">
          <div className="text-3xl md:text-4xl font-bold text-blue-600">4+</div>
          <div className="text-gray-500 text-xs md:text-sm mt-2 font-medium uppercase tracking-wide">Kolam Renang</div>
        </div>
        <div className="p-2">
          <div className="text-3xl md:text-4xl font-bold text-blue-600">Daily</div>
          <div className="text-gray-500 text-xs md:text-sm mt-2 font-medium uppercase tracking-wide">Buka Tiap Hari</div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="mb-10 lg:mb-0 relative">
          <div className="absolute inset-0 bg-blue-200 rounded-3xl transform rotate-3 scale-105"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Placeholder Image - Ganti dengan foto asli FunPark nanti */}
            <img 
              src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=1000&auto=format&fit=crop" 
              alt="Anak-anak bermain air" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Lebih dari Sekadar Kolam Renang</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Selamat datang di <strong>FunPark Bekasi Timur Regensi</strong>. Kami hadir sebagai solusi liburan keluarga yang <em>aman, nyaman, dan ramah di kantong</em>. Dengan sistem sanitasi air modern, kami menjamin kebersihan kolam demi kesehatan buah hati Anda.
          </p>
          <ul className="space-y-4">
            {[
              "Air kolam jernih dengan perawatan rutin",
              "Aman untuk Balita (Kolam dangkal tersedia)",
              "Area parkir luas & Foodcourt lengkap",
              "Cocok untuk acara sekolah & ulang tahun"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Facilities = () => (
  <section id="facilities" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Fasilitas Unggulan</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Wahana Seru Untuk Semua Umur</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Water Slides", desc: "Seluncuran air yang memacu adrenalin, aman dan seru untuk anak maupun dewasa.", icon: "🎢", color: "bg-blue-50 text-blue-600" },
          { title: "Ember Tumpah", desc: "Sensasi diguyur air segar dari ember raksasa setiap beberapa menit. Favorit anak-anak!", icon: "💦", color: "bg-cyan-50 text-cyan-600" },
          { title: "Kolam Arus", desc: "Bersantai di atas ban pelampung mengikuti arus air yang tenang mengelilingi area.", icon: "🌊", color: "bg-indigo-50 text-indigo-600" },
        ].map((item, idx) => (
          <div key={idx} className="group p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
            <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- GROUP CALCULATOR COMPONENT (THE MAIN SELLING POINT) ---
const GroupCalculator = () => {
  const [students, setStudents] = useState(30);
  const [teachers, setTeachers] = useState(2);
  const [isWeekend, setIsWeekend] = useState(false);
  const [total, setTotal] = useState(0);

  // Logika Harga Estimasi
  useEffect(() => {
    // Weekday: 20-25rb, Weekend: 25-30rb (Estimasi)
    const basePrice = isWeekend ? 30000 : 25000;
    
    // Diskon jika peserta > 25
    const discount = students >= 25 ? 5000 : 0;
    const finalPrice = basePrice - discount;
    
    // Guru gratis 1 setiap 20 siswa
    const freeTeachers = Math.floor(students / 20);
    const paidTeachers = Math.max(0, teachers - freeTeachers);
    
    const totalCost = (students * finalPrice) + (paidTeachers * basePrice);
    setTotal(totalCost);
  }, [students, teachers, isWeekend]);

  const handleBookWA = () => {
    const message = `Halo Admin FunPark, saya ingin tanya info booking rombongan sekolah.%0A%0AEstimasi dari Web:%0A- Jumlah Siswa: ${students}%0A- Jumlah Guru: ${teachers}%0A- Tanggal: ${isWeekend ? 'Weekend' : 'Weekday'}%0A%0AApakah tanggal tersebut tersedia?`;
    // Nomor HP Target sesuai riset
    window.open(`https://wa.me/6287775558678?text=${message}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-blue-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 bg-blue-500/30 backdrop-blur-md px-4 py-2 rounded-full text-blue-50 font-medium mb-6 border border-blue-400/50">
              <Calculator size={18} className="text-yellow-300" /> Fitur Khusus Sekolah
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Hitung Budget Field Trip Sekolah <span className="text-yellow-300">Cuma 5 Detik</span>
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Kami menyediakan paket khusus untuk kunjungan rombongan sekolah (TK/SD/SMP). Gunakan kalkulator ini untuk mendapatkan estimasi biaya terbaik.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-700/50 rounded-xl border border-blue-500/30">
                <Users className="text-yellow-300 flex-shrink-0 mt-1" size={24}/>
                <div>
                  <h4 className="font-bold text-white">Diskon Rombongan</h4>
                  <p className="text-blue-200 text-sm">Harga tiket lebih murah untuk min. 25 siswa.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-700/50 rounded-xl border border-blue-500/30">
                <Star className="text-yellow-300 flex-shrink-0 mt-1" size={24}/>
                <div>
                  <h4 className="font-bold text-white">Free Tiket Guru</h4>
                  <p className="text-blue-200 text-sm">Dapatkan 1 tiket gratis guru setiap kelipatan 20 siswa.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Calculator Card */}
          <div className="bg-white text-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl border-4 border-white/20">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <Users size={18} className="text-blue-600"/> Jumlah Siswa
                </label>
                <div className="flex items-center gap-4">
                    <input 
                      type="range" min="10" max="200" step="1"
                      value={students} onChange={(e) => setStudents(parseInt(e.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <span className="font-bold text-blue-600 text-xl w-16 text-right">{students}</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">Geser untuk mengubah jumlah siswa</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Jumlah Guru</label>
                  <div className="relative">
                    <input 
                      type="number" min="0" value={teachers}
                      onChange={(e) => setTeachers(parseInt(e.target.value))}
                      className="w-full p-3 pl-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-semibold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Hari Kunjungan</label>
                  <div className="relative">
                    <select 
                      value={isWeekend ? 'weekend' : 'weekday'}
                      onChange={(e) => setIsWeekend(e.target.value === 'weekend')}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-semibold bg-white"
                    >
                      <option value="weekday">Senin - Jumat</option>
                      <option value="weekend">Sabtu - Minggu</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-dashed border-gray-300 mt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-500 font-medium">Estimasi Total</span>
                  <span className="text-3xl font-extrabold text-blue-600">
                    Rp {total.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="flex justify-end">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-medium">
                        Hemat Rp {(students * (students >= 25 ? 5000 : 0)).toLocaleString('id-ID')}
                    </span>
                </div>
              </div>
                
              <button 
                onClick={handleBookWA}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition transform hover:scale-[1.02] shadow-lg shadow-green-200"
              >
                <Send size={20} /> Booking via WhatsApp
              </button>
              <p className="text-xs text-center text-gray-400">
                *Harga di atas adalah estimasi sistem. Harga final dikonfirmasi oleh Admin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationCTA = () => (
  <section id="location" className="py-20 bg-blue-950 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Siap untuk Bersenang-senang?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Lokasi kami sangat strategis di tengah perumahan Bekasi Timur Regensi. Mudah diakses motor maupun mobil.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white">Alamat</h4>
                <p className="text-blue-200">Jl. Raya Bekasi Timur Regensi No.1, Cimuning, Mustika Jaya, Kota Bekasi</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="w-6 h-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white">Jam Operasional</h4>
                <p className="text-blue-200">Senin – Minggu | 08.00 – 16.00 WIB</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-6 h-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white">Kontak</h4>
                <p className="text-blue-200">0877-7555-8678</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a 
              href="https://maps.google.com/?q=FunPark+Bekasi+Timur+Regensi" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-lg shadow-yellow-400/20"
            >
              Buka Google Maps 🗺️
            </a>
          </div>
        </div>

        {/* Maps Embed */}
        <div className="mt-10 lg:mt-0 h-96 bg-gray-700 rounded-2xl overflow-hidden shadow-2xl relative border-4 border-white/10">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.942735467364!2d107.0321560749908!3d-6.326884693662688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69920364f3d2ad%3A0xc3f95889811802a8!2sFunPark%20Bekasi%20Timur%20Regensi%20Waterboom!5e0!3m2!1sid!2sid!4v1708420000000!5m2!1sid!2sid" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="absolute inset-0 w-full h-full"
             ></iframe>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-blue-950 text-blue-300 py-8 border-t border-blue-900">
    <div className="max-w-7xl mx-auto px-4 text-center text-sm">
      <p className="mb-2 font-medium text-blue-200">FunPark Bekasi Timur Regensi</p>
      <p>© {new Date().getFullYear()} Developed for Demo Purpose.</p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-yellow-200 selection:text-blue-900 bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Facilities />
      <GroupCalculator />
      <LocationCTA />
      <Footer />
    </main>
  );
}