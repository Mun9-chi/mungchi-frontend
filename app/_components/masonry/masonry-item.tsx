'use client';

import { useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import useResizeObserver from '@/app/_hooks/useResizeObserver';
import * as style from './masonry.css';

export default function MasonryItem(props: React.PropsWithChildren) {
  const [rowSpan, setRowSpan] = useState(DEFAULT_ROW_SPAN);

  const itemRef = useResizeObserver((rect) => {
    const newRowSpan = Math.ceil(rect.height / 10);
    setRowSpan(newRowSpan);
  });

  return (
    <div
      ref={itemRef}
      className={style.masonryItem}
      style={assignInlineVars({
        [style.rowSpanVar]: String(rowSpan),
      })}
    >
      {props.children}
    </div>
  );
}

const DEFAULT_ROW_SPAN = 300;
