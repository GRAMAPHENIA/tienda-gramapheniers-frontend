import { ProductType } from "@/types/product";
// import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import ProductImageMiniature from "@/components/shared/product-image-miniature";

interface CartItemProps {
  product: ProductType;
}

const CartItem = (props: { product: any }) => {
  const { product } = props;
  // const router = useRouter();
  const { removeItem } = useCart();

  return (
    <li className="flex py-6 border-b">
      {/* REFACTORIZADO */}

      {/* <div
        onClick={() => router.push(`/product/${product.attributes.slug}`)}
        className="cursor-pointer"
      >
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.images.data[0].attributes.url}`}
          alt="Product"
          className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32 " 
        />
      </div> */}
      <ProductImageMiniature
        slug={product.attributes.slug}
        url={product.attributes.images.data[0].attributes.url}
      />
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold text-stone-600 dark:text-stone-400">
            {product.attributes.productName}
          </h2>
          <p className="font-medium">{formatPrice(product.attributes.price)}</p>
          {/* <div className="flex items-center justify-between gap-3 mt-2">
            <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit text-xs">
              {product.attributes.taste}
            </p>
            <p className="px-2 py-1 text-black border border-stone-300 dark:border-stone-300/30 rounded-full text-xs dark:text-white w-fit">
              {product.attributes.origin}
            </p>
          </div> */}
          <ProductTasteOrigin
            origin={product.attributes.origin}
            taste={product.attributes.taste}
          />
        </div>
        <div>
          <button
            className={cn(
              "rounded-full flex items-center justify-center text-black hover:text-white dark:hover:text-black bg-white border shadow-md p-3 hover:scale-110 transition"
            )}
          >
            <X
              size={12}
              // onClick={() => console.log("borrar")}
              onClick={() => removeItem(product.id)}
              className="text-stone-800"
            />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
