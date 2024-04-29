import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/themeProvider';
import Navbar from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Stef Van Nieuwenhove',
  description: 'Portfolio of Stef Van Nieuwenhove',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          <Separator />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
