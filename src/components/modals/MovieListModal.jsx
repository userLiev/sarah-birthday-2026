import { useState } from 'react'

/**
 * MovieListModal — grid de filmes clicáveis, igual à galeria de fotos.
 * Clicar em um filme expande o poster com título, ano e nota.
 */
export default function MovieListModal({ data }) {
  const [selected, setSelected] = useState(null)

  if (!data.movies || data.movies.length === 0) {
    return (
      <div className="text-center py-12 flex flex-col items-center gap-4">
        <div className="text-6xl opacity-30">🎬</div>
        <p className="text-white/40 text-sm">
          Adicione filmes em{' '}
          <code className="text-white/60">src/config/content.js → MOVIE_LIST.movies</code>
        </p>
      </div>
    )
  }

  // Vista expandida
  if (selected !== null) {
    const movie = data.movies[selected]
    const hasPrev = selected > 0
    const hasNext = selected < data.movies.length - 1

    return (
      <div className="flex flex-col items-center gap-5">
        {movie.poster ? (
          <img
            src={movie.poster}
            alt={`Poster de ${movie.title}`}
            className="max-h-[58vh] w-auto rounded-xl object-contain shadow-xl"
          />
        ) : (
          <div className="w-40 h-60 rounded-xl bg-white/10 flex items-center justify-center text-5xl">
            🎬
          </div>
        )}

        <div className="text-center">
          <p className="font-semibold text-white text-lg leading-snug">
            {movie.title}
            {movie.year && (
              <span className="text-white/40 text-sm font-normal ml-2">({movie.year})</span>
            )}
          </p>
          {movie.note && (
            <p className="text-amber-200/70 text-sm mt-1 italic">{movie.note}</p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => hasPrev && setSelected(selected - 1)}
            disabled={!hasPrev}
            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm"
          >
            ← Anterior
          </button>
          <button
            onClick={() => setSelected(null)}
            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm"
          >
            Grade
          </button>
          <button
            onClick={() => hasNext && setSelected(selected + 1)}
            disabled={!hasNext}
            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm"
          >
            Próxima →
          </button>
        </div>

        <p className="text-white/30 text-xs">{selected + 1} / {data.movies.length}</p>
      </div>
    )
  }

  // Grade de filmes
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {data.movies.map((movie, i) => (
        <button
          key={i}
          onClick={() => setSelected(i)}
          className="group relative aspect-[2/3] rounded-xl overflow-hidden bg-white/5 hover:ring-2 hover:ring-amber-300/60 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-amber-300/80"
        >
          {movie.poster ? (
            <img
              src={movie.poster}
              alt={`Poster de ${movie.title}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl text-white/20">
              🎬
            </div>
          )}

          {/* Overlay com título ao hover */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <p className="text-xs text-white text-center font-medium truncate">{movie.title}</p>
            {movie.year && (
              <p className="text-xs text-white/50 text-center">{movie.year}</p>
            )}
          </div>
        </button>
      ))}
    </div>
  )
}
