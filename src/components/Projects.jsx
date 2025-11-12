import React from 'react'

export default function Projects({ items = [] }) {
  const icons = ['🎥', '🎬', '🎨']
  
  return (
    <section id="projects">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
        <h2 className="text-3xl font-bold gradient-text">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((p, index) => (
          <article key={p.id} className="card hover:border-purple-400/40 transition-all duration-500 group hover:scale-105">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-xl">{icons[index % icons.length]}</span>
              </div>
              <h3 className="font-bold text-lg text-slate-100 group-hover:text-cyan-300 transition-colors">{p.title}</h3>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">{p.summary}</p>
            <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-purple-400 transition-colors group/link">
              <span>View Project</span>
              <span className="group-hover/link:translate-x-1 transition-transform">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}