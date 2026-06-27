'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: '首页' },
  { href: '/scenery', label: '风景' },
  { href: '/people', label: '人物' },
  { href: '/animals', label: '动物' },
  { href: '/architecture', label: '建筑' },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">Gallery</Link>
      <div className="nav-links">
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className={`nav-link ${pathname === l.href ? 'active' : ''}`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
