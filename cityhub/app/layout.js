import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Phone from './components/phone'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Samarinda Hub',
  description: 'Powered by WebNusantara',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Phone />
        {children}
      </body>
    </html>
  )
}
