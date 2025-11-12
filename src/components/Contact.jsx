import React from 'react'

export default function Contact({ profile }) {
  return (
    <section id="contact" className="card hover:border-purple-400/40 transition-all duration-500 sticky top-[38rem]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
        <h2 className="text-2xl font-bold gradient-text">Contact</h2>
      </div>
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
          <span className="text-xl">✉️</span>
          <div>
            <span className="font-medium text-slate-400 text-xs block mb-1">Email</span>
            <a href={`mailto:${profile.email}`} className="text-cyan-400 hover:text-purple-400 transition-colors break-all">{profile.email}</a>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-colors">
          <span className="text-xl">📱</span>
          <div>
            <span className="font-medium text-slate-400 text-xs block mb-1">Phone</span>
            <span className="text-slate-200">{profile.phone}</span>
          </div>
        </div>
        <div className="pt-3 border-t border-slate-700">
          <p className="font-medium text-slate-400 text-sm mb-3 flex items-center gap-2">
            <span>🌐</span>
            <span>Social Media</span>
          </p>
          <div className="flex flex-wrap gap-2">
            <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="px-3 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-lg text-sm text-pink-300 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/20 transition-all">@liebraris</a>
            <a href={profile.socials.portfolio} target="_blank" rel="noreferrer" className="px-3 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-sm text-cyan-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">@injiliooroh18</a>
          </div>
        </div>
      </div>
    </section>
  )
}