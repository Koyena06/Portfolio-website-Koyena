import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata={
  title: "Koyena Sutradhar - Developer",
  description: "Portfolio of [Koyena Sutradhar], a full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body className="bg-auto text-zinc-900 font-sans">{children}
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">{children}</main>
      <Footer />
    </body>
    </html>
  );
}
