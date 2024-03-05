import Image from 'next/image';

import WritingCardList from './_components/writing-card-list';
import * as style from './app.css';

export default function Home() {
  return (
    <>
      <header className={style.header}>
        <div className={style.headerContainer}>
          <span>MUNGCHI</span>
          <Image src="/icons/search.svg" alt="검색" width={12} height={12} />
        </div>
      </header>
      <main className={style.container}>
        <WritingCardList />
      </main>
    </>
  );
}
