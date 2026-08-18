import { h } from "preact"

const routes = [
  { label: "Home", href: "/", match: (slug) => slug === "" || slug === "index" },
  {
    label: "Map",
    href: "/locations--and--npcs/map-of-saros",
    match: (slug) => slug === "locations--and--npcs/map-of-saros",
  },
  {
    label: "Cities & Towns",
    href: "/locations--and--npcs/cities--and--towns/",
    match: (slug) => slug.startsWith("locations--and--npcs/cities--and--towns"),
  },
  {
    label: "Factions",
    href: "/factions--and--clans/",
    match: (slug) => slug.startsWith("factions--and--clans"),
  },
  {
    label: "History",
    href: "/history--and--lore/",
    match: (slug) => slug.startsWith("history--and--lore"),
  },
  {
    label: "Useful Links",
    href: "/useful-links",
    match: (slug) => slug === "useful-links",
  },
]

const normalizeSlug = (slug) => (slug ?? "").replace(/\/index$/, "").replace(/\/$/, "")

const Navigation = ({ fileData }) => {
  const slug = normalizeSlug(fileData?.slug)

  return h("nav", { class: "saros-site-nav", "aria-label": "Saros site navigation" }, [
    h("a", { class: "saros-site-nav__brand", href: "/", title: "Return to Saros" }, "Saros"),
    h("div", { class: "saros-site-nav__links" }, [
      ...routes.map((route) =>
        h(
          "a",
          {
            class: "saros-site-nav__link",
            href: route.href,
            "aria-current": route.match(slug) ? "page" : undefined,
          },
          route.label,
        ),
      ),
      h(
        "a",
        {
          class: "saros-site-nav__link saros-site-nav__play",
          href: "https://play.delvesaros.com",
          target: "_blank",
          rel: "noopener noreferrer",
          title: "Open the secure Saros game server in a new tab",
        },
        "Play",
      ),
    ]),
  ])
}

Navigation.afterDOMLoaded = `
const initializeSarosMap = () => {
  const image = document.querySelector(
    'body[data-slug="locations--and--npcs/map-of-saros"] article img[src*="saros-image-2"]',
  )
  if (!image || image.dataset.sarosMapReady === "true") return
  image.dataset.sarosMapReady = "true"

  const oldContainer = image.parentElement?.tagName === "P" ? image.parentElement : image
  const viewer = document.createElement("section")
  viewer.className = "saros-map-viewer"
  viewer.setAttribute("aria-label", "Interactive map of Saros")
  viewer.innerHTML = '<div class="saros-map-toolbar">' +
    '<button type="button" data-map-action="in">Zoom in</button>' +
    '<button type="button" data-map-action="out">Zoom out</button>' +
    '<button type="button" data-map-action="reset">Reset</button>' +
    '<button type="button" data-map-action="fullscreen">Fullscreen</button>' +
    '<output class="saros-map-status" aria-live="polite">100%</output>' +
    '</div><div class="saros-map-viewport" tabindex="0" aria-label="Map. Drag to pan; use the mouse wheel, pinch gesture, or controls to zoom."></div>'
  oldContainer.before(viewer)
  const toolbar = viewer.querySelector(".saros-map-toolbar")
  const viewport = viewer.querySelector(".saros-map-viewport")
  const status = viewer.querySelector(".saros-map-status")
  viewport.append(image)
  if (oldContainer !== image && oldContainer.childElementCount === 0) oldContainer.remove()

  const state = { scale: 1, x: 0, y: 0 }
  const pointers = new Map()
  let gesture = null
  const clamp = () => {
    state.x = Math.min(0, Math.max(Math.min(0, viewport.clientWidth - image.offsetWidth * state.scale), state.x))
    state.y = Math.min(0, Math.max(Math.min(0, viewport.clientHeight - image.offsetHeight * state.scale), state.y))
  }
  const render = () => {
    clamp()
    image.style.transform = 'translate3d(' + state.x + 'px,' + state.y + 'px,0) scale(' + state.scale + ')'
    status.textContent = Math.round(state.scale * 100) + "%"
  }
  const zoomAt = (scale, clientX, clientY) => {
    const rect = viewport.getBoundingClientRect()
    const localX = clientX - rect.left
    const localY = clientY - rect.top
    const contentX = (localX - state.x) / state.scale
    const contentY = (localY - state.y) / state.scale
    state.scale = Math.min(8, Math.max(1, scale))
    state.x = localX - contentX * state.scale
    state.y = localY - contentY * state.scale
    render()
  }
  const zoomCenter = (factor) => {
    const rect = viewport.getBoundingClientRect()
    zoomAt(state.scale * factor, rect.left + rect.width / 2, rect.top + rect.height / 2)
  }
  const reset = () => { state.scale = 1; state.x = 0; state.y = 0; render() }

  toolbar.addEventListener("click", async (event) => {
    const action = event.target.closest("button")?.dataset.mapAction
    if (action === "in") zoomCenter(1.35)
    if (action === "out") zoomCenter(1 / 1.35)
    if (action === "reset") reset()
    if (action === "fullscreen") {
      if (document.fullscreenElement === viewer) await document.exitFullscreen()
      else if (viewer.requestFullscreen) await viewer.requestFullscreen()
    }
  })
  viewport.addEventListener("wheel", (event) => {
    event.preventDefault()
    zoomAt(state.scale * (event.deltaY < 0 ? 1.16 : 1 / 1.16), event.clientX, event.clientY)
  }, { passive: false })

  const startGesture = () => {
    const points = [...pointers.values()]
    if (points.length === 1) gesture = { kind: "pan", point: points[0], x: state.x, y: state.y }
    if (points.length >= 2) {
      const [a, b] = points
      const rect = viewport.getBoundingClientRect()
      const center = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }
      gesture = {
        kind: "pinch", distance: Math.hypot(a.x - b.x, a.y - b.y), scale: state.scale,
        contentX: (center.x - rect.left - state.x) / state.scale,
        contentY: (center.y - rect.top - state.y) / state.scale,
      }
    }
  }
  viewport.addEventListener("pointerdown", (event) => {
    viewport.setPointerCapture(event.pointerId)
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY })
    startGesture()
    viewport.classList.add("is-dragging")
  })
  viewport.addEventListener("pointermove", (event) => {
    if (!pointers.has(event.pointerId)) return
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY })
    const points = [...pointers.values()]
    if (points.length >= 2 && gesture?.kind !== "pinch") startGesture()
    if (gesture?.kind === "pan" && points.length === 1) {
      state.x = gesture.x + points[0].x - gesture.point.x
      state.y = gesture.y + points[0].y - gesture.point.y
      render()
    } else if (gesture?.kind === "pinch" && points.length >= 2) {
      const [a, b] = points
      const rect = viewport.getBoundingClientRect()
      const center = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }
      state.scale = Math.min(8, Math.max(1, gesture.scale * Math.hypot(a.x - b.x, a.y - b.y) / gesture.distance))
      state.x = center.x - rect.left - gesture.contentX * state.scale
      state.y = center.y - rect.top - gesture.contentY * state.scale
      render()
    }
  })
  const endPointer = (event) => {
    pointers.delete(event.pointerId)
    if (pointers.size) startGesture()
    else { gesture = null; viewport.classList.remove("is-dragging") }
  }
  viewport.addEventListener("pointerup", endPointer)
  viewport.addEventListener("pointercancel", endPointer)
  viewport.addEventListener("dblclick", (event) => zoomAt(state.scale > 6.5 ? 1 : state.scale * 1.6, event.clientX, event.clientY))
  viewport.addEventListener("keydown", (event) => {
    const amount = event.shiftKey ? 120 : 45
    if (["+", "="].includes(event.key)) zoomCenter(1.25)
    else if (event.key === "-") zoomCenter(0.8)
    else if (["0", "Home"].includes(event.key)) reset()
    else if (event.key === "ArrowLeft") state.x += amount
    else if (event.key === "ArrowRight") state.x -= amount
    else if (event.key === "ArrowUp") state.y += amount
    else if (event.key === "ArrowDown") state.y -= amount
    else return
    event.preventDefault(); render()
  })
  image.addEventListener("dragstart", (event) => event.preventDefault())
  window.addEventListener("resize", render)
  if (image.complete) reset()
  else image.addEventListener("load", reset, { once: true })
}
document.addEventListener("nav", initializeSarosMap)
initializeSarosMap()
`

