import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/ui/Main Page/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MedDeFi',
  description: 'Decentralized Medical Platform for Healthcare across Borders',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="pt-8 flex-grow flex items-center justify-center">
          {children}
        </main>
        <footer className=" p-4">
          <div className="container mx-auto text-center">
          
          </div>
        </footer>
      </body>
    </html>
  );
}
