import mockWritings from './_data/mock-writings.json';

const PAGE_OFFSET = 10;

export async function GET() {
  const page = 1;

  const startIndex = PAGE_OFFSET * (page - 1);
  const pageData = mockWritings.slice(startIndex, startIndex + PAGE_OFFSET);

  return Response.json({
    data: pageData,
    size: pageData.length,
    take: PAGE_OFFSET,
    totalPage: Math.ceil(mockWritings.length / PAGE_OFFSET),
    totalCount: mockWritings.length,
  });
}
