import { container } from '@/app/app.css';
import { style, createVar } from '@vanilla-extract/css';

export const rowSpanVar = createVar();

export const masonryContainer = style([
  container,
  {
    display: 'grid',
    gridAutoRows: '10px',
    gridTemplateColumns: `repeat(4, 1fr)`,
    alignItems: 'center',
    columnGap: '16px',
    width: '100%',
    height: '100%',

    '@media': {
      '(max-width: 780px)': {
        gridTemplateColumns: `repeat(2, 1fr)`,
      },
    },
  },
]);

export const masonryItem = style({
  gridRowEnd: `span ${rowSpanVar}`,

  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'max-content',
  paddingBottom: 16,
});
