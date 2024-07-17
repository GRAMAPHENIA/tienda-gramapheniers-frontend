import { buttonVariants } from "./ui/button";
import Link from "next/link";

const BannerProduct = () => {
  return (
    <>
      <div
        className="mt4
     text-center"
      >
        <p>Sumerjete en una experiencia unica</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">Assets</h4>
        <p className="my-2 text-lg">Ilustraciones, animaciones, modelos 3D, sonidos.</p>
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
      </div>

      <div className="h-[300px] md:h-[400px] bg-[url('/banner-product-image.png')] bg-center mt-5 bg-cover"></div>
    </>
  );
};

export default BannerProduct;
