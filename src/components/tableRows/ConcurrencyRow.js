import ConvertDate from "../../utils/ConvertDate";
import ShowPrice from "../../utils/ShowPrice";

const ConcurrencyRow = ({ transaction }) => {
    const amount = Math.abs(parseInt(transaction.amount)) * -1;

    return (
        <tr className="border-b last:border-b-0 leading-relaxed sm:leading-loose" data={transaction.id}>
            <td>
                {<ConvertDate date={new Date(`${transaction.day}T${transaction.hour}`)} withTime={true}/>}
                <br />
                <span className="text-red-500 text-sm sm:text-base">خرید ظرفیت</span>
                <br />
                <span className="font-medium text-xs sm:text-sm">از تاریخ &nbsp;
                    <ConvertDate date={new Date(transaction.start_date)} withTime={false}/>
                    &nbsp; تا &nbsp;
                    <ConvertDate date={new Date(transaction.end_date)} withTime={false}/>
                </span>
            </td>
            <ShowPrice isRed={true} amount={amount}/>
        </tr>
    );
}

export default ConcurrencyRow;