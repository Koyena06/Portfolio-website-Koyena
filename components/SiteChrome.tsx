"use client"
import { useCallback, useEffect, useState } from "react"
import { Sun, Moon, MousePointer2, CircleDot, Crosshair, Menu, X } from "lucide-react"
import Cursor, { CursorMode } from "./Cursor"

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

const CURSORS: { mode: CursorMode; label: string; Icon: typeof Sun }[] = [
  { mode: "classic", label: "Classic cursor", Icon: MousePointer2 },
  { mode: "orb", label: "Orb cursor", Icon: CircleDot },
  { mode: "crosshair", label: "Crosshair cursor", Icon: Crosshair },
]

export default function SiteChrome() {
  const [active, setActive] = useState("home")
  const [progress, setProgress] = useState(0)
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const [cursor, setCursor] = useState<CursorMode>("classic")
  const [menu, setMenu] = useState(false)

  // read saved preferences (set early by the inline script in layout)
  useEffect(() => {
    const d = document.documentElement.dataset
    if (d.theme === "light" || d.theme === "dark") setTheme(d.theme)
    if (d.cursor === "orb" || d.cursor === "crosshair" || d.cursor === "classic") setCursor(d.cursor)
  }, [])

  const changeTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    document.documentElement.dataset.theme = next
    try { localStorage.setItem("kv-theme", next) } catch {}
  }
  const changeCursor = (m: CursorMode) => {
    setCursor(m)
    document.documentElement.dataset.cursor = m
    try { localStorage.setItem("kv-cursor", m) } catch {}
  }

  // scroll spy + progress
  const update = useCallback(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
    document.documentElement.style.setProperty("--p", p.toFixed(4))
    setProgress(p)
    const line = window.innerHeight * 0.4
    let cur = SECTIONS[0].id
    for (const s of SECTIONS) {
      const el = document.getElementById(s.id)
      if (el && el.getBoundingClientRect().top <= line) cur = s.id
    }
    if (p > 0.995) cur = SECTIONS[SECTIONS.length - 1].id
    setActive((prev) => (prev === cur ? prev : cur))
  }, [])

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => { raf = 0; update() })
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [update])

  // keep URL hash in sync with the visible section
  useEffect(() => {
    const target = active === "home" ? window.location.pathname : `#${active}`
    window.history.replaceState(null, "", target)
  }, [active])

  const activeLabel = SECTIONS.find((s) => s.id === active)?.label

  return (
    <>
      <Cursor mode={cursor} />

      {/* Horizontal bar: header */}
      <header className="site-header">
        <div className="bar">
          <a href="#home" className="brand" onClick={() => setMenu(false)}>Koyena Sutradhar</a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Sections">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="nav-link" aria-current={active === s.id}>
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="ctl-group cursor-group" role="group" aria-label="Cursor style">
              {CURSORS.map(({ mode, label, Icon }) => (
                <button key={mode} className="ctl-btn" aria-pressed={cursor === mode}
                  aria-label={label} title={label} onClick={() => changeCursor(mode)}>
                  <Icon size={15} />
                </button>
              ))}
            </div>
            <button className="switch" role="switch" aria-checked={theme === "light"}
              aria-label="Light mode" title={theme === "dark" ? "Switch to light" : "Switch to dark"}
              onClick={changeTheme}>
              <span className="knob" />
              <Moon size={14} className="moon" />
              <Sun size={14} className="sun" />
            </button>
            <button className="ctl-btn lg:!hidden" style={{ border: "1px solid var(--line)" }}
              aria-label="Menu" aria-expanded={menu} onClick={() => setMenu((m) => !m)}>
              {menu ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {menu && (
        <nav className="mobile-menu lg:hidden" aria-label="Sections">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="nav-link" aria-current={active === s.id}
              onClick={() => setMenu(false)}>{s.label}</a>
          ))}
        </nav>
      )}

      {/* Vertical bar: progress rail */}
      <aside className="rail" aria-hidden="false" style={{ ["--progress" as string]: progress }}>
        <div className="track" />
        <div className="fill" />
        <div className="stops">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="stop" aria-label={s.label}
              title={s.label} aria-current={active === s.id} />
          ))}
        </div>
        <span className="label mono">{activeLabel}</span>
      </aside>

      {/* Horizontal bar: footer */}
      <footer className="site-footer">
        <div className="wrap flex items-center justify-between gap-4" style={{ maxWidth: 1180 }}>
          <span>© {new Date().getFullYear()} Koyena Sutradhar</span>
          <span className="mono hidden sm:inline text-[.72rem]">
            {activeLabel} · {Math.round(progress * 100)}%
          </span>
          <div className="flex gap-4 items-center">
            <a href="https://github.com/Koyena06" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.047.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/kosu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.982V9h3.102v1.561h.046c.432-.82 1.489-1.685 3.065-1.685 3.276 0 3.88 2.156 3.88 4.961v6.615zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm1.603 13.019H3.733V9h3.207v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:koyena.sutradhar@gmail.com" aria-label="Email">
              <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
