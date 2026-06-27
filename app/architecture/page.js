import PhotoGrid from '../../components/PhotoGrid'

const seeds = [401,402,403,404,405,406,407,408,409,410,411,412,
               413,414,415,416,417,418,419,420,421,422,423,424]

export default function Architecture() {
  return (
    <main className="page">
      <div className="page-header">
        <div className="page-eyebrow">Category</div>
        <h1 className="page-title">建筑</h1>
        <p className="page-desc">线条与空间，人类的创造力</p>
      </div>
      <PhotoGrid seeds={seeds} />
      <footer className="footer">© 2025 Photo Gallery</footer>
    </main>
  )
}
