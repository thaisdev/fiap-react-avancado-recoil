import { selector } from "recoil";
import { transactionsState } from "../atoms/transactionsAtom";
import type { Transaction } from "../../types/transaction";

export const transactionsSelector = selector<Transaction[]>({
  key: "transactionsSelector",
  get: ({ get }) => {
    const transactions = get(transactionsState);
    return transactions.map((transaction) => ({
      ...transaction,
      date: new Date(transaction.date),
    }));
  },
});
