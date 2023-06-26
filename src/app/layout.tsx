import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from '../lib/cn'
import Providers from './components/Providers'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={cn("bg-white antialiased text-slate-900",inter.className)} lang="en">
      <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
        <Providers>
          <Navbar/>
        {children}
        </Providers>
        {/* {ADD MORE HIGHT FOR MOBILE DEVICES } */}
        <div className='h-60 md:hidden'/>
        <Toaster />

        </body>
    </html>
  )
}
