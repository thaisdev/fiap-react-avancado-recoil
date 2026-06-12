export type RawTransaction = {
  value: number;
  type: string;
  id: number;
  date: string;
};

export type Transaction = Omit<RawTransaction, "date"> & {
  date: Date;
};
