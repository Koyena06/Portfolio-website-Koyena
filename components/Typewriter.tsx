"use client"
import { useEffect, useState } from "react"

type Seg = { t: string; u?: boolean; br?: boolean; dim?: boolean }

// "Hey there Koyena here!" / "Welcome to my development vault!"
const SEGS: Seg[] = [
  { t: "Hey there " },
  { t: "Koyena", u: true },
  { t: " here!" },
  { t: "", br: true },
  { t: "Welcome to my ", dim: true },
  { t: "development vault", u: true, dim: true },
  { t: "!", dim: true },
]
const TOTAL = SEGS.reduce((n, s) => n + s.t.length, 0)

export default function Typewriter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setCount(TOTAL); return }
    let n = 0
    const id = setInterval(() => {
      n++
      setCount(n)
      if (n >= TOTAL) clearInterval(id)
    }, 42)
    return () => clearInterval(id)
  }, [])

  let used = 0
  let caretPlaced = false
  const out: React.ReactNode[] = []
  const caret = <span key="caret" className="caret" aria-hidden="true" />

  SEGS.forEach((s, i) => {
    if (s.br) { out.push(<br key={i} />); return }
    const shown = Math.max(0, Math.min(s.t.length, count - used))
    const vis = s.t.slice(0, shown)
    const hid = s.t.slice(shown)
    used += s.t.length
    const cls = [s.u ? "underlined" : "", s.dim ? "opacity-70" : ""].join(" ")
    out.push(<span key={i} className={cls}>{vis}</span>)
    if (!caretPlaced && hid.length > 0) { out.push(caret); caretPlaced = true }
    if (hid) out.push(<span key={i + "h"} className={cls} style={{ visibility: "hidden" }}>{hid}</span>)
  })
  if (!caretPlaced) out.push(caret)

  return (
    <h1 aria-label="Hey there Koyena here! Welcome to my development vault!"
      className="font-normal leading-[1.08]"
      style={{ fontSize: "clamp(2.5rem, 5.6vw, 4.9rem)" }}>
      <span aria-hidden="true">{out}</span>
    </h1>
  )
}
