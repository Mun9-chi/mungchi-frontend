import { Metadata } from 'next';
import { TITLE } from './_constants/text';

export const metadata: Metadata = {
  title: TITLE,
  description: '힙한 반려동물 커뮤니티',
};

export default function Profile() {
  return <section>hello profile</section>;
}
