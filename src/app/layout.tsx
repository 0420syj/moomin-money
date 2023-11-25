import { Metadata } from 'next';
import localFont from 'next/font/local';
import { type NextFont } from 'next/dist/compiled/@next/font';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NextAuthProvider from '@/components/NextAuthProvider';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import '@/app/globals.css';

const metadata: Metadata = {
  title: '빵빚무 가계부',
  themeColor: '#024280',
  manifest: '/manifest.json',
};

const Pretendard: NextFont = localFont({
  src: '../assets/fonts/Pretendard/PretendardVariable.woff2',
  display: 'swap',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko" className={`${Pretendard.className}`}>
      <body className="flex flex-col min-h-screen antialiased text-gray-800">
        <NextAuthProvider>
          <ReactQueryProvider>
            <Header />
            <main className="flex-grow px-4 py-5">{children}</main>
            <Analytics />
            <Footer />
          </ReactQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export { metadata, RootLayout as default };
