import { ArrowUpRight } from "lucide-react"

type Props = { title: string; description: string; tech: string[]; github: string; live?: string }

export default function ProjectCard({ title, description, tech, github, live }: Props) {
  return (
    <article className="card p-6 flex flex-col gap-4">
      <h3 className="text-xl font-medium leading-snug">{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{description.trim()}</p>
      <ul className="flex flex-wrap gap-2">
        {tech.map((t) => <li key={t} className="chip">{t}</li>)}
      </ul>
      <div className="flex gap-5 text-sm mt-auto pt-2">
        <a href={github} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1 underlined hover:text-[var(--accent)]">
          GitHub <ArrowUpRight size={15} />
        </a>
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underlined hover:text-[var(--accent)]">
            Live <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </article>
  )
}
