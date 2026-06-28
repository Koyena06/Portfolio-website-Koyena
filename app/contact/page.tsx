export default function Contact() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="text-gray-600">
        I'm open to full-time roles and freelance projects. Best way to reach me:
      </p>
      <a
        href="mailto:koyena.sutradhar@gmail.com"
        className="bg-black text-white px-6 py-3 rounded-md w-fit text-sm">
        Email Me
      </a>
      <div className="flex gap-4 text-sm">
        <a
          href="https://github.com/Koyena06"
          target="_blank"
          rel="noopener noreferrer"
          className="underline">
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/kosu"
          target="_blank"
          rel="noopener noreferrer"
          className="underline">
          LinkedIn
        </a>
      </div>
    </section>
  );
}