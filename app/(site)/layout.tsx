import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/header';
import whiteLogo from '@/public/logo-white.svg';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TEAM Church',
  description: '팀쳐치는 리더십이나 모든 성도들의 섬김에 있어서 좁게든, 넓게는 팀사역의 가치를 실현해 나갈 것입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-slate-700`}>
        <Header />
        <main className="bg-white px-4 pb-32 pt-6 align-top">{children}</main>
        <footer className=" container mx-auto my-8 flex flex-col items-center px-4 text-center font-light text-white md:px-10 lg:max-w-screen-lg">
          <div className="mb-4">Copyright © 2023 Team Church OC</div>

          <Link href="/" legacyBehavior>
            <Image src={whiteLogo} alt="Team Church logo" height={60} className=" opacity-20" />
          </Link>
          <div />
        </footer>
      </body>
    </html>
  );
}
