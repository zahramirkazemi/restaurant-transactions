const SearchBox = ({ search, setSearch}) => {

    return ( 
        <div className="inline-block" dir="rtl">
            <label className="mx-3 font-medium">نام کریر</label>
            <input 
                type={"text"}
                onChange={e => setSearch(e.target.value)}
                className={"font-medium p-2 border rounded border-gray-400 w-56 outline-0"}
            />          
        </div>
     );
}
 
export default SearchBox;