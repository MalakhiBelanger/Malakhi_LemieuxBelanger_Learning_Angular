export interface Card {
  id: number;
  color: string;
  name: string;
  type: string;
  cost: string;
  oracle?: string;
  power?: string;
  toughness?: string;
  src: string;
}
