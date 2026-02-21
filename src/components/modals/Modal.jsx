import { useRef } from 'react'
import CloseButton from '../ui/CloseButton'

const SIZE_CLASSES = {
  sm: 'max-w-md',
  md: 'max-w-xl',
  lg: 'max-w-3xl',
}

/**
 * Modal base — overlay escuro + painel centralizado com animação de entrada.
 *
 * Props:
 *   title    — string | null  (sem header se null)
 *   size     — 'sm' | 'md' | 'lg'  (padrão: 'lg')
 *   onClose  — () => void
 *   children — conteúdo interno
 */
export default function Modal({ title, size = 'lg', onClose, children }) {
  const panelRef = useRef(null)

  const handleBackdropClick = (e) => {
    if (panelRef.current && !panelRef.current.contains(e.target)) {
      onClose()
    }
  }

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/75 backdrop-blur-sm
        flex items-center justify-center p-4
        animate-overlay-in
      "
      onClick={handleBackdropClick}
    >
      <div
        ref={panelRef}
        className={`
          relative w-full ${SIZE_CLASSES[size] ?? SIZE_CLASSES.lg}
          max-h-[90vh] overflow-y-auto modal-scroll
          bg-zinc-900 text-white rounded-2xl shadow-2xl
          animate-modal-in
        `}
      >
        {/* Header com título */}
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 sticky top-0 bg-zinc-900/95 backdrop-blur-sm rounded-t-2xl z-10">
            <h2 className="text-lg font-semibold tracking-wide">{title}</h2>
            <CloseButton onClick={onClose} />
          </div>
        )}

        {/* Botão X flutuante quando não tem header (ex: love letter) */}
        {!title && (
          <div className="absolute top-3 right-3 z-10">
            <CloseButton onClick={onClose} />
          </div>
        )}

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
