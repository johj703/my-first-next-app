import { Suspense } from "react";
import NewProductList from "./components/NewProductList";
import ProductList from "./components/ProductList";
import Loading from "./loading";

export default async function Home() {
  return (
    <div>
      <h1>Sparta Shop</h1>
      <Suspense fallback={<Loading />}>
        <NewProductList />
      </Suspense>
      <ProductList />
    </div>
  );
}
