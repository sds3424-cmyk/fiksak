import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const observerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observerRef.current.unobserve(e.target) }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => observerRef.current.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    setFormStatus('sending')
    setTimeout(() => { setFormStatus('sent'); e.target.reset() }, 1200)
  }

  return (
    <>
      <Head>
        <title>Klaudia Fiksak · Psychotherapist & Psychologist</title>
        <meta name="description" content="Klaudia Fiksak — experienced psychotherapist, psychologist & sexologist in Tarnów. CBT, individual, couples & group therapy. Sessions in Polish & English." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ── Mobile Menu ── */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => setMenuOpen(false)} style={{
          position:'absolute',top:'1.5rem',right:'1.5rem',
          background:'none',border:'none',fontSize:'1.5rem',
          cursor:'pointer',color:'var(--ink-50)'
        }}>✕</button>
        {['About','Services','Approach','Contact'].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
        ))}
        <a href="#booking" onClick={() => setMenuOpen(false)} style={{
          background:'var(--teal)',color:'#fff',padding:'0.9rem 2.5rem',
          borderRadius:'999px',fontWeight:600,fontSize:'1.1rem'
        }}>Book Session</a>
      </div>

      {/* ── Nav ── */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#" className="nav-logo">Klaudia <span>Fiksak</span></a>
        <ul className="nav-links">
          {['About','Services','Approach','Contact'].map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
          <li><a href="#booking" className="nav-book">Book Session</a></li>
        </ul>
        <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-blob hero-blob-1"/>
        <div className="hero-blob hero-blob-2"/>
        <div className="hero-blob hero-blob-3"/>
        <div className="hero-dots"/>

        <div className="hero-inner">
          {/* Left — content */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="pill">Now accepting new clients</span>
            </div>
            <h1 className="hero-name">
              <span className="line1">Klaudia</span>
              <span className="line2">Fiksak</span>
            </h1>
            <p className="hero-role">Psychotherapist · Psychologist · Sexologist</p>
            <div className="hero-divider"/>
            <p className="hero-desc">
              A safe, confidential space where meaningful change begins.
              Evidence-based care grounded in empathy and over a decade of
              clinical practice — in Polish and English.
            </p>
            <div className="hero-actions">
              <a href="#booking" className="btn-primary">✦ Book a Session</a>
              <a href="#about"   className="btn-ghost">Learn more →</a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-num">10+</div>
                <div className="stat-label">Years practice</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">PL·EN</div>
                <div className="stat-label">Languages</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">4+</div>
                <div className="stat-label">Modalities</div>
              </div>
            </div>
          </div>

          {/* Right — photo */}
          <div className="hero-visual">
            <div className="hero-photo-wrap">
              <img src="/photo.jpeg" alt="Klaudia Fiksak" />
            </div>
            {/* Floating info cards */}
            <div className="hero-card hero-card-1">
              <div className="hero-card-icon teal">🏆</div>
              <div className="hero-card-text">
                <div className="label">Experience</div>
                <div className="value">10+ Years</div>
              </div>
            </div>
            <div className="hero-card hero-card-2">
              <div className="hero-card-icon coral">📍</div>
              <div className="hero-card-text">
                <div className="label">Location</div>
                <div className="value">Tarnów, PL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual reveal" style={{position:'relative'}}>
              <div className="about-photo-frame">
                <img src="/photo.jpeg" alt="Klaudia Fiksak" />
              </div>
              <div className="about-badge">
                <div className="badge-num">2018</div>
                <div className="badge-txt">Founded</div>
              </div>
            </div>

            <div className="reveal">
              <span className="pill">About Me</span>
              <h2 className="section-title">
                A holistic approach<br/>to <em>your wellbeing</em>
              </h2>
              <p className="about-text">
                I am an experienced psychotherapist, psychologist, and sexologist with
                over 10 years of practice in mental and emotional health. My approach is
                characterized by deep empathy, professionalism, and a genuine commitment
                to achieving lasting improvements in my clients' quality of life.
              </p>
              <p className="about-text">
                Based in Tarnów at my practice —{' '}
                <strong style={{color:'var(--ink-80)',fontWeight:500}}>
                  Gabinet Psychologiczno-Terapeutyczny
                </strong>{' '}
                — I work with individuals, couples, and groups both in-person and online.
                I also offer sessions in English for international clients.
              </p>
              <p className="about-text">
                I continuously invest in professional development through ongoing training
                and supervision, ensuring the highest quality of support for every client.
              </p>
              <div className="about-chips">
                {['Cognitive-Behavioral Therapy','Individual Therapy','Couples Therapy',
                  'Group Therapy','Sexology','Online Sessions','Polish & English'
                ].map(c => <span key={c} className="chip">{c}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="services-header reveal">
            <span className="pill">What I Offer</span>
            <h2 className="section-title">
              Therapy tailored<br/>to <em>your needs</em>
            </h2>
            <p className="section-sub">
              Evidence-based therapeutic modalities, each adapted to
              the individual needs and goals of every client.
            </p>
          </div>
          <div className="services-grid">
            {[
              {num:'01',icon:'🧠',title:'Individual Therapy',  color:'c-teal',  tag:'CBT · Psychodynamic',
               desc:'One-on-one sessions for anxiety, depression, trauma, self-esteem, life transitions, and personal growth.'},
              {num:'02',icon:'💑',title:'Couples Therapy',     color:'c-coral', tag:'Communication · Trust',
               desc:'Helping partners improve communication, resolve conflict, rebuild trust, and deepen emotional connection.'},
              {num:'03',icon:'👥',title:'Group Therapy',       color:'c-sand',  tag:'Community · Support',
               desc:'A structured group environment to explore shared experiences and build genuine human connection.'},
              {num:'04',icon:'🌸',title:'Sexology',            color:'c-teal',  tag:'Confidential · Non-judgmental',
               desc:'Compassionate support for challenges related to sexuality, intimacy, identity, and sexual health.'},
              {num:'05',icon:'💻',title:'Online Sessions',     color:'c-coral', tag:'PL · EN · Remote',
               desc:'High-quality therapy from anywhere in the world, via secure video call, in Polish or English.'},
              {num:'06',icon:'📋',title:'Psychological Assessment',color:'c-sand',tag:'Diagnosis · Clarity',
               desc:'Professional diagnostic evaluation to inform the most effective and personalised treatment plan.'},
            ].map(s => (
              <div key={s.num} className={`service-card ${s.color} reveal`}>
                <div className="service-num">{s.num}</div>
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-tag">{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="section" id="approach">
        <div className="container">
          <div className="approach-layout">
            <div className="reveal">
              <span className="pill">My Approach</span>
              <h2 className="section-title">
                Holistic care for<br/><em>the whole person</em>
              </h2>
              <p className="section-sub">
                I believe every person holds the inner resources needed to face
                life's challenges. My role is to help you access and develop them.
              </p>
              <ul className="approach-list">
                {[
                  'Cognitive-Behavioral Therapy (CBT) as primary framework',
                  'Evidence-based, continuously updated practice',
                  'Empathy at the core of every session',
                  'Bilingual sessions: Polish & English',
                  'In-person in Tarnów and online globally',
                  'Regular professional supervision & training',
                  'Tailored, individual treatment plans',
                ].map(item => (
                  <li key={item} className="approach-item">
                    <div className="approach-dot"/>
                    <span className="ai-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal">
              <div className="approach-card">
                <span className="approach-quote-mark">"</span>
                <p className="approach-quote">
                  I believe that everyone has the ability to tap into their inner
                  resources and face life's difficulties — whether they be daily
                  challenges, deeper traumas, or personal growth opportunities.
                </p>
                <div className="approach-author">
                  <div className="author-avatar">🌿</div>
                  <div>
                    <div className="author-name">Klaudia Fiksak</div>
                    <div className="author-title">Psychotherapist & Psychologist, Tarnów</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Booking ── */}
      <section className="section booking-section" id="booking">
        <div className="container">
          <div className="booking-header reveal">
            <span className="pill">Book a Session</span>
            <h2 className="section-title">
              Ready to take<br/><em>the first step?</em>
            </h2>
            <p className="section-sub">
              Choose the format that works best for you.
              All options offer the same quality of compassionate care.
            </p>
          </div>
          <div className="booking-grid">
            {[
              {icon:'🏛️', title:'In-Person',   featured:false, badge:null,
               desc:'Visit the practice at ul. Romanowicza 24/2 in Tarnów. A calm, private space for deep therapeutic work.'},
              {icon:'✨',  title:'Online Video', featured:true,  badge:'Most popular',
               desc:'Connect from anywhere via secure video call. Available in Polish and English, worldwide.'},
              {icon:'👥', title:'Group Therapy', featured:false, badge:null,
               desc:'Join a scheduled group session. Ask about upcoming group programmes and current availability.'},
            ].map(b => (
              <div key={b.title} className={`booking-card${b.featured ? ' featured' : ''} reveal`}>
                <div className="booking-card-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
                {b.badge && <div className="featured-badge">{b.badge}</div>}
              </div>
            ))}
          </div>
          <div className="booking-cta reveal">
            <a href="#contact" className="btn-primary" style={{fontSize:'1rem',padding:'1rem 2.5rem'}}>
              📅 Schedule Your Session
            </a>
            <p>Fill in the contact form below — I'll respond promptly to confirm your time.</p>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-layout">
            <div className="reveal">
              <span className="pill">Get in Touch</span>
              <h2 className="section-title">
                Let's start a<br/><em>conversation</em>
              </h2>
              <p className="section-sub">
                Reaching out is the first and often hardest step.
                I'm here to make it as easy as possible.
              </p>
              <div className="contact-details">
                {[
                  {icon:'📍',label:'Office',      text:'ul. Romanowicza 24 lok. 2\n33-100 Tarnów, Małopolska'},
                  {icon:'🌐',label:'Languages',   text:'Polish · English'},
                  {icon:'💼',label:'LinkedIn',    link:'https://pl.linkedin.com/in/klaudia-fiksak-513b10293/en', text:'View Professional Profile →'},
                  {icon:'⏰',label:'Response',    text:'I aim to reply within 24 hours'},
                ].map(c => (
                  <div key={c.label} className="contact-item">
                    <div className="contact-icon">{c.icon}</div>
                    <div className="contact-item-body">
                      <h4>{c.label}</h4>
                      {c.link
                        ? <a href={c.link} target="_blank" rel="noopener noreferrer">{c.text}</a>
                        : <p style={{whiteSpace:'pre-line'}}>{c.text}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                  <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.3rem',fontWeight:500,marginBottom:'0.3rem',color:'var(--ink)'}}>
                    Send a message
                  </h3>
                  <p style={{fontSize:'0.82rem',color:'var(--ink-30)'}}>
                    All enquiries are treated with strict confidentiality.
                  </p>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>First name</label>
                    <input type="text" placeholder="Anna" required/>
                  </div>
                  <div className="form-group">
                    <label>Last name</label>
                    <input type="text" placeholder="Kowalski" required/>
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="you@example.com" required/>
                </div>
                <div className="form-group">
                  <label>Session type</label>
                  <select>
                    <option value="">Select a service...</option>
                    {['Individual Therapy','Couples Therapy','Group Therapy',
                      'Sexology','Online Session','Psychological Assessment','Not sure yet'
                    ].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Tell me briefly what brings you here, or any questions you have. All information is confidential."/>
                </div>
                <button type="submit" className="form-submit" disabled={formStatus==='sending'}>
                  {formStatus==='sending' ? '⏳ Sending...'
                    : formStatus==='sent'    ? '✓ Message sent!'
                    : 'Send Message →'}
                </button>
                {formStatus==='sent' && (
                  <p style={{fontSize:'0.82rem',color:'var(--teal)',textAlign:'center'}}>
                    Thank you! I'll be in touch within 24 hours.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <span className="footer-logo">Klaudia <span>Fiksak</span></span>
            <span className="footer-mid">Gabinet Psychologiczno-Terapeutyczny · Tarnów, Małopolska</span>
            <span className="footer-copy">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </>
  )
}
