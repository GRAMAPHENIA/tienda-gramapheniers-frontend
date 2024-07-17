"use client";

import { useCart } from "@/hooks/use-cart";

import { formatPrice } from "@/lib/formatPrice";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import CartItem from "./components/cart-item";

import { loadStripe } from "@stripe/stripe-js";

const Page = () => {
  const { items, removeAll } = useCart();

  const prices = items.map((product) => product.attributes.price);
  const totalPrice = prices.reduce((total, price) => total + price, 0);
  const stripePromise = loadStripe();

  const buyStripe = async () => {};

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-5 text-3xl font-bold">Carro de Compras</h1>
      <div className="grid sm:grid-cols-2 gap-y-10 sm:gap-20">
        <div>
          {items.length === 0 && (
            <p className="mb-5">
              No hay productos en el{" "}
              <span className="font-bold">Carro de Compras</span>{" "}
            </p>
          )}
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </ul>
        </div>
        <div className="max-w-xl">
          <div className="p-6 rounded-lg bg-stone-100 dark:bg-stone-100/10">
            <p className="mb-3 text-xl font-semibold dark:text-stone-200">
              Resumen de la Orden
            </p>
            <Separator />
            <div className="flex justify-between gap-5 my-4">
              <p>Total de la Orden</p>
              <p>{formatPrice(totalPrice)}</p>
            </div>

            <div className="flex items-center justify-center w-full mt-3">
              <Button
                className="w-full"
                onClick={() => console.log("Comprar realizada")}
              >
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
