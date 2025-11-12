import React from 'react'

export default function About({ profile }) {
  return (
    <section id="about" className="card hover:border-cyan-400/40 transition-all duration-500">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
        <h2 className="text-3xl font-bold gradient-text">Profile</h2>
      </div>
      <p className="text-slate-300 leading-relaxed text-lg mb-6">{profile.bio}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-900/50 rounded-xl border border-cyan-500/20">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400">📍</span>
          <div>
            <span className="font-medium text-slate-400 text-sm">Location</span>
            <p className="text-slate-200">{profile.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-purple-400">🎂</span>
          <div>
            <span className="font-medium text-slate-400 text-sm">Born</span>
            <p className="text-slate-200">{profile.dateOfBirth}</p>
          </div>
        </div>
      </div>
    </section>
  )
}