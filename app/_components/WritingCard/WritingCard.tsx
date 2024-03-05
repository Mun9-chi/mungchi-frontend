'use client';

import Image from 'next/image';
import * as style from './WritingCard.css';

type WritingCardProps = Writing;

export default function WritingCard(props: WritingCardProps) {
  const { owner } = props;

  return (
    <section className={style.card}>
      <img className={style.image} src={owner.imageUrl} />
      <div className={style.detail}>
        <div className={style.detailHead}>
          <div className={style.profile}>
            <Image
              className={style.profileImage}
              src={owner.imageUrl}
              alt="프로필"
              width={26}
              height={26}
            />
            {owner.nickname}
          </div>
          <button className={style.button}>
            <Image src="/icons/heart-empty.svg" alt="좋아요" width={18} height={18} />
            {props.likes}
          </button>
        </div>
        <div className={style.content}>{props.content}</div>
      </div>
    </section>
  );
}
