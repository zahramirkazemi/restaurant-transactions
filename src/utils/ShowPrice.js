const ShowPrice = ({amount, isRed}) => {
    return (         
        <td dir="ltr"> 
            <span className={`${amount === 0 ? "text-green-500" : isRed ? "text-red-500" : "text-green-500"} text-sm sm:text-base`}>{amount === 0 ? "رایگان" : new Intl.NumberFormat('fa', { style: "decimal" }).format(amount)}</span>
        </td>
     );
}
 
export default ShowPrice;