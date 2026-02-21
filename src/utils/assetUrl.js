// Prefixa caminhos de assets com o BASE_URL do Vite.
// Necessário para que imagens funcionem quando o site é servido em um subpath
// (ex: userliev.github.io/sarah-birthday-2026/).
//
// import.meta.env.BASE_URL reflete o valor de `base` no vite.config.js:
//   - dev local: "/"
//   - build de produção: "/sarah-birthday-2026/"
const base = import.meta.env.BASE_URL.replace(/\/$/, '') // remove trailing slash

export function assetUrl(path) {
  // path deve começar com "/" (ex: "/bg.jpg", "/photos/us/1.jpg")
  return `${base}${path}`
}
