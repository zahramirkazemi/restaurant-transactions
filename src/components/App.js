import TransactionList from "./TransactionList";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState('all')
  return (
    <div className="w-full">
      <Header filter={filter} setFilter={setFilter}/>
      <TransactionList filter={filter}/>
    </div>
  );
}

export default App;
