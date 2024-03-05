'use client';

import { useState } from 'react';
import Image from 'next/image';

import Masonry from './_components/masonry';
import WritingCard from './_components/writing-card';
import useIntersectionObserver from './_hooks/useIntersectionObserver';
import { fetchWritingList } from './_actions/fetchWritingList';
import * as style from './app.css';

export default function Home() {
  const [page, setPage] = useState(1);
  const [writings, setWritings] = useState<Writing[]>([]);

  const loadMore = async () => {
    const newWritingList = await fetchWritingList(page);
    setWritings((prev) => prev.concat(newWritingList.data));
    setPage(page + 1);
  };

  const loadMoreRef = useIntersectionObserver(loadMore);

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
          {writings.map((writing) => (
            <Masonry.Item key={writing.id}>
              <WritingCard {...writing} />
            </Masonry.Item>
          ))}
        </Masonry>
        <div ref={loadMoreRef} />
      </main>
    </>
  );
}
