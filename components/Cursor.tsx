"use client"
import { useEffect, useRef } from "react"

export type CursorMode = "classic" | "orb" | "crosshair"

export default function Cursor({ mode }: { mode: CursorMode }) {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const h = useRef<HTMLDivElement>(null)
  const v = useRef<HTMLDivElement>(null)
  const box = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mode === "classic") return
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return

    let x = -100, y = -100, rx = -100, ry = -100, raf = 0
    const els = [dot.current, ring.current, h.current, v.current, box.current]

    const onMove = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY
      els.forEach((el) => el?.classList.add("on"))
      const hover = !!(e.target as HTMLElement)?.closest?.("a,button,[role='switch'],[role='button']")
      ring.current?.classList.toggle("hover", hover)
      box.current?.classList.toggle("hover", hover)
    }
    const onLeave = () => els.forEach((el) => el?.classList.remove("on"))

    const tick = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      if (dot.current) dot.current.style.transform = `translate3d(${x}px,${y}px,0)`
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`
      if (h.current) h.current.style.transform = `translate3d(0,${y}px,0)`
      if (v.current) v.current.style.transform = `translate3d(${x}px,0,0)`
      if (box.current) box.current.style.transform = box.current.classList.contains("hover")
        ? `translate3d(${x}px,${y}px,0) rotate(45deg) scale(1.35)`
        : `translate3d(${x}px,${y}px,0)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    window.addEventListener("mousemove", onMove)
    document.documentElement.addEventListener("mouseleave", onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      document.documentElement.removeEventListener("mouseleave", onLeave)
    }
  }, [mode])

  if (mode === "orb")
    return (<><div ref={ring} className="cur cur-ring" /><div ref={dot} className="cur cur-dot" /></>)
  if (mode === "crosshair")
    return (<><div ref={h} className="cur cur-h" /><div ref={v} className="cur cur-v" /><div ref={box} className="cur cur-box" /></>)
  return null
}
