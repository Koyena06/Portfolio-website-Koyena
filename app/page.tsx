import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col gap-6 py-20">
      <h1 className="text-5xl font-bold">Hi, I'm [Koyena Sutradhar]</h1>
      <p className="text-xl text-gray-600">
        Full-stack developer building clean, fast web apps.
      </p>
      <div className="flex gap-4">
        <Link href="/projects" className="bg-black text-white px-5 py-2 rounded-md text-sm">
          View Projects
        </Link>
        <Link href="/contact" className="border px-5 py-2 rounded-md text-sm">
          Get in Touch
        </Link>
      </div>
    </section>
  );
}