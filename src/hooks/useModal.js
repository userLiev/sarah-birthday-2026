import { useState, useCallback, useEffect } from 'react'

/**
 * Gerencia qual modal está aberto e com quais dados.
 *
 * Retorna:
 *   activeModal  — o objeto hotspot clicado, ou null
 *   openModal    — (hotspot) => void
 *   closeModal   — () => void
 */
export function useModal() {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = useCallback((hotspot) => {
    setActiveModal(hotspot)
  }, [])

  const closeModal = useCallback(() => {
    setActiveModal(null)
  }, [])

  // Fechar com tecla Escape
  useEffect(() => {
    if (!activeModal) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeModal, closeModal])

  // Travar scroll do body enquanto modal estiver aberto
  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeModal])

  return { activeModal, openModal, closeModal }
}
