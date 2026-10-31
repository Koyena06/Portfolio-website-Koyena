"use client"
import { useState } from "react"
import { ImagePlus } from "lucide-react"

/**
 * Big photo slot for the About section.
 * Drop your picture at  public/about-photo.jpg  (portrait, ~1200x1500 works well)
 * and it replaces the placeholder automatically.
 */
export default function AboutPhoto({ src = "/about-photo.jpeg" }: { src?: string }) {
  const [missing, setMissing] = useState(false)
  return (
    <figure className="relative w-full max-w-[460px] mx-auto lg:mx-0">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[26px] border"
        style={{ borderColor: "var(--accent)", opacity: .55 }} aria-hidden="true" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] border"
        style={{ borderColor: "var(--line-strong)", background: "var(--surface)" }}>
        {!missing ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt="Koyena Sutradhar" onError={() => setMissing(true)}
            className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center gap-3 p-8 text-center"
            style={{ color: "var(--muted)" }}>
            <ImagePlus size={38} strokeWidth={1.3} />
            <p className="text-sm max-w-[16rem]">
              Your big photo goes here. Add it as <span className="mono" style={{ color: "var(--text)" }}>public/about-photo.jpg</span>
            </p>
          </div>
        )}
      </div>
    </figure>
  )
}
