'use client';

import { useState } from 'react';

import Masonry from '@/app/_components/masonry';
import WritingCard from '../writing-card';
import useIntersectionRef from '@/app/_hooks/useIntersectionRef';
import { fetchWritingList } from '@/app/_actions/fetchWritingList';
import { loadMoreArea } from './writing-card-list.css';

export default function WritingCardList() {
  const [page, setPage] = useState(1);
  const [writings, setWritings] = useState<Writing[]>([]);

  const loadMore = async () => {
    const newWritingList = await fetchWritingList(page);
    setWritings((prev) => prev.concat(newWritingList.data));
    setPage(page + 1);
  };

  const loadMoreRef = useIntersectionRef({ onIntersecting: loadMore });

  return (
    <Masonry>
      {writings.map((writing) => (
        <Masonry.Item key={writing.id}>
          <WritingCard {...writing} />
        </Masonry.Item>
      ))}
      <div className={loadMoreArea} ref={loadMoreRef} />
    </Masonry>
  );
}
