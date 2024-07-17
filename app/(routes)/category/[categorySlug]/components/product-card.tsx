/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/navigation";

import { ProductType } from "@/types/product";

import IconButton from "@/components/icon-button";

import { Expand, ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/formatPrice";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  const router = useRouter();

  return (
    <Link
      href={`/product/${product.attributes.slug}`}
      className="relative p-2 transition-all duration-100 border dark:border-gray-300/20 shadow-none hover:shadow-md rounded-lg"
    >
      <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
        {/* <p className="px-2 text-xs py-1 text-white bg-black/50 rounded-full dark:bg-black/50 dark:text-white w-fit">
          {product.attributes.taste}
        </p>
        <p className="px-2 text-xs py-1 bg-stone-50/70 backdrop-blur-lg  rounded-full dark:bg-white/95 text-black w-fit border border-white/30">
          {product.attributes.origin}
        </p> */}
        <ProductTasteOrigin
          origin={product.attributes.origin}
          taste={product.attributes.taste}
        />
      </div>

      {/* <ProductTasteOrigin
        origin={product.attributes.origin}
        taste={product.attributes.taste}
      /> */}

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-full"
      >
        <CarouselContent>
          {product.attributes.images.data.map((image) => (
            <CarouselItem key={image.id} className="group">
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
                alt="image"
                className="rounded-md"
              />
              <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                <div className="flex justify-center gap-x-6">
                  <IconButton
                    onClick={() =>
                      router.push(`/product/${product.attributes.slug}`)
                    }
                    icon={<Expand size={15} className="text-gray-600" />}
                  />
                  <IconButton
                    onClick={() => console.log("product")}
                    icon={<ShoppingCart size={15} className="text-gray-600" />}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="text-2xl text-center mt-1">
        {product.attributes.productName}
      </p>
      <p className="font-light text-center">
        {formatPrice(product.attributes.price)}
      </p>
    </Link>
  );
};

export default ProductCard;
