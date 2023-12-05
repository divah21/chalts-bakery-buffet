
import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import { QueryProvider } from '@/lib/react-query/QueryProvider'
import AuthProvider from '@/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Chalts',
  description: 'Track product prices effortlessly and save money on your online shopping.',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    
    <QueryProvider>
      <AuthProvider>
       
        <html lang="en">
        <body className={inter.className}>
          <main className="max-w-10xl mx-auto">
            <Navbar />
            {children}
           <Toaster />
          </main>
        </body>
      </html>
      
      </AuthProvider>
    </QueryProvider>
  )
}

export default RootLayout;