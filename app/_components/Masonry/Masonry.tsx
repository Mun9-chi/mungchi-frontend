'use client';

import * as style from './Masonry.css';

type MasonryProps = {};

export default function Masonry(props: React.PropsWithChildren<MasonryProps>) {
  return <div className={style.masonry}>{props.children}</div>;
}
