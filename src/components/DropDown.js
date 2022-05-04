const DropDown = () => {
    return ( 
        <div>
            <div dir="rtl" className="inline-block">
                <select name="interaction" id="interaction" className="font-medium p-2 appearance-none border rounded border-gray-400 w-56 outline-0">
                    <option value="1">خسارت</option>
                    <option value="2">هزینه شارژحساب</option>
                    <option value="3">هزینه سفر</option>
                    <option value="4">هزینه متفرقه</option>
                </select>
            </div>            
            <span className="mx-3 font-medium">نوع تراکنش</span>
        </div>

     );
}
 
export default DropDown;