const PaymentRow = ({ transaction }) => {
    const amount = Math.abs(parseInt(transaction.amount));
    return (
        <tr className="border-b last:border-b-0 leading-relaxed sm:leading-loose" data={transaction.id}>
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
                <span className="text-green-500 text-sm sm:text-base">شارژ حساب</span>
            </td>
            <td dir="ltr">
                <span className="text-green-500 text-sm sm:text-base">{amount === 0 ? "رایگان" : "+" + new Intl.NumberFormat('fa', { style: "decimal" }).format(amount)}</span>
            </td>
        </tr>
    );
}

export default PaymentRow;