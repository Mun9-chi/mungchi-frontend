import Image from 'next/image';
import * as style from './app.css';

export default function Home() {
  return (
    <>
      <header className={style.header}>
        <div className={style.headerContainer}>
          <div>MUNGCHI</div>
          <Image src="/icons/search.svg" alt="검색" width={12} height={12} />
        </div>
      </header>
      <main></main>
    </>
  );
}
