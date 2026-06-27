import PhotoGrid from '../../components/PhotoGrid'

const seeds = [301,302,303,304,305,306,307,308,309,310,311,312,
               313,314,315,316,317,318,319,320,321,322,323,324]

export default function Animals() {
  return (
    <main className="page">
      <div className="page-header">
        <div className="page-eyebrow">Category</div>
        <h1 className="page-title">动物</h1>
        <p className="page-desc">与自然同行，感受生命之美</p>
      </div>
      <PhotoGrid seeds={seeds} />
      <footer className="footer">© 2025 Photo Gallery</footer>
    </main>
  )
}
