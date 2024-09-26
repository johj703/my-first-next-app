import NewProductList from "./components/NewProductList";
import ProductList from "./components/ProductList";

export default async function Home() {
  return (
    <div>
      <h1>Sparta Shop</h1>
      <NewProductList />
      <ProductList />
    </div>
  );
}
