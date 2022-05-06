import TransactionList from "./TransactionList";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  return (
    <div className="w-full">
      <Header filter={filter} search={search} setSearch={setSearch} setFilter={setFilter} />
      <TransactionList filter={filter} search={search} />
    </div>
  );
}

export default App;
