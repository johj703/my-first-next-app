// ISR

import ProductList from "./components/ProductList";

export default async function Home() {
  const res = await fetch("http://localhost:4000/products", {
    next: {
      revalidate: 3,
    },
  });
  const data: Product[] = await res.json();
  console.log(data);
  return (
    <div>
      <ProductList />
    </div>
  );
}

export type Product = {
  id: number;
  handle: string;
  availableForSale: boolean;
  isNew: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: {
    name: string;
    values: string[];
  }[];
  price: {
    amount: string;
    currencyCode: string;
  };
  images: string;
  seo: {
    title: string;
    description: string;
  };
  tags: string[];
  rating: number;
};
