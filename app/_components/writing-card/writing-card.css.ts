import { style } from '@vanilla-extract/css';

export const card = style({
  width: '100%',
  height: '100%',
  marginBottom: 20,
});

export const image = style({
  borderRadius: 10,
  objectFit: 'cover',
  overflow: 'hidden',
});

export const detail = style({
  width: '100%',
  marginTop: 8,
  padding: '0 8px',
});

export const detailHead = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: 28,
});

export const profile = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: 12,
});

export const profileImage = style({
  marginRight: 4,
  borderRadius: '50%',
  objectFit: 'cover',
  overflow: 'hidden',
});

export const content = style({
  width: '100%',
  marginTop: 4,
  fontSize: 14,
  color: '#333',
});

export const button = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  fontSize: 14,
  color: '#333',
});
