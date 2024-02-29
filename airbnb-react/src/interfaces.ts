interface ICards {
  id: number;
  image: string;
  review: number;
  location: string;
  description: string;
  price: number;
  banner?: string;
}

export default interface ICardsProps {
  card: ICards;
}
