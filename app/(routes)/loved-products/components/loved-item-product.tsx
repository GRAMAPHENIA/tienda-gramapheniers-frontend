/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
// import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import ProductImageMiniature from "@/components/shared/product-image-miniature";

interface LovedItemProductProps {
  product: ProductType;
}

const LovedItemProduct = (props: LovedItemProductProps) => {
  const { product } = props;
  // const router = useRouter();
  const { removeLovedItem } = useLovedProducts();
  const { addItem } = useCart();

  const addToCheckout = () => {
    addItem(product);
    removeLovedItem(product.id);
  };

  return (
    <li className="flex py-6 border-b">
      {/* REFACTORIZADO */}

      {/* <div onClick={() => router.push(`/product/${product.attributes.slug}`)}>
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.images.data[0].attributes.url}`}
          alt="Product"
          className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
        />
      </div> */}

      <ProductImageMiniature
        slug={product.attributes.slug}
        url={product.attributes.images.data[0].attributes.url}
      />

      <div className="flex justify-between flex-1 px-6">
        <div>
          <h1 className="text-lg font-semibold text-stone-700 dark:text-stone-500">
            {product.attributes.productName}
          </h1>
          <p className="font-light">{formatPrice(product.attributes.price)}</p>
          {/* <div className="flex items-center justify-between gap-3">
            <p className="px-2 text-xs py-1 text-white bg-black/50 rounded-full dark:bg-black/50 dark:text-white w-fit border border-white/30">
              {product.attributes.taste}
            </p>
            <p className="px-2 text-xs py-1 bg-stone-50/70 backdrop-blur-lg rounded-full dark:bg-white/95 text-black w-fit border dark:border-white/30">
              {product.attributes.origin}
            </p>
          </div> */}
          <ProductTasteOrigin
            origin={product.attributes.origin}
            taste={product.attributes.taste}
          />
          <Button className="mt-5 rounded-full" onClick={addToCheckout}>
            Añadir al carrito
          </Button>
        </div>
        <div>
          <Button
            className={cn(
              "rounded-full flex items-center justify-center text-black hover:text-white dark:hover:text-black bg-white border shadow-md p-3 hover:scale-110 transition"
            )}
          >
            <X
              size={15}
              onClick={() => removeLovedItem(product.id)}
              className="text-stone-800"
            />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default LovedItemProduct;
