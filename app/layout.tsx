import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import * as style from './app.css';
import './reset.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '뭉치',
  description: '힙한 반려동물 커뮤니티',
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function AppLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className={style.appLayout}>{children}</div>
      </body>
    </html>
  );
}
