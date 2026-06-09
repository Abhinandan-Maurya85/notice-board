import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Navbar() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '/notices', label: 'All Notices' },
    { href: '/about',   label: 'About Us'    },
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-brand">
          <span className="brand-icon">📋</span>
          <span className="brand-name">NoticeBoard</span>
        </Link>

        {/* Desktop  */}
        <div className="nav-links">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${router.pathname === href ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link href="/notices/create" className="nav-btn">
            + Post Notice
          </Link>
        </div>

        {/* Hamburger — only visible on mobile via CSS */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`mobile-link ${router.pathname === href ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/notices/create"
            className="mobile-nav-btn"
            onClick={() => setMenuOpen(false)}
          >
            + Post Notice
          </Link>
        </div>
      )}
    </nav>
  )
}