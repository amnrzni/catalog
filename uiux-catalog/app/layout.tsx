import type { Metadata } from 'next';
import { Inter, Roboto, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AnimationProvider } from '@/contexts/AnimationContext';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aurora Analytics - Multi-Theme Design Catalog',
  description:
    'Explore Glassmorphism, Neumorphism, Material Design, and Minimalism with a complete multi-theme design system powered by CSS custom properties.',
  keywords: [
    'design system',
    'glassmorphism',
    'neumorphism',
    'material design',
    'minimalism',
    'UI components',
    'React',
    'Next.js',
    'TypeScript',
    'CSS custom properties',
    'design tokens',
  ],
  authors: [{ name: 'amnrzni' }],
  creator: 'amnrzni',
  openGraph: {
    type: 'website',
    title: 'Aurora Analytics - Multi-Theme Design Catalog',
    description: 'Explore 4 modern design styles with a unified token system',
    siteName: 'Aurora Analytics',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${inter.variable} ${roboto.variable} ${poppins.variable}`}
    >
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <AnimationProvider>{children}</AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
