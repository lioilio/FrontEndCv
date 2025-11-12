import React from 'react'

export default function Skills({ items = [] }) {
  return (
    <section id="skills" className="card hover:border-cyan-400/40 transition-all duration-500 sticky top-[28rem]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
        <h2 className="text-2xl font-bold gradient-text">Skills</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((s, i) => (
          <span key={i} className="skill-tag text-slate-200">{s}</span>
        ))}
      </div>
    </section>
  )
}