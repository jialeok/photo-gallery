import Image from 'next/image'

export default function PhotoGrid({ seeds }) {
  return (
    <div className="grid">
      {seeds.map((seed, i) => (
        <div key={i} className="grid-item">
          <Image
            src={`https://picsum.photos/seed/${seed}/400/400`}
            alt={`照片 ${i + 1}`}
            fill
            sizes="33vw"
            style={{ objectFit: 'cover' }}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}
