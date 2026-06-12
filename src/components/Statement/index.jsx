import { Transaction } from "../Transaction";
import { Container, Heading, TransactionsList } from "./styles";
import { useRecoilValue } from "recoil";
import { transactionsSelector } from "../../recoil/selectors/transactionsSelector";

export const Statement = () => {
  const transactions = useRecoilValue(transactionsSelector);

  return (
    <Container>
      <Heading>Extrato</Heading>
      <TransactionsList>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </TransactionsList>
    </Container>
  );
};
