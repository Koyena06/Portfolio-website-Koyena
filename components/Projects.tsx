export default function ProjectCard({ title, description, tech, github, live }: any) {
  return (
    <div className="border rounded-xl p-5 flex flex-col gap-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t: string) => (
          <span key={t} className="bg-gray-100 text-xs px-2 py-1 rounded">{t}</span>
        ))}
      </div>
      <div className="flex gap-4 text-sm mt-auto pt-2">
        <a href={github} target="_blank" className="underline">GitHub</a>
        {live && <a href={live} target="_blank" className="underline">Live</a>}
      </div>
    </div>
  );
}