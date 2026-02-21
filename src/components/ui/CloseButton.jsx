export default function CloseButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Fechar"
      className="
        flex items-center justify-center
        w-8 h-8 rounded-full
        text-white/60 hover:text-white
        hover:bg-white/10
        transition-colors duration-150
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  )
}
