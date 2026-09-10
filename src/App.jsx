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
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 animasi-bg overflow-hidden p-5">

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

      {/* --- Kartu Ucapan Utama --- */}
      <div className="relative z-10 rounded-3xl bg-white/80 p-10 text-center shadow-2xl backdrop-blur-md max-w-lg">

        <h1 className="text-5xl font-bold text-pink-600 drop-shadow-sm">
          Happy 19th, Puput! 🎉
        </h1>

        <p className="mt-5 text-xl text-gray-700 leading-relaxed">
          Selamat ulang tahun! Semoga hari ini seindah senyummu dan tahun ini membawa banyak kebahagiaan baru.
        </p>

      </div>



    </div>
  )
}

export default App;