Navigation.css = `
.saros-site-nav {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin: 0 0 1rem;
  padding: 0.5rem 0.6rem;
  border: 1px solid color-mix(in srgb, var(--secondary) 48%, var(--lightgray) 52%);
  border-radius: 0.65rem;
  background: color-mix(in srgb, var(--light) 90%, var(--secondary) 10%);
  box-shadow: 0 0.35rem 1rem rgb(0 0 0 / 12%);
}

.saros-site-nav a {
  text-decoration: none;
}

.saros-site-nav__brand {
  flex: 0 0 auto;
  padding: 0.25rem 0.45rem;
  color: var(--secondary);
  font-family: var(--titleFont, var(--headerFont));
  font-size: 1.08rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.saros-site-nav__links {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  min-width: 0;
}

.saros-site-nav__link {
  flex: 0 0 auto;
  padding: 0.38rem 0.52rem;
  border-radius: 0.4rem;
  color: var(--darkgray);
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.15;
  white-space: nowrap;
  transition: background-color 140ms ease, color 140ms ease, transform 140ms ease;
}

.saros-site-nav__link:hover,
.saros-site-nav__link:focus-visible,
.saros-site-nav__link[aria-current="page"] {
  background: color-mix(in srgb, var(--secondary) 84%, var(--light) 16%);
  color: var(--light);
  transform: translateY(-1px);
}

.saros-site-nav__play {
  border: 1px solid color-mix(in srgb, var(--tertiary) 75%, var(--lightgray) 25%);
  background: color-mix(in srgb, var(--tertiary) 22%, transparent);
  color: var(--secondary);
}

@media (max-width: 700px) {
  .saros-site-nav {
    display: block;
    padding: 0.45rem;
  }

  .saros-site-nav__brand {
    display: block;
    margin: 0 0 0.3rem;
    border-bottom: 1px solid color-mix(in srgb, var(--secondary) 32%, transparent);
    text-align: center;
  }

  .saros-site-nav__links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.18rem;
  }
}
`

export const SarosNavigation = () => Navigation
