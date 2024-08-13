/* eslint-disable @next/next/no-img-element */
"use client";

import useGetFeaturedProducts from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { ProductType } from "../types/product";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

import { Card, CardContent } from "./ui/card";

import SkeletonSchema from "./skeletonSchema";
import IconButton from "./icon-button";

import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";

const FeaturedProducts = () => {
  const { result, loading }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();
  const { addItem } = useCart();

  return (
    <div>
      <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
        <Carousel>
          <CarouselContent className="">
            {loading && <SkeletonSchema grid={3} />}
            {result !== null &&
              result.map((product: ProductType) => {
                const { attributes, id } = product;
                const { slug, images, productName, taste, origin } = attributes;

                return (
                  <CarouselItem
                    key={id}
                    className="md:basis-1/2 lg:basis-1/3 group"
                  >
                    <div className="p-1">
                      <Card className="py-4 border dark:border-gray-300/20 shadow-none hover:shadow-md rounded-lg bg-stone-200/30 dark:bg-stone-800/10 dark:shadow-md">
                        <CardContent className="relative flex items-center justify-center px-6 py-2">
                          <img
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images.data[0].attributes.url}`}
                            alt="Image featured"
                            className="rounded-t-lg shadow-xl"
                          />
                          <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                            <div className="flex justify-center gap-x-6 text-white">
                              <IconButton
                                onClick={() => router.push(`product/${slug}`)}
                                icon={<Expand size={15} />}
                                className="text-gray-600 border-gray-500"
                              />
                              <IconButton
                                onClick={() => addItem(product)}
                                icon={<ShoppingCart size={15} />}
                                className="text-gray-600 border-none"
                              />
                            </div>
                          </div>
                        </CardContent>
                        <div className=" flex justify-between gap-4 px-8 mt-3">
                          <h3 className="text-lg font-bold">{productName}</h3>
                          {/* <div className="flex items-center justify-between gap-2">
                            <p className="px-2 text-xs py-1 text-white bg-black/75 rounded-full dark:bg-white/80 dark:text-black w-fit">
                              {taste}
                            </p>
                            <p className="px-2 text-xs py-1 bg-stone-100/20 border rounded-full dark:bg-white/80 text-black/80 w-fit">
                              {origin}
                            </p>
                          </div> */}
                          <ProductTasteOrigin
                            origin={product.attributes.origin}
                            taste={product.attributes.taste}
                          />
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedProducts;
