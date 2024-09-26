// "use client";

import Image from "next/image";
import { Product } from "@/type/product";
import { getProduct } from "@/server-action";
// import { useEffect, useState } from "react";

const ProductList = async () => {
  const { data } = await getProduct();

  // const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState<Product[]>([]);
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("http://localhost:4000/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setIsLoading(false);
  //     });
  // }, []);

  // if (isLoading) return <>Loading..</>;

  return (
    <div className="p-8 m-4">
      {data.map((product) => (
        <div className="flex border p-4 gap-4 rounded-md" key={product.id}>
          <Image
            className="rounded-smr"
            width={150}
            height={150}
            src={product.images}
            alt={product.title}
          />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="text-sm">{product.description}</p>
              <p className="mt-4 text-2xl">{product.price.amount}$</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
