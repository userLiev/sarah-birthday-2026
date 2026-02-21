import { useModal } from "./hooks/useModal";
import Scene from "./components/Scene";
import Modal from "./components/modals/Modal";
import PhotoGallery from "./components/modals/PhotoGallery";
import LoveLetterModal from "./components/modals/LoveLetterModal";
import RadioModal from "./components/modals/RadioModal";
import MovieListModal from "./components/modals/MovieListModal";
import SinglePhotoModal from "./components/modals/SinglePhotoModal";
import { GALLERIES, LOVE_LETTER, RADIO, MOVIE_LIST } from "./config/content";

/**
 * Mapeia o action string do hotspot clicado para o componente de modal correto.
 * Para adicionar um novo tipo de interação: adicione um case aqui.
 */
function resolveModal(hotspot) {
  if (!hotspot) return null;

  switch (hotspot.action) {
    case "gallery":
      return {
        title: GALLERIES[hotspot.galleryId]?.title ?? "Galeria",
        size: "lg",
        children: <PhotoGallery galleryId={hotspot.galleryId} />,
      };
    case "loveLetter":
      return {
        title: null, // sem header — a carta tem seu próprio estilo interno
        size: "sm",
        children: <LoveLetterModal data={LOVE_LETTER} />,
      };
    case "radio":
      return {
        title: RADIO.title,
        size: "md",
        children: <RadioModal data={RADIO} />,
      };
    case "movieList":
      return {
        title: MOVIE_LIST.title,
        size: "md",
        children: <MovieListModal data={MOVIE_LIST} />,
      };
    case "singlePhoto":
      return {
        title: null,
        size: "md",
        children: <SinglePhotoModal data={hotspot.photo} />,
      };
    default:
      return null;
  }
}

export default function App() {
  const { activeModal, openModal, closeModal } = useModal();
  const resolved = resolveModal(activeModal);

  return (
    /*
     * Container externo:
     *   - Preenche toda a viewport
     *   - Centraliza a cena via flex
     *   - overflow-x: auto permite scroll horizontal em telas < 900px
     */
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-x-auto overflow-y-hidden">
      <Scene onHotSpotClick={openModal} />

      {resolved && (
        <Modal title={resolved.title} size={resolved.size} onClose={closeModal}>
          {resolved.children}
        </Modal>
      )}
    </div>
  );
}
