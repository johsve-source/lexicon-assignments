interface ICards {
  review: number;
  location: string;
  description: string;
  price: number;
}

export default interface ICardsProps {
  card: ICards;
}