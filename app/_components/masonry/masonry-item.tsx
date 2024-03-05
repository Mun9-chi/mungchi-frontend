'use client';

import { useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import useResizeObserver from '@/app/_hooks/useResizeObserver';
import * as style from './masonry.css';

type MasonryItemProps = {};

export default function MasonryItem(props: React.PropsWithChildren<MasonryItemProps>) {
  const [volume, setVolume] = useState(DEFAULT_VOLUME);

  const itemRef = useResizeObserver((rect) => {
    const newVolume = Math.ceil(rect.height / 10);
    setVolume(newVolume);
  });

  return (
    <div
      ref={itemRef}
      className={style.masonryItem}
      style={assignInlineVars({
        [style.volumeVar]: volume.toString(),
      })}
    >
      {props.children}
    </div>
  );
}

const DEFAULT_VOLUME = 300;
