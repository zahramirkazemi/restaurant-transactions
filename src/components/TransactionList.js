import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTransactions } from "../actions";
import Transaction from "./Transaction";

const TransactionList = ({ filter ,search }) => {
  const data = useSelector((state) => Object.values(state));
  const dispatch = useDispatch();
  const map = new Map();
  let transactions;

  useEffect(() => {
    fetchTransactions(dispatch);
  }, [dispatch]);

  const classifyTransactions = () => {
    data.forEach((transaction) => {
      if (map.has(transaction.day)) {
        map.set(transaction.day, [...map.get(transaction.day), transaction]);
      } else {
        map.set(transaction.day, [transaction]);
      }
    });

    transactions = Array.from(map.entries()).sort((a, b) => {
        if (a[0] > b[0]) {
            return -1;
        }
        if (a[0] < b[0]) {
            return 1;
        }
        return 0;
        })
  };

  const renderList = () => {
    classifyTransactions();
    switch (filter) {
      case "all":
        return transactions.map(([day, transactions]) => {
            return (
                <Transaction key={day} transactions={transactions} day={day} />
            );
        });
        case "trip_financials":
            return transactions.map(([day, transactions]) => {
                return (
                    <Transaction key={day} transactions={transactions.filter(transaction => (transaction.type === filter && transaction.driver.includes(search))) } day={day} />
                );
            });
      default:
        return transactions.map(([day, transactions]) => {
            return (
                <Transaction key={day} transactions={transactions.filter(transaction => transaction.type === filter)} day={day} />
            );
        });
    }
  };
  return <div className="w-full px-4 mt-20">{renderList()}</div>;
};

export default TransactionList;
