import Card from './Card';

export default function Activities() {
  const mockCard = {
    review: 6,
    description: 'Life lessons with Katie Zaferes',
    location: 'USA',
    price: 136,
  };

  return (
    <section className="activities-container">
      <Card card={mockCard} />
    </section>
  );
}
