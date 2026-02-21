/**
 * HotSpot — área clicável invisível posicionada sobre a cena.
 *
 * Ao hover: glow âmbar animado + tooltip com o nome do elemento.
 * Posicionamento via inline style (valores percentuais de content.js).
 */
export default function HotSpot({ hotspot, onClick }) {
  const { label, position } = hotspot;

  return (
    <button
      type="button"
      className="hotspot absolute group cursor-pointer focus:outline-none"
      style={{
        left: position.left,
        top: position.top,
        width: position.width,
        height: position.height,
      }}
      onClick={onClick}
      aria-label={`Abrir: ${label}`}
    >
      {/* Glow overlay — aparece no hover */}
      <span
        className="
          absolute inset-0 rounded
          border-2 border-transparent
          bg-white/0
          transition-all duration-300 ease-out
          group-hover:border-amber-300/60
          group-hover:bg-amber-100/10
          group-hover:animate-hotspot-pulse
          group-focus-visible:border-amber-300/80
          group-focus-visible:bg-amber-100/15
        "
      />

      {/* Tooltip com nome do elemento */}
      <span
        className="
          absolute -top-4 left-1/2 -translate-x-1/2
          px-2.5 py-1 rounded-md
          bg-black/80 text-white text-xs font-medium
          whitespace-nowrap
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200 delay-100
          pointer-events-none select-none
          backdrop-blur-sm
        "
      >
        {label}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/80" />
      </span>
    </button>
  );
}
