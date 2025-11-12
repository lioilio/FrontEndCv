import React from 'react'

export default function Education({ education }) {
  if (!education) return null
  
  return (
    <section id="education" className="card hover:border-purple-400/40 transition-all duration-500 sticky top-24">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
        <h2 className="text-2xl font-bold gradient-text">Education</h2>
      </div>
      <div className="space-y-3 p-4 bg-slate-900/50 rounded-xl border border-purple-500/20">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-3">
          <span className="text-2xl">🎓</span>
        </div>
        <h3 className="font-semibold text-xl text-slate-100">{education.degree}</h3>
        <p className="text-cyan-300">{education.institution}</p>
        <div className="flex items-center gap-2 text-sm text-slate-400 pt-2 border-t border-slate-700">
          <span>📅</span>
          <span>Graduation: {education.expectedGraduation}</span>
        </div>
      </div>
    </section>
  )
}