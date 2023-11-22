import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TEAM Church',
  description: '팀쳐치는 리더십이나 모든 성도들의 섬김에 있어서 좁게든, 넓게는 팀사역의 가치를 실현해 나갈 것입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-white px-4 py-6 align-top">
          <div className="mx-auto px-0 lg:container 2xl:w-1/5">
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
