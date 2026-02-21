/**
 * SinglePhotoModal — exibe uma única foto centralizada com título e legenda opcionais.
 */
export default function SinglePhotoModal({ data }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {data.title && (
        <h3 className="text-lg font-semibold text-white tracking-wide">
          {data.title}
        </h3>
      )}

      <img
        src={data.src}
        alt={data.caption ?? data.title ?? ''}
        className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-xl"
      />

      {data.caption && (
        <p className="text-white/60 text-sm italic text-center">{data.caption}</p>
      )}
    </div>
  )
}
