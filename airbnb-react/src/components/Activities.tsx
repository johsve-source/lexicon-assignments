import Card from './Card';

export default function Activities() {
  const mockCard = [
    {
      review: 6,
      description: 'Life lessons with Katie Zaferes',
      location: 'USA',
      price: 136,
      image: '/public/katie-zaferes.png',
    },
    {
      review: 3,
      description: 'Fly with John Wheeler',
      location: 'Sweden',
      price: 655,
      image: '/public/katie-zaferes.png',
    },
    {
      review: 388,
      description: 'Photograph Lessons with John Travolta',
      location: 'USA',
      price: 923,
      image: '/public/katie-zaferes.png',
    },
  ];

  return (
    <section className="cards-container">
      <Card card={mockCard[0]} />
      <Card card={mockCard[1]} />
      <Card card={mockCard[2]} />
    </section>
  );
}
