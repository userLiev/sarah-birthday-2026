import { useState } from "react";
import { HOTSPOTS, RADIO } from "../config/content";
import HotSpot from "./HotSpot";
import RadioModal from "./modals/RadioModal";
import { assetUrl } from "../utils/assetUrl";

/**
 * Scene — container 16:9 com bg.jpg e hotspots posicionados.
 *
 * Estratégia de sizing:
 *   height = 100vh (sempre ocupa a altura toda)
 *   width  = max(900px, 100vh * 16/9) → mantém proporção 16:9, min 900px
 *   O overflow-x:auto do App.jsx cobre o scroll horizontal em telas estreitas.
 */
export default function Scene({ onHotSpotClick }) {
  const [radioOpen, setRadioOpen] = useState(false);

  return (
    <div
      id="scene-root"
      className="relative flex-shrink-0"
      style={{
        height: "100vh",
        width: "max(900px, calc(100vh * 16 / 9))",
        aspectRatio: "16 / 9",
      }}
    >
      {/* Imagem de fundo — ocupa 100% do container */}
      <img
        src={assetUrl("/bg.jpg")}
        alt="Quarto de aniversário"
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        draggable={false}
      />

      {/* Hotspots sobrepostos */}
      {HOTSPOTS.map((hotspot) => (
        <HotSpot
          key={hotspot.id}
          hotspot={hotspot}
          onClick={() =>
            hotspot.id === "radio"
              ? setRadioOpen((e) => !e)
              : onHotSpotClick(hotspot)
          }
        />
      ))}

      {radioOpen && (
        <div className="fixed bottom-4 left-4 z-40">
          <RadioModal data={RADIO} />
        </div>
      )}
    </div>
  );
}
