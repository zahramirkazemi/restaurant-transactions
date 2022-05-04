import DropDown from './DropDown';

const Header = () => {
    return ( 
        <div className="w-full py-4 px-10 sticky flex justify-between items-center bg-white">
            <DropDown/>
            <span className='font-bold'> تمام تراکنش ها</span>
        </div>
    );
}
 
export default Header;