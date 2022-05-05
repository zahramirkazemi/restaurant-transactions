const ConcurrencyRow = ({ transaction }) => {
    return ( 
        <tr className="border-b last:border-b-0 leading-loose">
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
                <span className="text-red-500">خرید ظرفیت</span>
                <br/>
                <span className="font-semibold text-sm">{`از تاریخ ${new Intl.DateTimeFormat("fa", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    }).format(new Date(transaction.start_date))} تا ${new Intl.DateTimeFormat("fa", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    }).format(new Date(transaction.end_date))}`}</span>
            </td>
            <td dir="ltr">
               <span className="text-red-500">{`-${new Intl.NumberFormat('fa', {style : "decimal" }).format(Math.abs(parseInt(transaction.amount)))}`}</span> 
            </td>
        </tr>
    );
}
 
export default ConcurrencyRow;