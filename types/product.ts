export type ProductType = {
  attributes: {
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    isFeatured: bollean;
    taste: string;
    origin: string;
    price: number;
    images: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      }[];
    };
    category: {
      data: {
        attributes: {
          slug: string;
          categoryName: string;
        };
      };
    };
  };
};
