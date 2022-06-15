export type ProductType = {
  name: string;
  description: string;
  image: string;
  price: number;
  tags: string[];
  _id: string;
};

export type CustomError = {
  messages: string[];
  status: number;
  action: string;
};

export type ApiResponseError = {
  response: {
    status: number;
    data: {
      message: string[];
    };
  };
};
