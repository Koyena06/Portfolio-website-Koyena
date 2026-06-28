import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css'
export const metadata = {
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
      <body className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
        <Navbar />
        <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
