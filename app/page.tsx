import Image from 'next/image';
import * as style from './app.css';

import Masonry from './_components/Masonry';
import WritingCard from './_components/WritingCard/WritingCard';

export default async function Home() {
  const writingList = await getWritingList();

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
          {writingList.data.map((writing) => {
            return (
              <Masonry.Item key={writing.id}>
                <WritingCard {...writing} />
              </Masonry.Item>
            );
          })}
        </Masonry>
      </main>
    </>
  );
}

export const getWritingList = async () => {
  const res = await fetch('http://localhost:3000/api/writings');
  const writingList = await res.json();

  return writingList as WritingList;
};
