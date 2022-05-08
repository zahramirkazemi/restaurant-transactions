import SearchBox from "./SearchBox";
import DropDown from "./DropDown";

const HeaderComponents = ({ filter, setFilter ,search, setSearch }) => {
    return ( <div>
        <DropDown filter={filter} setFilter={setFilter}/>        
        {filter === "trip_financials"? <SearchBox search={search} setSearch={setSearch}/>: <></>}
    </div> );
}
 
export default HeaderComponents;