"use client";

import { useRouter } from "next/navigation";

import { Carousel, CarouselItem, CarouselContent } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop = [
  {
    id: 1,
    title: "Envios en el acto",
    description: "Como cliente nuestro, tus envíos serán rápidos y seguros.",
    link: "#!",
  },
  {
    id: 2,
    title: "Consigue hasta un -25% en compras superiores a $10.000",
    description:
      "Aprovecha nuestras ofertas y obtén un descuento del 25% en todas tus compras superiores a $10.000. ¡No te lo pierdas!",
    link: "#!",
  },
  {
    id: 3,
    title: "Devoluciones y entregas gratuitas",
    description:
      "Disfruta de entregas sin costo y devoluciones fáciles y gratuitas en todos nuestros productos.",
    link: "#!",
  },
  {
    id: 4,
    title: "Novedades",
    description:
      "Mantente al día con nuestras últimas novedades y productos exclusivos. ¡Descúbrelos ahora!",
    link: "#!",
  },
];

const CarouselTextBanner = () => {
  const router = useRouter();

  return (
    <div className="bg-stone-200/30 dark:bg-stone-800/10  dark:text-white px-2 w-full shadow-md">
      <Carousel
        className="w-full max-w-4xl mx-auto" 
        plugins={[
          Autoplay({
            dedlay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarouselTop.map(({ id, title, link, description }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(link)}
              className="cursor-pointer"
            >
              <div>
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col justify-center items-center p-2 text-center">
                    <p className="sm:text-xs text-wrap dark:text-secondary font-bold border border-gray-400 border-dashed px-4 py-2 rounded-lg shadow-md dark:text-white">
                      {title}
                    </p>
                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary mt-5 dark:text-white">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
