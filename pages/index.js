import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const observerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observerRef.current.unobserve(e.target)
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => observerRef.current.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('sending')
    setTimeout(() => {
      setFormStatus('sent')
      e.target.reset()
    }, 1200)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <Head>
        <title>Klaudia Fiksak · Psychotherapist & Psychologist</title>
      </Head>

      {/* ── Mobile Menu ── */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button onClick={closeMenu} style={{
          position:'absolute', top:'1.5rem', right:'1.5rem',
          background:'none', border:'none', color:'var(--white-50)',
          fontSize:'1.5rem', cursor:'pointer'
        }}>✕</button>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#approach" onClick={closeMenu}>Approach</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="#booking" onClick={closeMenu} style={{
          background:'linear-gradient(135deg,var(--rose),#d4907a)',
          color:'#1a0a08', padding:'0.9rem 2.5rem',
          borderRadius:'999px', fontWeight:600
        }}>Book Session</a>
      </div>

      {/* ── Nav ── */}
      <nav className="nav" style={scrolled ? {padding:'0.9rem 2rem'} : {}}>
        <a href="#" className="nav-logo">
          Klaudia <span>Fiksak</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#approach">Approach</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#booking" className="nav-book">Book Session</a></li>
        </ul>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          style={{background:'none',border:'none',cursor:'pointer',display:'flex',flexDirection:'column',gap:'5px',padding:'4px'}}
        >
          <span style={{display:'block',width:'22px',height:'2px',background:'rgba(255,255,255,0.8)',borderRadius:'1px'}}/>
          <span style={{display:'block',width:'22px',height:'2px',background:'rgba(255,255,255,0.8)',borderRadius:'1px'}}/>
          <span style={{display:'block',width:'22px',height:'2px',background:'rgba(255,255,255,0.8)',borderRadius:'1px'}}/>
        </button>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </div>
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <span className="pill">Available for new clients</span>
          </div>
          <h1 className="hero-name">
            <span className="line1">Klaudia</span>
            <span className="line2">Fiksak</span>
          </h1>
          <p className="hero-role">
            Psychotherapist · Psychologist · Sexologist
          </p>
          <p className="hero-desc">
            A safe, confidential space where meaningful change begins. Evidence-based
            care grounded in empathy and over a decade of clinical practice — in Polish and English.
          </p>
          <div className="hero-actions">
            <a href="#booking" className="btn-primary">
              <span>✦</span> Book a Session
            </a>
            <a href="#about" className="btn-ghost">
              Learn more →
            </a>
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
      </section>

      {/* ── About ── */}
      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual reveal">
              <div className="about-photo-frame">
                <img src="/photo.jpg" alt="Klaudia Fiksak" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}} />
              </div>
              <div className="about-badge">
                <div className="badge-num">2018</div>
                <div className="badge-txt">Practice founded</div>
              </div>
            </div>

            <div className="about-content reveal">
              <div className="section-pill">
                <span className="pill">About Me</span>
              </div>
              <h2 className="section-title" style={{marginTop:'1rem'}}>
                A holistic approach<br />to <em>your wellbeing</em>
              </h2>
              <p className="about-text">
                I am an experienced psychotherapist, psychologist, and sexologist with over
                10 years of practice in mental and emotional health. My approach is characterized
                by deep empathy, professionalism, and a genuine commitment to achieving lasting
                improvements in my clients' quality of life.
              </p>
              <p className="about-text">
                Based in Tarnów at my practice — <strong style={{color:'var(--white-80)',fontWeight:500}}>Gabinet Psychologiczno-Terapeutyczny</strong> — I work
                with individuals, couples, and groups both in-person and online. I also offer
                sessions in English for international clients.
              </p>
              <p className="about-text">
                I continuously invest in professional development through ongoing training and
                supervision, ensuring the highest quality of support for every client I work with.
              </p>
              <div className="about-chips">
                {['Cognitive-Behavioral Therapy','Individual Therapy','Couples Therapy','Group Therapy','Sexology','Online Sessions','Polish & English'].map(c => (
                  <span key={c} className="chip">{c}</span>
                ))}
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
            <h2 className="section-title" style={{marginTop:'1.2rem'}}>
              Therapy tailored<br />to <em>your needs</em>
            </h2>
            <p className="section-sub">
              A broad range of evidence-based therapeutic modalities, each adapted
              to the individual needs and goals of every client.
            </p>
          </div>
          <div className="services-grid">
            {[
              { num:'01', icon:'🧠', title:'Individual Therapy', color:'rose', tag:'CBT · Psychodynamic',
                desc:'One-on-one sessions for anxiety, depression, trauma, self-esteem, life transitions, and personal growth. A space fully dedicated to you.' },
              { num:'02', icon:'💑', title:'Couples Therapy', color:'lavender', tag:'Communication · Trust',
                desc:'Supporting partners in improving communication, resolving conflicts, rebuilding trust, and deepening emotional connection.' },
              { num:'03', icon:'👥', title:'Group Therapy', color:'sage', tag:'Community · Support',
                desc:'A structured group environment to explore shared experiences, develop social skills, and build genuine human connection.' },
              { num:'04', icon:'🌸', title:'Sexology', color:'rose', tag:'Confidential · Non-judgmental',
                desc:'Compassionate professional support for questions and challenges related to sexuality, intimacy, identity, and sexual health.' },
              { num:'05', icon:'💻', title:'Online Sessions', color:'lavender', tag:'PL · EN · Remote',
                desc:'High-quality therapy from anywhere in the world, via secure video call. Available in both Polish and English.' },
              { num:'06', icon:'📋', title:'Psychological Assessment', color:'gold', tag:'Diagnosis · Clarity',
                desc:'Professional diagnostic evaluation to better understand psychological functioning and inform the most effective treatment plan.' },
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
      <section className="section approach-section" id="approach">
        <div className="container">
          <div className="approach-layout">
            <div className="reveal">
              <span className="pill">My Approach</span>
              <h2 className="section-title" style={{marginTop:'1.2rem'}}>
                Holistic care for<br /><em>the whole person</em>
              </h2>
              <p className="section-sub">
                I believe every person holds the inner resources needed to face life's
                challenges. My role is to help you access and develop those resources.
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
                    <div className="approach-dot" />
                    <span className="approach-item-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="approach-visual-block reveal">
              <div className="approach-card">
                <span className="approach-quote-mark">"</span>
                <p className="approach-quote">
                  I believe that everyone has the ability to tap into their inner
                  resources and face life's difficulties — whether they be daily
                  challenges, deeper traumas, or personal growth opportunities.
                </p>
                <div className="approach-author">
                  <div className="author-dot">🌿</div>
                  <div className="author-info">
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
            <h2 className="section-title" style={{marginTop:'1.2rem'}}>
              Ready to take<br /><em>the first step?</em>
            </h2>
            <p className="section-sub">
              Scheduling your session is simple. Choose the format that works best for you
              — all options offer the same quality of care.
            </p>
          </div>
          <div className="booking-grid">
            {[
              { icon:'🏛️', title:'In-Person', badge:null, featured:false,
                desc:'Visit the practice at ul. Romanowicza 24/2 in Tarnów. A calm, private space for deep therapeutic work.' },
              { icon:'✨', title:'Online Video', badge:'Most popular', featured:true,
                desc:'Connect from anywhere via secure video call. Available in Polish and English, worldwide.' },
              { icon:'👥', title:'Group Therapy', badge:null, featured:false,
                desc:'Join a scheduled group therapy session. Ask about upcoming group programmes and availability.' },
            ].map(b => (
              <div key={b.title} className={`booking-card ${b.featured ? 'featured' : ''} reveal`}>
                <div className="booking-card-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
                {b.badge && <span className="booking-card-badge">{b.badge}</span>}
              </div>
            ))}
          </div>
          <div className="booking-cta reveal">
            <a href="#contact" className="btn-primary" style={{fontSize:'1rem', padding:'1rem 2.5rem'}}>
              <span>📅</span> Schedule Your Session
            </a>
            <p>Fill in the contact form below — I'll respond promptly to confirm your appointment.</p>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="contact-layout">
            <div className="reveal">
              <span className="pill">Get in Touch</span>
              <h2 className="section-title" style={{marginTop:'1.2rem'}}>
                Let's start a<br /><em>conversation</em>
              </h2>
              <p className="section-sub">
                Reaching out is the first and often hardest step. I'm here to make it
                as easy as possible.
              </p>
              <div className="contact-details">
                {[
                  { icon:'📍', label:'Office', text:'ul. Romanowicza 24 lok. 2\n33-100 Tarnów, Małopolska' },
                  { icon:'🌐', label:'Languages', text:'Polish · English' },
                  { icon:'💼', label:'LinkedIn', link:'https://pl.linkedin.com/in/klaudia-fiksak-513b10293/en', text:'View Professional Profile →' },
                  { icon:'⏰', label:'Response time', text:'I aim to reply within 24 hours' },
                ].map(c => (
                  <div key={c.label} className="contact-item">
                    <div className="contact-icon">{c.icon}</div>
                    <div className="contact-item-body">
                      <h4>{c.label}</h4>
                      {c.link
                        ? <a href={c.link} target="_blank" rel="noopener noreferrer">{c.text}</a>
                        : <p style={{whiteSpace:'pre-line'}}>{c.text}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div style={{marginBottom:'0.5rem'}}>
                  <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.3rem',fontWeight:500,marginBottom:'0.3rem'}}>
                    Send a message
                  </h3>
                  <p style={{fontSize:'0.82rem',color:'var(--white-30)'}}>
                    All enquiries are treated with strict confidentiality.
                  </p>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>First name</label>
                    <input type="text" placeholder="Anna" required />
                  </div>
                  <div className="form-group">
                    <label>Last name</label>
                    <input type="text" placeholder="Kowalski" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="you@example.com" required />
                </div>
                <div className="form-group">
                  <label>Session type</label>
                  <select>
                    <option value="">Select a service...</option>
                    <option>Individual Therapy</option>
                    <option>Couples Therapy</option>
                    <option>Group Therapy</option>
                    <option>Sexology</option>
                    <option>Online Session</option>
                    <option>Psychological Assessment</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Tell me briefly what brings you here, or any questions you have. All information is confidential." />
                </div>
                <button type="submit" className="form-submit" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' ? '⏳ Sending...'
                    : formStatus === 'sent' ? '✓ Message sent!'
                    : 'Send Message →'}
                </button>
                {formStatus === 'sent' && (
                  <p style={{fontSize:'0.82rem',color:'var(--sage)',textAlign:'center'}}>
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
            <span className="footer-logo-text">Klaudia Fiksak</span>
            <span className="footer-mid">
              Gabinet Psychologiczno-Terapeutyczny · Tarnów, Małopolska
            </span>
            <span className="footer-copy">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
        }
        .reveal.visible {
          opacity: 1;
          transform: none;
        }
      `}</style>
    </>
  )
}
