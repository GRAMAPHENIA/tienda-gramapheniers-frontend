export type FilterTypes = {
  result: ResultFilterTypes | null;
  loading: bool;
  error: string;
};

export type ResultFilterTypes = {
  schema: {
    attributes: {
      origin: {
        enum: any;
      };
    };
  };
};
