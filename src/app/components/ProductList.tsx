"use client";

import { Product } from "../page";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="p-8 m-4">
      {data.map((product) => (
        <div className="flex border p-4 gap-4 rounded-md" key={product.id}>
          <img
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
