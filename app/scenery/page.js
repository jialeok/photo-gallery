import PhotoGrid from '../../components/PhotoGrid'

const seeds = [101,102,103,104,105,106,107,108,109,110,111,112,
               113,114,115,116,117,118,119,120,121,122,123,124]

export default function Scenery() {
  return (
    <main className="page">
      <div className="page-header">
        <div className="page-eyebrow">Category</div>
        <h1 className="page-title">风景</h1>
        <p className="page-desc">山川湖海，自然之美</p>
      </div>
      <PhotoGrid seeds={seeds} />
      <footer className="footer">© 2025 Photo Gallery</footer>
    </main>
  )
}
