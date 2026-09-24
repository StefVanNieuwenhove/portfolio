import type { Metadata } from 'next';
import './globals.css';
import { Exo_2 } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/navigation';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { Geist, Geist_Mono } from 'next/font/google';

export const metadata: Metadata = {
  title: { default: 'SVN Consulting', template: '%s | SVN C.' },
  description: 'Full-stack developer that solves problems with code.',
  keywords:
    'full-stack developer, software developer, web developer, freelancer, consultant, portfolio, portfolio website, svn consulting',
  authors: [{ name: 'Stef Van Nieuwenhove', url: 'https://svnconsulting.com' }],
  creator: 'Stef Van Nieuwenhove',
};

const exo2 = Exo_2({ subsets: ['latin'], variable: '--font-exo-2' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cn(
        'h-full',
        'antialiased',
        exo2.variable,
        geistSans.variable,
        geistMono.variable,
      )}
      suppressHydrationWarning>
      <body className='min-h-full flex flex-col'>
        <NextIntlClientProvider>
          <Navbar />
          <main> {children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
