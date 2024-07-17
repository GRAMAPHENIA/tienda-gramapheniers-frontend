"use client";

import { useState } from "react";

import { useParams, useRouter } from "next/navigation";
import { useGetCategoryProduct } from "@/api/getCategoryProduct";

import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response";

import { Separator } from "@/components/ui/separator";

import ProductCad from "./components/product-card";
import FilterOrigin from "./components/filter-origin";
import SkeletonSchema from "@/components/skeletonSchema";
import FiltersControlsCategory from "./components/filters-controls-category";

export default function Page() {
  const params = useParams();
  const { categorySlug } = params;
  // console.log(categorySlug)

  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
  const [filterOrigin, setFilterOrigin] = useState("");
  const router = useRouter();
  
  // console.log(result);

  // console.log(filterOrigin);

  const filteredProducts =
    result !== null &&
    !loading &&
    (filterOrigin === ""
      ? result
      : result.filter(
          (product: ProductType) => product.attributes.origin === filterOrigin
        ));

  // console.log(filteredProducts);

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result !== null && !loading && (
        <h1 className="text-3xl font-medium pb-4">
          Recursos de {""}
          {result[0].attributes.category.data.attributes.categoryName}
        </h1>
      )}
      <Separator />

      <div className="sm:flex sm:justify-between gap-8">
        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-16">
          {loading && <SkeletonSchema grid={3} />}
          {filteredProducts !== null &&
            !loading &&
            filteredProducts.map((product: ProductType) => (
              <ProductCad key={product.id} product={product} />
            ))}

          {filteredProducts !== null &&
            !loading &&
            filteredProducts.length === 0 && (
              <p>No hay productos con este filtro</p>
            )}
        </div>
      </div>
    </div>
  );
}
