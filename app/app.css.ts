import { style } from '@vanilla-extract/css';

export const appLayout = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export const container = style({
  width: '100%',
  maxWidth: 1200,
  height: '100%',
});

export const header = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export const headerContainer = style([
  container,
  {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 16,
  },
]);
