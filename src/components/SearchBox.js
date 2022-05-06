const SearchBox = ({ search, setSearch}) => {

    return ( 
        <div className="inline-block my-1" dir="rtl">
            <label className="mx-1 md:mx-3 font-medium text-sm md:text-base">نام کوریر</label>
            <input 
                type={"text"}
                onChange={e => setSearch(e.target.value)}
                className={"font-medium text-sm md:text-base p-1 md:p-2 border rounded border-gray-400 w-36 md:w-52 outline-0"}
            />          
        </div>
     );
}
 
export default SearchBox;