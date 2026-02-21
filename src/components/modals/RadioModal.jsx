/**
 * RadioModal — player do Spotify embutido via iframe.
 * A URL do embed vem de content.js → RADIO.spotifyEmbedUrl
 */
export default function RadioModal({ data }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <iframe
        src={data.spotifyEmbedUrl}
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="rounded-xl"
        title="Spotify Player"
      />
    </div>
  );
}
