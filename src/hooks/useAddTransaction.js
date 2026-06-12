import { useSetRecoilState } from "recoil";
import { transactionsState } from "../recoil/atoms/transactionsAtom";

export const useAddTransaction = () => {
  const setTransactions = useSetRecoilState(transactionsState);

  const addTransaction = (type, value) => {
    setTransactions((prevState) => {
      let parsedValue = Math.abs(value);

      if (type !== "Depósito") {
        parsedValue *= -1;
      }

      const newTransaction = {
        value: parsedValue,
        type,
        id: prevState.length + 1,
        date: new Date().toISOString(),
      };
      return [...prevState, newTransaction];
    });
  };

  return addTransaction;
};
