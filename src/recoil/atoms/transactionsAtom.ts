import { atom } from "recoil";
import type { RawTransaction } from "../../types/transaction";

export const transactionsState = atom<RawTransaction[]>({
  key: "transactionsState",
  default: [],
});
