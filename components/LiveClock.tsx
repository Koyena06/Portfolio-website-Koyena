"use client"
import { useEffect, useState } from "react"

export default function LiveClock() {
  const [now, setNow] = useState<Date | null>(null)
  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 30000)
    return () => clearInterval(id)
  }, [])

  let time = "--:--"
  let status = "BUILDING"
  if (now) {
    time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" }).toUpperCase()
    const h = Number(now.toLocaleString("en-US", { hour: "numeric", hour12: false, timeZone: "Asia/Kolkata" })) % 24
    if (h >= 23 || h < 7) status = "RESTING"
  }
  return (
    <p className="mono text-[.72rem] tracking-[0.16em]" style={{ color: "var(--muted)" }}>
      BBSR, IND · IST {time} · {status}
    </p>
  )
}
