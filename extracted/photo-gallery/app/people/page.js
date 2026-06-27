import PhotoGrid from '../../components/PhotoGrid'

const seeds = [201,202,203,204,205,206,207,208,209,210,211,212,
               213,214,215,216,217,218,219,220,221,222,223,224]

export default function People() {
  return (
    <main className="page">
      <div className="page-header">
        <div className="page-eyebrow">Category</div>
        <h1 className="page-title">人物</h1>
        <p className="page-desc">每张面孔，都有一个故事</p>
      </div>
      <PhotoGrid seeds={seeds} />
      <footer className="footer">© 2025 Photo Gallery</footer>
    </main>
  )
}
