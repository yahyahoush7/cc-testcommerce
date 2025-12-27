export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Canvas Tote",
    description: "Rugged everyday carry with reinforced handles.",
    price: 24
  },
  {
    id: "p2",
    name: "Studio Notebook",
    description: "Hardcover notebook with dotted pages.",
    price: 14
  },
  {
    id: "p3",
    name: "Ceramic Mug",
    description: "Hand-glazed mug for slow mornings.",
    price: 18
  },
  {
    id: "p4",
    name: "Desk Lamp",
    description: "Warm LED lamp with adjustable neck.",
    price: 42
  }
];

export async function getProducts(): Promise<Product[]> {
  "use server";
  return PRODUCTS;
}
