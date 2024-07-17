/* eslint-disable @next/next/no-img-element */
"use client";

import { useLovedProducts } from "@/hooks/use-loved-products";
import LovedItemProduct from "./components/loved-item-product";

export default function Page() {
  const { lovedItems } = useLovedProducts();

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-5 text-3xl font-bold">Productos que te gustan</h1>
      <div>
        <div>
          {lovedItems.length === 0 && (
            <p>No hay productos destacados en la seccion <span className="font-bold">Me gusta</span> </p>
          )}
          <ul>
            {lovedItems.map((item) => (
              //   <p key={item.id}>{item.attributes.productName}</p>
              <LovedItemProduct key={item.id} product={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
