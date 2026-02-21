/**
 * LoveLetterModal — exibe a carta de amor com visual de pergaminho.
 * A classe .parchment é definida em index.css.
 * Usar sem header (title={null} no Modal pai) para visual limpo.
 */
export default function LoveLetterModal({ data }) {
  return (
    <div className="parchment rounded-xl p-8 font-serif">
      {/* Data no canto superior direito */}
      {data.date && (
        <p className="text-right text-sm text-amber-800/60 mb-6 italic">
          {data.date}
        </p>
      )}

      {/* Saudação */}
      <h3 className="text-2xl text-amber-900 font-bold mb-6 leading-snug">
        {data.title}
      </h3>

      {/* Corpo — preserva quebras de linha do config */}
      <div className="text-amber-900/85 leading-relaxed text-base space-y-3">
        {data.body.split('\n').map((line, i) => (
          <p key={i} className={line.trim() === '' ? 'h-2' : ''}>
            {line || null}
          </p>
        ))}
      </div>

      {/* Assinatura */}
      {data.signature && (
        <p className="text-right text-4xl mt-8">{data.signature}</p>
      )}
    </div>
  )
}
