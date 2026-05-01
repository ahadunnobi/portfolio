import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'Ahadun Nobi — Full-Stack Developer',
  description:
    'Full-Stack Architect scaling professional digital solutions with React, Node.js, Express, and MongoDB. Based in Chattogram, Bangladesh.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Ahadun Nobi'],
  authors: [{ name: 'Ahadun Nobi' }],
  openGraph: {
    title: 'Ahadun Nobi — Full-Stack Developer',
    description: 'Engineering logic with human intent.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
