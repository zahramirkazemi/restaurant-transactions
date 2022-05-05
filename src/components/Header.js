import DropDown from './DropDown';

const Header = ({ filter, setFilter ,search, setSearch}) => {
    return ( 
        <div className="w-full py-4 px-10 fixed top-0 flex justify-between items-center bg-white">
            <DropDown filter={filter} setFilter={setFilter} search={search} setSearch={setSearch}/>
            <span className='font-bold'> تمام تراکنش ها</span>
        </div>
    );
}
 
export default Header;