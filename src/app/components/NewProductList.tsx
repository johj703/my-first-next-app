import { Product } from "@/type/product";
import Image from "next/image";
import Link from "next/link";

const NewProductList = async () => {
  const res = await fetch("http://localhost:4000/products", {
    cache: "no-store",
  });
  const data: Product[] = await res.json();
  // const newData = data.filter((p) => p.isNew);

  // if (Math.random() > 0.5) throw new Error("오류!");

  return (
    <div className="flex gap-2 w-full overflow-auto ">
      <div className="w-max flex gap-2">
        {data.map((product) => {
          return (
            <Link
              className="flex"
              href={`/product/${product.id}`}
              key={product.id}
            >
              <div className="flex w-[250px] border rounded-sm">
                <Image
                  className="rounded-sm object-scale-down"
                  width={80}
                  height={80}
                  src={product.images}
                  alt={product.title}
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-md font-medium">{product.title}</h2>
                    <p className="mt-4 font-thin">{product.price.amount}$</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NewProductList;
