'use client';

import * as style from './masonry.css';

export default function MasonryContainer(props: React.PropsWithChildren) {
  return <div className={style.masonryContainer}>{props.children}</div>;
}
