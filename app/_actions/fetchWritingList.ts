'use server';

export const fetchWritingList = async (page: number) => {
  const res = await fetch('http://localhost:3000/api/writings');
  const writingList = await res.json();

  return writingList as WritingList;
};
