import { useState, useRef } from 'react';
import Confetti from 'react-confetti';

// 1. Daftar Hiasan Super Banyak!
const daftarHiasan = [
  { id: 1, ikon: '🎈', kiri: '10%', atas: '15%', jeda: '0s' },
  { id: 2, ikon: '✨', kiri: '80%', atas: '10%', jeda: '2s' },
  { id: 3, ikon: '🎁', kiri: '20%', atas: '80%', jeda: '4s' },
  { id: 4, ikon: '🎂', kiri: '75%', atas: '70%', jeda: '1s' },
  { id: 5, ikon: '💖', kiri: '45%', atas: '5%', jeda: '3s' },
  { id: 6, ikon: '🎉', kiri: '90%', atas: '45%', jeda: '5s' },
  { id: 7, ikon: '🌸', kiri: '5%', atas: '50%', jeda: '2.5s' },
  { id: 8, ikon: '🎈', kiri: '55%', atas: '85%', jeda: '1.5s' },
  { id: 9, ikon: '✨', kiri: '30%', atas: '30%', jeda: '4.5s' },
  { id: 10, ikon: '🎁', kiri: '65%', atas: '25%', jeda: '0.5s' },
  { id: 11, ikon: '🦋', kiri: '35%', atas: '65%', jeda: '3.5s' },
  { id: 12, ikon: '💖', kiri: '85%', atas: '85%', jeda: '1s' },
  { id: 13, ikon: '🎉', kiri: '15%', atas: '40%', jeda: '2s' },
  { id: 14, ikon: '🌸', kiri: '50%', atas: '45%', jeda: '0s' },
  // --- Tambahan Baru di Bawah Ini ---
  { id: 15, ikon: '🍰', kiri: '12%', atas: '75%', jeda: '6s' },
  { id: 16, ikon: '🥳', kiri: '88%', atas: '25%', jeda: '7s' },
  { id: 17, ikon: '🥂', kiri: '40%', atas: '90%', jeda: '3.2s' },
  { id: 18, ikon: '🌟', kiri: '60%', atas: '15%', jeda: '5.5s' },
  { id: 19, ikon: '💫', kiri: '25%', atas: '20%', jeda: '1.8s' },
  { id: 20, ikon: '🎈', kiri: '70%', atas: '50%', jeda: '4.2s' },
  { id: 21, ikon: '🎵', kiri: '5%', atas: '85%', jeda: '8s' },
  { id: 22, ikon: '🎶', kiri: '95%', atas: '70%', jeda: '6.5s' },
  { id: 23, ikon: '🎀', kiri: '50%', atas: '25%', jeda: '2.2s' },
  { id: 24, ikon: '💖', kiri: '30%', atas: '90%', jeda: '9s' },
  { id: 25, ikon: '✨', kiri: '75%', atas: '35%', jeda: '0.8s' },
  { id: 26, ikon: '🎁', kiri: '45%', atas: '60%', jeda: '7.5s' },
  { id: 27, ikon: '🌸', kiri: '85%', atas: '60%', jeda: '3.8s' },
  { id: 28, ikon: '🦋', kiri: '20%', atas: '50%', jeda: '5.2s' },
  { id: 29, ikon: '🎂', kiri: '40%', atas: '40%', jeda: '1.2s' },
  { id: 30, ikon: '🎉', kiri: '60%', atas: '75%', jeda: '8.5s' },
  { id: 31, ikon: '🌟', kiri: '10%', atas: '35%', jeda: '4.8s' },
  { id: 32, ikon: '🎈', kiri: '80%', atas: '95%', jeda: '2.8s' },
  { id: 33, ikon: '🍰', kiri: '35%', atas: '10%', jeda: '6.2s' },
  { id: 34, ikon: '🥳', kiri: '95%', atas: '15%', jeda: '9.5s' },
  { id: 35, ikon: '💫', kiri: '55%', atas: '5%', jeda: '3.5s' },


];

