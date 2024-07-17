import Image from "next/image";
import CarouselTextBanner from "../components/carousel-text-banner";
import FeaturedProducts from "../components/featured-products";
import BannerDiscount from "../components/banner-discount";
import ChooseCategory from "../components/choose-category";
import BannerProduct from "../components/banner-product";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct />
    </main>
  );
}
