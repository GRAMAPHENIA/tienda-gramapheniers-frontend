interface ProductTypeOrigin {
  taste: string;
  origin: string;
}

const ProductTasteOrigin = (props: ProductTypeOrigin) => {
  const { origin, taste } = props;

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <p className="px-2 text-xs py-1 text-white bg-black/50 rounded-full dark:bg-black/50 dark:text-white w-fit border border-stone-700/50 dark:border-white/20">
          {taste}
        </p>
        <p className="px-2 text-xs py-1 bg-stone-50/70 backdrop-blur-lg rounded-full dark:bg-white/95 text-black w-fit border dark:border-white/30">
          {origin}
        </p>
      </div>
    </div>
  );
};

export default ProductTasteOrigin;