function App() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const audioRef = useRef(null);

  const bukaKartu = () => {
    setIsCardOpen(true);
    // Putar lagu saat tombol diklik (karena browser butuh interaksi user dulu)
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const tutupKartu = () => {
    setIsCardOpen(false);
    // Boleh di-pause atau biarkan lagunya tetap jalan
    // if (audioRef.current) audioRef.current.pause(); 
  };

  // Jika tombol sudah diklik, tampilkan halaman baru ini:
  if (isCardOpen) {
    return (
      <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-5 relative overflow-hidden animasi-muncul">
        
        {/* --- Efek Confetti --- */}
        <Confetti 
          width={window.innerWidth} 
          height={window.innerHeight} 
          recycle={true}
          numberOfPieces={300}
          gravity={0.15}
        />

        {/* Dekorasi simpel di halaman baru */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-200 via-pink-100 to-white opacity-70 pointer-events-none"></div>

        {/* Kartu Ucapan */}
        <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 md:p-14 rounded-[3rem] shadow-2xl border-4 border-pink-200 text-center max-w-2xl transform transition-all duration-700 hover:scale-105 mx-4">
          <h1 className="text-4xl md:text-5xl font-black text-pink-500 mb-6 drop-shadow-sm">
            Selamat Ulang Tahun, Puput! 🎂
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-8">
            First things first, i want to say Happy Birthday to my beloved girlfriend! i hope every plan, dreams and hope will come true! and i hope you always stay healthy and happy. Even though we have some problem lately, i always pray for you and i hope you can enjoy your birthday.love you!
          </p>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-8">
            You're not just my girlfriend, you're my everything. I am so incredibly proud of you for everything you have been through and how strong you've become. I feel so lucky and happy to be by your side, and I always want to be with you, every single day, forever.
          </p>
          <p className="text-xxl md:text-2xl text-gray-700 leading-relaxed font-bold mb-8">
            I LOVE YOU
          </p>

          <button
            onClick={tutupKartu}
            className="bg-purple-500 hover:bg-purple-600 transition-colors text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg cursor-pointer"
          >
            ← Kembali
          </button>
        </div>
      </div>
    );
  }

  // Jika belum diklik, tampilkan halaman utama:
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 animasi-bg overflow-hidden p-5 animasi-muncul">
      
      {/* --- Elemen Audio (Tersembunyi) --- */}
      <audio ref={audioRef} src="/backsound.mp3" loop />

      {/* --- Gambar SVG Bawaan --- */}
      <img src="/birthday-cake.svg" className="absolute top-5 left-5 w-24 gerak-acak-1 opacity-70" alt="Kue" />
      <img src="/birthday-cake.svg" className="absolute bottom-10 right-10 w-32 gerak-acak-2 opacity-50" style={{ animationDelay: '3s' }} alt="Kue" />

      {/* --- Foto Melayang Tambahan --- */}
      <img
        src="/k1.jpg"
        className="absolute w-32 h-32 object-cover rounded-full gerak-acak-3 shadow-lg border-4 border-white opacity-80"
        style={{ left: '10%', top: '30%', animationDelay: '1s' }}
        alt="Foto Puput"
      />

      <img
        src="/k2.jpg"
        className="absolute w-32 h-32 object-cover rounded-full gerak-acak-3 shadow-lg border-4 border-white opacity-80"
        style={{ left: '20%', top: '30%', animationDelay: '1s' }}
        alt="Foto Puput"
      />

      <img
        src="/k3.jpg"
        className="absolute w-32 h-32 object-cover rounded-full gerak-acak-3 shadow-lg border-4 border-white opacity-80"
        style={{ left: '300%', bottom: '30%', animationDelay: '1s' }}
        alt="Foto Puput"
      />

      <img
        src="/k4.jpg"
        className="absolute w-32 h-32 object-cover rounded-full gerak-acak-3 shadow-lg border-4 border-white opacity-80"
        style={{ right: '10%', bottom: '30%', animationDelay: '1s' }}
        alt="Foto Puput"
      />

      <img
        src="/k5.jpg"
        className="absolute w-32 h-32 object-cover rounded-full gerak-acak-3 shadow-lg border-4 border-white opacity-80"
        style={{ right: '20%', top: '30%', animationDelay: '1s' }}
        alt="Foto Puput"
      />

      <img
        src="/k6.jpg"
        className="absolute w-32 h-32 object-cover rounded-full gerak-acak-3 shadow-lg border-4 border-white opacity-80"
        style={{ right: '30%', top: '30%', animationDelay: '1s' }}
        alt="Foto Puput"
      />

      {/* --- Mesin Pencetak Emoji (Map) --- */}
      {daftarHiasan.map((item) => {
        const jenisAnimasi = item.id % 3 === 0 ? 'gerak-acak-1'
          : item.id % 3 === 1 ? 'gerak-acak-2'
            : 'gerak-acak-3';

        return (
          <div
            key={item.id}
            className={`absolute text-4xl opacity-50 text-white ${jenisAnimasi}`}
            style={{
              left: item.kiri,
              top: item.atas,
              animationDelay: item.jeda
            }}
          >
            {item.ikon}
          </div>
        )
      })}

      {/* --- Area Konten Utama --- */}
      <div className="relative z-10 mt-52 md:mt-80">
        <button
          onClick={bukaKartu}
          className="bg-pink-600 hover:bg-pink-700 transition-colors text-white font-bold py-4 px-8 rounded-full shadow-lg text-lg animate-bounce cursor-pointer"
        >
          Klik ini beb!
        </button>
      </div>


      {/* --- Judul Melengkung (Setengah Elips) --- */}
      <div className="absolute z-1 mt-30 top-10 md:top-20 w-full flex justify-center pointer-events-none drop-shadow-xl animate-pulse" style={{ animationDuration: '3s' }}>

        <svg viewBox="0 0 1000 350" className="w-[95vw] max-w-[900px] overflow-visible">
          {/* Jalur (path) diperlebar agar muat untuk teks panjang */}
          <path id="lengkungan" d="M 50,300 A 450,200 0 0,1 950,300" fill="transparent" />

          {/* Menggunakan fontSize bawaan SVG agar proporsional dan tidak kepotong */}
          <text fontSize="55" className="font-black teks-tema-imut" style={{ letterSpacing: '2px' }}>
            <textPath href="#lengkungan" startOffset="50%" textAnchor="middle">
              Happy birthday Puput sayangg!
            </textPath>
          </text>
        </svg>

      </div>

      {/* --- Teks di bawahjudul --- */}
      <div className="absolute z-10 top-[40%] md:top-[45%] w-full flex flex-col items-center justify-center gap-3 pointer-events-none drop-shadow-xl animate-pulse text-center" style={{ animationDuration: '3s' }}>
        <p className="text-xl md:text-3xl font-bold text-white animate-bounce px-6">This is a birthday card from your boyfriend</p>
        <p className="text-xl md:text-3xl font-bold text-white animate-bounce px-6">I hope this little thing can make your happiest birthday Sayangg!</p>
      </div>



    </div>
  )
}

export default App;