const skills = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Docker"];

export default function About() {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          I'm a developer with X years of experience building web applications.
          I care about clean code, good UX, and shipping things that work.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}