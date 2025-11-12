import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Education from './components/education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [profile, setProfile] = useState(null)
  const [education, setEducation] = useState(null)
  const [experience, setExperience] = useState([])
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])
  const API = 'http://localhost:3000'

  useEffect(() => {
    Promise.all([
      fetch(`${API}/profile`).then(r => r.json()),
      fetch(`${API}/education`).then(r => r.json()),
      fetch(`${API}/experience`).then(r => r.json()),
      fetch(`${API}/projects`).then(r => r.json()),
      fetch(`${API}/skills`).then(r => r.json())
    ])
      .then(([p, edu, e, proj, s]) => { 
        setProfile(p)
        setEducation(edu)
        setExperience(e)
        setProjects(proj)
        setSkills(s)
      })
      .catch(err => console.error('Failed to load JSON Server data', err))
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('section').forEach(s => {
      s.classList.add('reveal')
      observer.observe(s)
    })

    return () => observer.disconnect()
  }, [profile])

  if (!profile) return <div className='p-8'>Loading… (make sure json-server is running)</div>

  return (
    <div className="pt-24 max-w-7xl mx-auto p-6">
      <Header profile={profile} />
      <main className="space-y-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <About profile={profile} />
            <Experience items={experience} />
            <Projects items={projects} />
          </div>
          <div className="space-y-8">
            <Education education={education} />
            <Skills items={skills} />
            <Contact profile={profile} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}