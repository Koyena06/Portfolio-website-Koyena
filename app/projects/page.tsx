import { projects } from "@/data/projects";
import ProjectCard from "@/components/Projects";

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}