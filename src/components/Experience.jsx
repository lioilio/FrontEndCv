import React from 'react'

export default function Experience({ items = [] }) {
  return (
    <section id="experience">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
        <h2 className="text-3xl font-bold gradient-text">Experience</h2>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={item.id} className="card hover:border-cyan-400/40 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
            <div className="pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{index === 0 ? '🎬' : '🎨'}</span>
                    <h3 className="font-bold text-xl text-cyan-300">{item.role}</h3>
                  </div>
                  <p className="text-purple-400 font-medium">{item.company}</p>
                </div>
                <span className="text-sm text-slate-400 mt-2 sm:mt-0 px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700">{item.range}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}