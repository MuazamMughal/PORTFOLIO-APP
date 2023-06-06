import Footer from './components/footer'
import Navbar from './components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muazam Mughal',
  description: 'My first portfolio web app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="costom-image" >
      
        <Navbar/>
       
        {children}
        
        <Footer/>
        
        </body>
    </html>
  )
}
