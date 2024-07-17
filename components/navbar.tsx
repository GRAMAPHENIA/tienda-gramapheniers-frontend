"use client";

import { useRouter } from "next/navigation";

import { ShoppingCart, BaggageClaim } from "lucide-react";
import { Heart } from "lucide-react";
import { User } from "lucide-react";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";

const NavBar = () => {
  const router = useRouter();
  const cart = useCart();
  const { lovedItems } = useLovedProducts();

  return (
    <div className="flex items-center justify-between p-4 mx-auto sm:max-w-4xl md:max-w-6xl">
      <h1
        className="sm:text-3xl cursor-pointer "
        onClick={() => router.push("/")}
      >
        Grama<span className="font-bold">Pheniers</span>{" "}
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center gap-4 ">
        {cart.items.length === 0 ? (
          <ShoppingCart
            strokeWidth={1}
            className="cursor-pointer"
            onClick={() => router.push("/cart")}
          />
        ) : (
          <div className="flex gap-1" onClick={() => router.push("/cart")}>
            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
            <span>{cart.items.length}</span>
          </div>
        )}

        <Heart
          strokeWidth={1}
          className={`cursor-pointer ${lovedItems.length > 0 && "fill-black dark:fill-white"}`}
          onClick={() => router.push("/loved-products")}
        />

        <User
          strokeWidth={1}
          className="cursor-pointer"
          onClick={() => router.push("/sign-in")}
        />
        <ToggleTheme />
      </div>
    </div>
  );
};

export default NavBar;
