import './globals.css'
import Nav from '../components/Nav'

export const metadata = {
  title: 'Photo Gallery',
  description: '风景、人物、动物、建筑摄影集',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
