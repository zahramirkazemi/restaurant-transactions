import ConvertDate from "../../utils/ConvertDate";
import ShowPrice from "../../utils/ShowPrice";

const PaymentRow = ({ transaction }) => {
    const amount = Math.abs(parseInt(transaction.amount));
    return (
        <tr className="border-b last:border-b-0 leading-relaxed sm:leading-loose" data={transaction.id}>
            <td>
                {<ConvertDate date={new Date(`${transaction.day}T${transaction.hour}`)}  withTime={true}/>}
                <br />
                <span className="text-green-500 text-sm sm:text-base">شارژ حساب</span>
            </td>            
            <ShowPrice isRed={false} amount={amount}/>
        </tr>
    );
}

export default PaymentRow;