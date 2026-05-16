export type CartLine = {
  productId: string;
  quantity: number;
};

export type CartSummary = {
  totalItems: number;
  lines: CartLine[];
};
