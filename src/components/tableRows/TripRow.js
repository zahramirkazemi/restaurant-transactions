const TripRow = ({ transaction }) => {
    return ( 
        <tr className="border-b last:border-b-0 leading-loose" data={transaction.id} data2={transaction.trip_id}>
            <td>
                <span dir="ltr" className="text-sm">{
                    new Intl.DateTimeFormat("fa", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        hourCycle: 'h24'
                    }).format(new Date(`${transaction.day}T${transaction.hour}`))
                }</span>
                <br/>
                <span className="text-red-500 ">هزینه سفر</span>
                <br/>
                <span className="text-sm">{`کوریر: ${transaction.driver}`}</span>
                <br/>
                <span className="text-sm">{`شعبه: ${transaction.hub.title}`}</span>
            </td>
            <td dir="ltr">
               <span className="text-red-500">{`-${new Intl.NumberFormat('fa', {style : "decimal" }).format(Math.abs(parseInt(transaction.final_price)))}`}</span> 
            </td>
        </tr>
    );
}
 
export default TripRow;