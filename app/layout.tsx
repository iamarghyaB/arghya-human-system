import type { Metadata } from 'next';
import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/bodoni-moda';
import '@fontsource-variable/bodoni-moda/wght-italic.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import './globals.css';

const portfolioTitle = 'Arghya Biswas | Full-Stack Developer & Makezaa Co-Owner';
const portfolioDescription = 'Arghya Biswas is a full-stack developer and Makezaa co-owner who helps run Octetec. Explore client websites, web applications, and independent software projects.';

export const metadata: Metadata = {
  title: { default: portfolioTitle, template: '%s | Arghya Biswas' },
  description: portfolioDescription,
  openGraph: {
    title: portfolioTitle,
    description: portfolioDescription,
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
