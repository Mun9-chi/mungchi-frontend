import mockWritings from '../_data/mock-writings.json';

export async function GET(_request: Request, props: { params: { writingsId: string } }) {
  const writing = mockWritings.find((mockWriting) => mockWriting.id === props.params.writingsId);

  if (writing === undefined) {
    return new Response('Mock API Error: Writing Not Found', {
      status: 400,
    });
  }

  return Response.json(writing);
}
