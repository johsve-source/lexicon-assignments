import Card from './Card';

export default function Activities() {
  const mockCards = [
    {
      id: 1,
      review: 6,
      description: 'Life lessons with Katie Zaferes',
      location: 'USA',
      price: 136,
      image: '/katie-zaferes.png',
      banner: 'Online',
    },
    {
      id: 2,
      review: 3,
      description: 'Fly with John Wheeler',
      location: 'Sweden',
      price: 655,
      image: '/katie-zaferes.png',
    },
    {
      id: 3,
      review: 388,
      description: 'Photograph Lessons with John Travolta',
      location: 'USA',
      price: 923,
      image: '/katie-zaferes.png',
      banner: 'SOLD OUT',
    },
  ];

  return (
    <section className="cards-container">
      {mockCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
}
