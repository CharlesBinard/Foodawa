export type ProductType = {
  name: string;
  description: string;
  image: string;
  price: number;
  tags: string[];
  _id: string;
};

export type CustomError = {
  response: {
    data: {
      message: string[];
    };
  };
};
