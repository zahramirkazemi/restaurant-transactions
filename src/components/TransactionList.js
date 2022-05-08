import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTransactions } from "../actions";
import SortFunction from "../utils/SortFunction";
import Transaction from "./Transaction";

const TransactionList = ({ filter, search }) => {
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
    transactions = Array.from(map.entries()).sort((a, b) => SortFunction(a[0],b[0]))
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
            <Transaction key={day} transactions={transactions.filter(transaction => (transaction.type === filter && transaction.driver.includes(search)))} day={day} />
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
  return <div className={`w-full px-3 sm:px-4 ${filter === "trip_financials"? 'mt-20': 'mt-12'} md:mt-20`} dir="rtl">{renderList()}</div>;
};

export default TransactionList;
