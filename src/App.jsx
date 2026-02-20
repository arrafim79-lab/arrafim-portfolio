import { useEffect, useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import heroPhoto from './assets/hero.jpg'
import aboutPhoto from './assets/about.jpg'
import project1 from "./assets/project1.jpeg"
import project2 from "./assets/project2.jpeg"
import project3 from "./assets/project3.jpeg"
import sertifikat1 from "./assets/sertifikat1.jpg"
import sertifikat2 from "./assets/sertifikat2.jpg"
import sertifikat3 from "./assets/sertifikat3.jpg"
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGithub, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaMicrosoft,
  FaLaravel,
  FaBootstrap,
  FaPhp
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiCisco,
  SiCanva,
  SiCoreldraw,
  SiVercel
} from "react-icons/si";
const GITHUB_USERNAME = "arrafim79-lab";

function App() {
  
  const [githubData, setGithubData] = useState(null)
  const [totalStars, setTotalStars] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedCert, setSelectedCert] = useState(null)
  const aboutRef = useRef(null)
  const [startTyping, setStartTyping] = useState(false)

useEffect(() => {
  const username = "arrafim79-lab";

  // ambil data user
  fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
    .then(res => res.json())
    .then(data => setGithubData(data));

  // ambil semua repo untuk hitung stars
  fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`)
    .then(res => res.json())
    .then(repos => {
      const stars = repos.reduce((total, repo) => total + repo.stargazers_count, 0);
      setTotalStars(stars);
    });

}, []);
  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setStartTyping(true)
      }
    })
  }, { threshold: 0.4 })

  if (aboutRef.current) {
    observer.observe(aboutRef.current)
  }

  return () => {
    if (aboutRef.current) observer.unobserve(aboutRef.current)
  }
}, [])

  return (
    <div className="text-white overflow-hidden bg-slate-950">

      {/* Glow Background */}
      <div className="pointer-events-none absolute top-0 left-0 w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Navbar */}
     <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-md">
  <div className="max-w-7xl mx-auto px-6">
    <div className="h-16 flex items-center justify-between">

      {/* Logo */}
      <h1 className="text-cyan-400 font-bold text-xl">
        WEB
      </h1>

      {/* MENU DESKTOP */}
      <div className="hidden md:flex space-x-8">
        <a href="#about" className="hover:text-cyan-400">About</a>
        <a href="#projects" className="hover:text-cyan-400">Projects</a>
        <a href="#skills" className="hover:text-cyan-400">Skills</a>
        <a href="#sertifikat" className="hover:text-cyan-400">Sertifikat</a>
         <a href="#github" className="hover:text-cyan-400">Stats</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>
      </div>

      {/* BUTTON MOBILE */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

    </div>
  </div>

  {/* MENU MOBILE */}
  {menuOpen && (
    <div className="md:hidden bg-gray-900 border-t border-gray-800">
      <div className="flex flex-col items-center py-4 space-y-4">
        <a onClick={()=>setMenuOpen(false)} href="#about">About</a>
        <a onClick={()=>setMenuOpen(false)} href="#projects">Projects</a>
        <a onClick={()=>setMenuOpen(false)} href="#skills">Skills</a>
        <a onClick={()=>setMenuOpen(false)} href="#sertifikat">Sertifikat</a>
        <a onClick={()=>setMenuOpen(false)} href="#contact">Contact</a>
      </div>
    </div>
  )}
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
            'Web Developer',
            1000,
            '',
            500,
            'Menggabungkan teknologi web dan kecerdasan buatan.',
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
      <div className="w-[300px] aspect-[4/5] overflow-hidden translate-y-20 border-2 border-cyan-400 p-2 shadow-[0_0_40px_rgba(34,211,238,0.6)]">
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
    speed={100}
    cursor={true}
    repeat={0}
    className="text-gray-400 leading-relaxed whitespace-pre-line"
  />
)}

    </div>

  </div>

</section>

{/* ================= PROJECTS ================= */}
<section
  id="projects"
  className="min-h-screen flex flex-col justify-center bg-slate-950 relative z-10 py-20"
>
  <div className="max-w-6xl mx-auto w-full px-10">

    <h2 className="text-3xl text-cyan-400 font-bold text-center mb-12">
      Proyek Saya
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Project 1 */}
      <div className="group relative overflow-hidden rounded-xl cursor-pointer">
        <img
          src={project1}
          alt="Project 1"
          className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <p className="text-white font-semibold text-lg">AI Website</p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="group relative overflow-hidden rounded-xl cursor-pointer">
        <img
          src={project2}
          alt="Project 2"
          className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <p className="text-white font-semibold text-lg">Dashboard Modern</p>
        </div>
      </div>

      {/* Project 3 */}
      <div className="group relative overflow-hidden rounded-xl cursor-pointer">
        <img
          src={project3}
          alt="Project 3"
          className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <p className="text-white font-semibold text-lg">Company Profile</p>
        </div>
      </div>

    </div>

  </div>
</section>


{/* Skills */}
<section
  id="skills"
  className="min-h-screen flex flex-col justify-center px-10 py-20 bg-gray-900 text-center relative z-10"
>
  <div className="max-w-6xl mx-auto w-full px-10 text-center">
  <h2 className="text-3xl text-cyan-400 font-bold mb-12">
    Keahlian Saya
  </h2>

  <div className="text-white">

  <div className="flex gap-8 animate-scroll whitespace-nowrap py-6">

    {/* HTML */}
    <div className="skill-item">
      <FaHtml5 size={45} className="text-orange-500" />
      <p>HTML</p>
    </div>

    {/* CSS */}
    <div className="skill-item">
      <FaCss3Alt size={45} className="text-blue-500" />
      <p>CSS</p>
    </div>

    {/* React */}
    <div className="skill-item">
      <FaReact size={45} className="text-cyan-400" />
      <p>React</p>
    </div>

    {/* JS */}
    <div className="skill-item">
      <SiJavascript size={45} className="text-yellow-400" />
      <p>JavaScript</p>
    </div>

    {/* Bootstrap */}
    <div className="skill-item">
      <FaBootstrap size={45} className="text-purple-500" />
      <p>Bootstrap</p>
    </div>

    {/* Laravel */}
    <div className="skill-item">
      <FaLaravel size={45} className="text-red-500" />
      <p>Laravel</p>
    </div>

    {/* PHP */}
    <div className="skill-item">
      <FaPhp size={45} className="text-indigo-400" />
      <p>PHP</p>
    </div>

    {/* MySQL */}
    <div className="skill-item">
      <SiMysql size={45} className="text-blue-400" />
      <p>MySQL</p>
    </div>

    {/* Word */}
    <div className="skill-item">
      <FaMicrosoft size={45} className="text-blue-500" />
      <p>Word</p>
    </div>

    {/* Excel */}
    <div className="skill-item">
      <FaMicrosoft size={45} className="text-green-500" />
      <p>Excel</p>
    </div>

    {/* PowerPoint */}
    <div className="skill-item">
      <FaMicrosoft size={45} className="text-orange-500" />
      <p>PowerPoint</p>
    </div>

    {/* Canva */}
    <div className="skill-item">
      <SiCanva size={45} className="text-cyan-300" />
      <p>Canva</p>
    </div>

    {/* CorelDraw */}
    <div className="skill-item">
      <SiCoreldraw size={45} className="text-green-400" />
      <p>CorelDraw</p>
    </div>

    {/* Cisco */}
    <div className="skill-item">
      <SiCisco size={45} className="text-blue-300" />
      <p>Cisco</p>
    </div>

    {/* Vercel */}
    <div className="skill-item">
      <SiVercel size={45} />
      <p>Vercel</p>
    </div>

    {/* DUPLIKAT supaya loop mulus */}
    {/* copy beberapa item */}
    <div className="skill-item">
  <SiJavascript size={45} className="text-yellow-400" />
  <p>JavaScript</p>
</div>

<div className="skill-item">
  <FaBootstrap size={45} className="text-purple-500" />
  <p>Bootstrap</p>
</div>
</div>

  </div>

</div>


      </section>

{/* ================= SERTIFIKAT ================= */}
<section
  id="sertifikat"
  className="min-h-screen flex flex-col justify-center px-10 py-20 bg-slate-950 relative z-10"
>
  <div className="max-w-6xl mx-auto w-full px-10 text-center">
  <h2 className="text-3xl text-cyan-400 font-bold text-center mb-12">
    Sertifikat Saya
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

    {/* Sertifikat 1 */}
    <div className="bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 transition">
      <img
        src={sertifikat1}
        alt="sertifikat 1"
        className="rounded-lg mb-4"
      />
      <button
  onClick={() => setSelectedCert(sertifikat1)}
  className="w-full py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition"
>
  Detail
</button>

    </div>

    {/* Sertifikat 2 */}
    <div className="bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 transition">
      <img
        src={sertifikat2}
        alt="sertifikat 2"
        className="rounded-lg mb-4"
      />
      <button
  onClick={() => setSelectedCert(sertifikat2)}
  className="w-full py-2 rounded-lg bg-purple-500 hover:bg-purple-400 transition"
>
  Detail
</button>

    </div>

    {/* Sertifikat 3 */}
    <div className="bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 transition">
      <img
        src={sertifikat3}
        alt="sertifikat 3"
        className="rounded-lg mb-4"
      />
      <button
  onClick={() => setSelectedCert(sertifikat3)}
  className="w-full py-2 rounded-lg bg-green-500 hover:bg-green-400 transition"
>
  Detail
</button>
</div>
    </div>

  </div>
</section>

{/* ================= GITHUB STATS ================= */}
<section
  id="github"
  className="min-h-screen flex flex-col justify-center px-10 py-20 bg-gray-900 text-center relative z-10"
>
  <div className="max-w-6xl mx-auto w-full">

    <h2 className="text-3xl text-cyan-400 font-bold mb-12">
      GitHub Statistics
    </h2>

    {/* Contribution Graph */}
    <div className="bg-slate-950 p-6 rounded-xl border border-cyan-400/30 shadow-lg mb-12 overflow-x-auto">
      <img
        src="https://ghchart.rshah.org/22d3ee/arrafim79-lab"
        alt="github contributions"
        className="w-full"
      />
      <div className="flex justify-between text-gray-400 text-sm mt-2">
        <span>Less</span>
        <span>More</span>
      </div>
    </div>

    {/* Stats Cards */}
    <div className="grid md:grid-cols-4 gap-6">

      {/* Repo */}
      <div className="bg-slate-950 p-6 rounded-xl shadow-lg border border-cyan-400/20">
        <p className="text-gray-400">Repository</p>
        <h3 className="text-4xl font-bold text-cyan-400 mt-2">
          {githubData?.public_repos ?? "--"}
        </h3>
        <p className="text-gray-500 text-sm">public repo</p>
      </div>

      {/* Stars */}
      <div className="bg-slate-950 p-6 rounded-xl shadow-lg border border-yellow-400/20">
        <p className="text-gray-400">Bintang</p>
        <h3 className="text-4xl font-bold text-yellow-400 mt-2">
          {totalStars}
        </h3>
        <p className="text-gray-500 text-sm">total stars</p>
      </div>

      {/* Contributions */}
      <div className="bg-slate-950 p-6 rounded-xl shadow-lg border border-green-400/20">
        <p className="text-gray-400">Kontribusi</p>
        <h3 className="text-4xl font-bold text-green-400 mt-2">
          Active
        </h3>
        <p className="text-gray-500 text-sm">last year</p>
      </div>

      {/* Followers */}
      <div className="bg-slate-950 p-6 rounded-xl shadow-lg border border-purple-400/20">
        <p className="text-gray-400">Pengikut</p>
        <h3 className="text-4xl font-bold text-purple-400 mt-2">
          {githubData?.followers ?? "--"}
        </h3>
        <p className="text-gray-500 text-sm">GitHub followers</p>
      </div>

    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 mt-0 relative z-10">
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
              <li><a href="#skills" className="hover:text-cyan-400">Skill</a></li>
              <li><a href="#sertifikat" className="hover:text-cyan-400">Sertifikat</a></li>
              <li><a href="#github" className="hover:text-cyan-400">stats</a></li>
            </ul>
          </div>

          <div id="contact">
            <h3 className="font-semibold mb-2">Kontak</h3>
            <p className="text-gray-400">Email: arrafim79@gmail.com</p>
            <p className="text-gray-400">WhatsApp: +6289528990464</p>
          </div>

{/* SOCIAL ICONS */}
<div className="flex justify-center md:justify-start gap-3 mt-4">
  <a
    href="https://github.com/arrafim79-lab"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 hover:scale-110 transition"
  >
    <FaGithub size={18} />
  </a>

  <a
    href="https://facebook.com/Shiroi Neko"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-600 hover:scale-110 transition"
  >
    <FaFacebook size={18} />
  </a>

  <a
    href="https://instagram.com/muhamadrfi_"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-110 transition"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="https://wa.me/6289528990464"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center rounded-full bg-green-500 hover:scale-110 transition"
  >
    <FaWhatsapp size={18} />
  </a>

</div>
        </div>

        <div className="text-center text-gray-500 border-t border-slate-800 py-4">
          © {new Date().getFullYear()} Muhammad Arrafi. All rights reserved.
        </div>
      </footer>
{/* MODAL SERTIFIKAT */}
{selectedCert && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    onClick={() => setSelectedCert(null)}
  >
    <div
      className="relative max-w-3xl w-full mx-4"
      onClick={(e) => e.stopPropagation()}
    >
      {/* tombol close */}
      <button
        onClick={() => setSelectedCert(null)}
        className="absolute -top-10 right-0 text-white text-3xl hover:text-cyan-400"
      >
        ✕
      </button>

      {/* gambar */}
      <img
        src={selectedCert}
        alt="preview"
        className="rounded-xl shadow-2xl border-4 border-cyan-400"
      />
    </div>
  </div>
)}

    </div>
  )
}

export default App
