import { useState } from 'react'
import { GALLERIES } from '../../config/content'

/**
 * PhotoGallery — grid de fotos com lightbox embutido.
 * Clicar em qualquer foto abre a visão ampliada com navegação anterior/próxima.
 */
export default function PhotoGallery({ galleryId }) {
  const gallery = GALLERIES[galleryId]
  const [lightbox, setLightbox] = useState(null) // índice da foto ativa ou null

  if (!gallery) {
    return (
      <p className="text-white/40 text-center py-10">Galeria não encontrada.</p>
    )
  }

  // Estado vazio — ainda sem fotos cadastradas
  if (gallery.images.length === 0) {
    return (
      <div className="text-center py-12 flex flex-col items-center gap-4">
        {gallery.message && (
          <p className="text-amber-300 text-lg">{gallery.message}</p>
        )}
        <div className="text-6xl opacity-30">🖼️</div>
        <p className="text-white/40 text-sm">
          Adicione fotos em{' '}
          <code className="text-white/60">/public/photos/</code>
          {' '}e configure em{' '}
          <code className="text-white/60">src/config/content.js</code>
        </p>
      </div>
    )
  }

  // Lightbox — foto ampliada
  if (lightbox !== null) {
    const photo = gallery.images[lightbox]
    const hasPrev = lightbox > 0
    const hasNext = lightbox < gallery.images.length - 1

    return (
      <div className="flex flex-col items-center gap-5">
        <img
          src={photo.src}
          alt={photo.caption ?? ''}
          className="max-h-[58vh] w-auto rounded-xl object-contain shadow-xl"
        />

        {photo.caption && (
          <p className="text-white/70 text-sm italic text-center">{photo.caption}</p>
        )}

        <div className="flex items-center gap-3">
          <button
            onClick={() => hasPrev && setLightbox(lightbox - 1)}
            disabled={!hasPrev}
            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm"
          >
            ← Anterior
          </button>
          <button
            onClick={() => setLightbox(null)}
            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm"
          >
            Grade
          </button>
          <button
            onClick={() => hasNext && setLightbox(lightbox + 1)}
            disabled={!hasNext}
            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm"
          >
            Próxima →
          </button>
        </div>

        <p className="text-white/30 text-xs">
          {lightbox + 1} / {gallery.images.length}
        </p>
      </div>
    )
  }

  // Grade de fotos
  return (
    <div>
      {gallery.message && (
        <p className="text-amber-300 text-center mb-5">{gallery.message}</p>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {gallery.images.map((photo, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="group relative aspect-square rounded-xl overflow-hidden bg-white/5 hover:ring-2 hover:ring-amber-300/60 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-amber-300/80"
          >
            <img
              src={photo.src}
              alt={photo.caption ?? ''}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {photo.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-xs text-white text-center truncate">
                  {photo.caption}
                </p>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
