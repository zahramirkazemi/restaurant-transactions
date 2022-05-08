import HeaderComponents from './HeaderComponents';

const Header = ({ filter, setFilter ,search, setSearch}) => {
    return ( 
        <div className="w-full p-2 md:py-4 md:px-10 fixed top-0 flex justify-between items-center bg-white">
            <HeaderComponents filter={filter} setFilter={setFilter} search={search} setSearch={setSearch}/>
            <span className='font-medium text-sm sm:text-base'> تمام تراکنش ها</span>
        </div>
    );
}
 
export default Header;