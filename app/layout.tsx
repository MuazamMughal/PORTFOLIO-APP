import Image from 'next/image'
import Footer from './components/footer'
import Navbar from './components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muazam Mughal',
  description: 'My first portfolio web app',
   icons: "/Muazam_Avatar-removebg-preview.png"
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
