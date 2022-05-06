const TripRow = ({ transaction }) => {
    const amount = Math.abs(parseInt(transaction.final_price)) * -1;
    return (
        <tr className="border-b last:border-b-0 leading-relaxed sm:leading-loose" data={transaction.id} data2={transaction.trip_id}>
            <td>
                <span dir="ltr" className="text-xs sm:text-sm">{
                    new Intl.DateTimeFormat("fa", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        hourCycle: 'h24'
                    }).format(new Date(`${transaction.day}T${transaction.hour}`))
                }</span>
                <br />
                <span className="text-red-500 text-sm sm:text-base">هزینه سفر</span>
                <br />
                <span className="text-xs sm:text-sm">{`کوریر: ${transaction.driver}`}</span>
                <br />
                <span className="text-xs sm:text-sm">{`شعبه: ${transaction.hub.title}`}</span>
            </td>
            <td dir="ltr">
                <span className={`${amount === 0 ? "text-green-500" : "text-red-500"} text-sm sm:text-base`}>{amount === 0 ? "رایگان" : new Intl.NumberFormat('fa', { style: "decimal" }).format(amount)}</span>
            </td>
        </tr>
    );
}

export default TripRow;