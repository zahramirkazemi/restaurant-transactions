const DropDown = ({ filter, setFilter}) => {
    return ( 
        <div>
            <div dir="rtl" className="inline-block">
                <select onChange={(e) => { setFilter(e.target.value)}} value={filter}  name="interaction" id="interaction" className="font-medium p-2 appearance-none border rounded border-gray-400 w-56 outline-0">
                    <option value="all">همه تراکنش ها</option>
                    <option value="concurrency_costs">هزینه خرید ظرفیت</option>
                    <option value="payments">هزینه شارژحساب</option>
                    <option value="trip_financials">هزینه سفر</option>
                    <option value="misc_expenses">هزینه متفرقه</option>
                </select>
            </div>            
            <span className="mx-3 font-medium">نوع تراکنش</span>
        </div>

     );
}
 
export default DropDown;