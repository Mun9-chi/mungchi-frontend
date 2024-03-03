interface Writing {
  id: string;
  owner: {
    nickname: string;
    imageUrl: string;
  };
  thumbnail: string;
  content: string;
  likes: number;
  isVideo: boolean;
  createdAt: string;
  updatedAt: string;
}

interface WritingList {
  data: Writing[];
  size: number;
  take: number;
  totalPage: number;
  totalCount: number;
}
