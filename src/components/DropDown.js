import SearchBox from './SearchBox';

const DropDown = ({ filter, setFilter ,search, setSearch }) => {
  return (
    <div >
      <div dir="rtl" className="inline-block">
        <select
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          value={filter}
          name="interaction"
          id="interaction"
          className="font-medium text-sm md:text-base p-1 md:p-2 appearance-none border rounded border-gray-400 w-36 md:w-52 outline-0"
        >
          <option value="all">همه تراکنش ها</option>
          <option value="concurrency_costs">هزینه خرید ظرفیت</option>
          <option value="payments">هزینه شارژحساب</option>
          <option value="trip_financials">هزینه سفر</option>
          <option value="misc_expenses">هزینه متفرقه</option>
        </select>
      </div>
      <span className="mx-1 md:mx-3 font-medium text-sm md:text-base">نوع تراکنش</span>      
      {filter === "trip_financials"? <SearchBox search={search} setSearch={setSearch}/>: <></>}
    </div>
  );
};

export default DropDown;
