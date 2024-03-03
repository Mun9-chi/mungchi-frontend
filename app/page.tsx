import Image from 'next/image';
import * as style from './app.css';
import Masonry from './_components/Masonry/Masonry';

import mockWritings from './_remote/mock-writings.json';
import MasonryItem from './_components/Masonry/MasonryItem';
import WritingCard from './_components/WritingCard/WritingCard';

export default function Home() {
  const writings = mockWritings;

  return (
    <>
      <header className={style.header}>
        <div className={style.headerContainer}>
          <span>MUNGCHI</span>
          <Image src="/icons/search.svg" alt="검색" width={12} height={12} />
        </div>
      </header>
      <main className={style.container}>
        <Masonry>
          {writings.map((writing) => {
            return (
              <MasonryItem key={writing.id}>
                <WritingCard {...writing} />
              </MasonryItem>
            );
          })}
        </Masonry>
      </main>
    </>
  );
}
