export interface Product {
  id: number;
  furniture_category_id: number;
  img: string;
  name: string;
  price: number;
  color?: string;
  availability: string;
  description: string;
  quantity: number;
  total: number;
  favorite: boolean;
  imagePath?: string;
}
