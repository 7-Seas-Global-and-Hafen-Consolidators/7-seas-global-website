import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Porque from './components/Porque'
import Parceiros from './components/Parceiros'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const header = document.getElementById('header')
    const onScroll = () => {
      if (header) header.classList.toggle('is-scrolled', window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const nav = document.querySelector('.nav')
    const toggle = document.querySelector('.nav__toggle')
    const onToggleClick = () => {
      const open = nav.classList.toggle('is-open')
      toggle.setAttribute('aria-expanded', String(open))
    }
    const onLinkClick = () => {
      nav.classList.remove('is-open')
      toggle.setAttribute('aria-expanded', 'false')
    }
    let links = []
    if (toggle && nav) {
      toggle.addEventListener('click', onToggleClick)
      links = Array.from(nav.querySelectorAll('.nav__link'))
      links.forEach((a) => a.addEventListener('click', onLinkClick))
    }

    const els = document.querySelectorAll('.reveal')
    let io = null
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-visible')
            io.unobserve(en.target)
          }
        })
      }, { threshold: 0.12 })
      els.forEach((el) => io.observe(el))
    } else {
      els.forEach((el) => el.classList.add('is-visible'))
    }

    document.querySelectorAll('.icon-mask[data-icon]').forEach((el) => {
      const mask = 'url("/assets/icons/' + el.dataset.icon + '.png") center / contain no-repeat'
      el.style.webkitMask = mask
      el.style.mask = mask
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (toggle && nav) {
        toggle.removeEventListener('click', onToggleClick)
        links.forEach((a) => a.removeEventListener('click', onLinkClick))
      }
      if (io) io.disconnect()
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Porque />
        <Parceiros />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
