import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// Note: After running setup-project.js, update these to @/ paths
// import { ThemeProvider } from '@/contexts/ThemeContext';
// import { AnimationProvider } from '@/contexts/AnimationContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Design Catalog - Modern UI/UX Styles',
  description:
    'Explore Glassmorphism, Neumorphism, Material Design, and Minimalism with interactive components. A comprehensive design system showcase.',
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
  ],
  authors: [{ name: 'amnrzni' }],
  creator: 'amnrzni',
  openGraph: {
    type: 'website',
    title: 'Design Catalog - Modern UI/UX Styles',
    description: 'Explore 4 modern design styles with interactive components',
    siteName: 'Design Catalog',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Placeholder providers - will be replaced after setup
  const ThemeProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
  const AnimationProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
  
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-black text-text-primary antialiased">
        <ThemeProvider>
          <AnimationProvider>{children}</AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
