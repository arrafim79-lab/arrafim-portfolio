import { useEffect, useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import heroPhoto from './assets/hero.jpg'
import aboutPhoto from './assets/about.jpg'
import project1 from "./assets/project1.jpeg"
import project2 from "./assets/project2.jpeg"
import project3 from "./assets/project3.jpeg"

function App() {
  const aboutRef = useRef(null)
  const [startTyping, setStartTyping] = useState(false)
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStartTyping(true)
        }
      })
    },
    { threshold: 0.4 }
  )

  if (aboutRef.current) {
    observer.observe(aboutRef.current)
  }

  return () => {
    if (aboutRef.current) {
      observer.unobserve(aboutRef.current)
    }
  }
}, [])
  return (
    <div className="text-white overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Navbar */}
     <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-md">
  <div className="max-w-7xl mx-auto px-6">
    <div className="h-16 flex items-center justify-between relative">

      {/* Logo kiri */}
      <h1 className="text-cyan-400 font-bold text-xl">
        WEB PORTFOLIO
      </h1>

      {/* Menu tengah */}
      <div className="absolute left-1/2 -translate-x-1/2 flex space-x-8">
        <a href="#about" className="hover:text-cyan-400 transition">About</a>
        <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
        <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
      </div>

    </div>
  </div>
</nav>


      {/* Hero */}
<section className="min-h-screen pt-16 bg-slate-950 relative">
  <div className="max-w-7xl mx-auto px-10 h-full flex items-center">

    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      {/* KIRI */}
      <div>
        <h2 className="text-5xl font-bold text-cyan-400 drop-shadow-lg">
          MUHAMMAD ARRAFI
        </h2>

        <TypeAnimation
          sequence={[
            'AI Web Developer',
            1000,
            '',
            500,
            'Menggabungkan teknologi web dan kecerdasan buatan untuk solusi digital inovatif dan future-ready.',
            2000,
          ]}
          wrapper="div"
          speed={50}
          repeat={Infinity}
          className="text-xl mt-4 text-gray-300"
        />

        <a href="#contact">
          <button className="mt-8 px-8 py-3 
  bg-cyan-500 rounded-full
  transition-all duration-300
  hover:scale-110
  hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]">
            Hubungi Saya
          </button>
        </a>
      </div>

      {/* KANAN */}
      <div className="flex justify-center">
      <div className="w-[300px] aspect-[4/5] overflow translate-y-20 cyan-400 p-2 shadow-[0_0_40px_rgba(34,211,238,0.6)]">
        <img
          src={heroPhoto}
          alt="Foto Hero"
          className="w-full h-full object-cover object-[60%_50%]"
        />
      </div>
      </div>

    </div>

  </div>

</section>

      {/* About */}
      <section
        id="about"
        ref={aboutRef}
        className="min-h-screen
    px-10 py-20
    bg-gray-900
    relative"
      >

  {/* Judul Besar */}
  <h2 className="text-4xl text-cyan-400 font-bold text-center mb-16">
    Tentang Saya
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* FOTO */}
    <div className="flex justify-center">
      <div className="w-72 h-72 rounded-full border-4 border-cyan-400 p-2 shadow-[0_0_40px_rgba(34,211,238,0.6)]">
        <img
          src={aboutPhoto}
          alt="Foto about"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>

    {/* ISI TEXT */}
    <div>

      {/* Sub Judul */}
      <h3 className="text-2xl font-bold mb-6 leading-relaxed">
        Saya <span className="text-cyan-400">Muhammad Arrafi</span>, 
        Mahasiswa UIN SJECH M.DJAMIL DJAMBEK BUKITTINGGI, INDONESIA. 
        Jurusan PTIK
      </h3>

      {/* Isi Paragraf */}

      {startTyping && (
  <TypeAnimation
    sequence={[
      `Saya berspesialis dalam membangun website berbasis Laravel, mahir menggunakan Microsoft Word dan membuat desain PPT. Walaupun belum seberapa, tetapi saya lumayan mahir dalam bidang tersebut.

Saya juga memiliki skill beladiri Taekwondo. Berlatih di Duri–Riau dan beberapa kali pernah mengikuti pertandingan Taekwondo. Pernah menjadi pelatih Taekwondo selama 2 tahun dan terakhir memegang sabuk Merah Strip 2.`,
    ]}
    wrapper="p"
    speed={30}
    cursor={true}
    repeat={0}
    className="text-gray-400 leading-relaxed whitespace-pre-line"
  />
)}

    </div>

  </div>

</section>


      {/* Projects */}
      <section id="projects" className="min-h-screen pt-16
    flex flex-col items-center justify-center text-center
    bg-slate-950
    relative">
        <h2 className="text-3xl text-cyan-400 font-bold text-center mb-10">
          Pacar Saya
        </h2>
        <div className="grid md:grid-cols-3 gap-6">

  {/* PROJECT 1 */}
  <div className="group relative overflow-hidden rounded-xl hover:shadow-cyan-500/50 hover:shadow-2xl
    ">
    <img
      src={project1}
      alt="AI Website"
      className="w-full aspect-[4/3] object-cover transform group-hover:scale-110 transition duration-500"
    />

    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
      <h3 className="text-white text-xl font-bold">
        PAP IMUT 1
      </h3>
    </div>
  </div>

  {/* PROJECT 2 */}
  <div className="group relative overflow-hidden rounded-xl hover:shadow-cyan-500/50 hover:shadow-2xl
    ">
    <img
      src={project2}
      alt="Dashboard Modern"
      className="w-full aspect-[4/3] object-cover transform group-hover:scale-110 transition duration-500"
    />

    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
      <h3 className="text-white text-xl font-bold">
        PAP IMUT 2
      </h3>
    </div>
  </div>

  {/* PROJECT 3 */}
  <div className="group relative overflow-hidden rounded-xl hover:shadow-cyan-500/50 hover:shadow-2xl
    ">
    <img
      src={project3}
      alt="Company Profile"
      className="w-full aspect-[4/3] object-cover transform group-hover:scale-110 transition duration-500"
    />

    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
      <h3 className="text-white text-xl font-bold">
        PAP IMUT 3
      </h3>
    </div>
  </div>

</div>

      </section>






      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 mt-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-cyan-400 text-xl font-bold">
              Muhammad Arrafi
            </h2>
            <p className="text-gray-400 mt-2">
              AI Web Developer yang membangun solusi digital modern dan future-ready.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Navigasi</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-cyan-400">Tentang</a></li>
              <li><a href="#projects" className="hover:text-cyan-400">Proyek</a></li>
              <li><a href="#contact" className="hover:text-cyan-400">Kontak</a></li>
            </ul>
          </div>

          <div id="contact">
            <h3 className="font-semibold mb-2">Kontak</h3>
            <p className="text-gray-400">Email: arrafim79@gmail.com</p>
            <p className="text-gray-400">WhatsApp: +6289528990464</p>
          </div>

        </div>

        <div className="text-center text-gray-500 border-t border-slate-800 py-4">
          © {new Date().getFullYear()} Muhammad Arrafi. All rights reserved.
        </div>
      </footer>

    </div>
  )
}

export default App
