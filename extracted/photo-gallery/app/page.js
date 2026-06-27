import Image from 'next/image'
import Link from 'next/link'

const heroSeeds = [10, 20, 30, 40, 50, 60]

const categories = [
  { href: '/scenery', label: '风景', count: 24 },
  { href: '/people', label: '人物', count: 24 },
  { href: '/animals', label: '动物', count: 24 },
  { href: '/architecture', label: '建筑', count: 24 },
]

export default function Home() {
  return (
    <main className="page">
      <div className="hero">
        <div className="hero-bg">
          {heroSeeds.map((seed, i) => (
            <div key={i} className="hero-bg-item">
              <Image
                src={`https://picsum.photos/seed/${seed}/400/300`}
                alt=""
                fill
                sizes="33vw"
                style={{ objectFit: 'cover' }}
                priority={i < 3}
              />
            </div>
          ))}
        </div>
        <div className="hero-content">
          <div className="hero-label">Photography Collection</div>
          <h1 className="hero-title">用镜头<br />记录世界</h1>
          <div className="hero-categories">
            {categories.map(cat => (
              <Link key={cat.href} href={cat.href} className="hero-cat">
                {cat.label} · {cat.count}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <footer className="footer">© 2025 Photo Gallery</footer>
    </main>
  )
}
