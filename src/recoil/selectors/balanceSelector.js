import { selector } from "recoil";
import { transactionsState } from "../atoms/transactionsAtom";

export const balanceSelector = selector({
  key: "balanceSelector",
  get: ({ get }) => {
    const transactions = get(transactionsState);
    return transactions.reduce(
      (acc, transaction) => acc + transaction.value,
      0,
    );
  },
});
