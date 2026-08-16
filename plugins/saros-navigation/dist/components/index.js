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
