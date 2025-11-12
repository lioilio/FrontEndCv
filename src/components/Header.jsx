import React from 'react'

export default function Header({ profile }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 header-blur shadow-2xl shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="avatar-circle">
            <img src="/src/assets/image.png" alt="avatar" className="w-full h-full object-cover"/>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold gradient-text">{profile.name}</h1>
            <p className="text-xs text-cyan-300">{profile.title}</p>
          </div>
        </div>

        <nav className="ml-auto flex items-center gap-2 text-sm">
          <a href="#about" className="px-3 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">About</a>
          <a href="#education" className="px-3 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">Education</a>
          <a href="#experience" className="px-3 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">Experience</a>
          <a href="#projects" className="px-3 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">Projects</a>
          <a href="#contact" className="px-3 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">Contact</a>
          <a href={profile.socials.portfolio} target="_blank" rel="noreferrer" className="ml-3 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">Portfolio</a>
        </nav>
      </div>
    </header>
  )
}