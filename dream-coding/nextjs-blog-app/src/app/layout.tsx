import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Footer from 'components/Footer';
import Header from 'components/Header';

const inter = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: '장수의 블로그',
    template: '장수의 블로그 | %s',
  },
  description: 'FE 개발자 장수의 블로그',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="mx-auto flex w-full max-w-screen-2xl flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
