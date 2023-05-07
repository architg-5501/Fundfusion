import Navbar from '@/components/Navbar'
import './globals.css'
export const metadata = {
  title: 'fundfusion',
  description: 'FundFusion is a blockchain-based all-in-one funding platform that provides accessible, secure, and efficient funding solutions for individuals, organizations, and causes seeking funding for their projects.',
}

export default function RootLayout({ children }) {
  return (
    <html className="dark" lang="en">
      <body className="min-h-screen flex flex-col">

        <Navbar/>
        {children}


      </body>
    </html>
  )
}
