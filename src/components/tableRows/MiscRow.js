import ConvertDate from "../../utils/ConvertDate";
import ShowPrice from "../../utils/ShowPrice";

const MiscRow = ({ transaction }) => {
    const amount = Math.abs(parseInt(transaction.amount)) * -1;
    return (
        <tr className="border-b last:border-b-0 leading-relaxed sm:leading-loose" data={transaction.id}>
            <td>
                {<ConvertDate date={new Date(`${transaction.day}T${transaction.hour}`)}  withTime={true}/>}
                <br />
                <span className="text-red-500 text-sm sm:text-base">{transaction.title}</span>
            </td>
            <ShowPrice isRed={true} amount={amount}/>
        </tr>
    );
}

export default MiscRow;