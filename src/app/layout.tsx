import { IBM_Plex_Mono, Hubot_Sans, Inter } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const hubotSans = Hubot_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-hubot-sans',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'CertifikGamer',
    template: '%s | CertifikGamer',
  },
  description:
    'Contrate jogadores, avalie suas habilidades e encontre o jogador perfeito para o seu time em um ambiente criado para solucionar os problemas de contratação de jogadores.',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'Template',
    'Shadcn/UI',
    'Web Development',
  ],
  authors: [{ name: 'CertifikGamer' }],
  creator: 'CertifikGamer',
  publisher: 'CertifikGamer',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: 'CertifikGamer',
    description:
      'Contrate jogadores, avalie suas habilidades e encontre o jogador perfeito para o seu time em um ambiente criado para solucionar os problemas de contratação de jogadores.',',',
    siteName: 'CertifikGamer',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CertifikGamer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CertifikGamer',
    description:
      'Contrate jogadores, avalie suas habilidades e encontre o jogador perfeito para o seu time em um ambiente criado para solucionar os problemas de contratação de jogadores.',',',
    images: ['/og-image.jpg'],
    creator: '@CertifikGamer',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`h-screen ${inter.variable} ${hubotSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
