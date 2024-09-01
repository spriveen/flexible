import Footer from '@/components/Footer';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'FLEXIBLE',
  description: 'Showcase and discover remarble developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
        {children}
        </main>
       <Footer/>
        </body>
    </html>
  )
}
