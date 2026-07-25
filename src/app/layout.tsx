import type { Metadata } from 'next'
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const fontHeading = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const fontBody = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Partha Dental - Khammam | Best Dental Clinic in Khammam',
  description: 'Experience premium dental care at Partha Dental - Khammam in Khammam. We offer general dentistry, root canal, implants, teeth whitening, orthodontics & more. Book your appointment today!',
  keywords: 'dental clinic Khammam, dentist Khammam, teeth whitening, root canal, dental implants, orthodontics, best dentist',
  openGraph: {
    title: 'Partha Dental - Khammam - Khammam',
    description: 'Premium dental care in Khammam',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="${fontHeading.variable} ${fontBody.variable}">
      <body className="font-body">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
