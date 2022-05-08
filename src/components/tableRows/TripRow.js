import ConvertDate from "../../utils/ConvertDate";
import ShowPrice from "../../utils/ShowPrice";

const TripRow = ({ transaction }) => {
    const amount = Math.abs(parseInt(transaction.final_price)) * -1;
    return (
        <tr className="border-b last:border-b-0 leading-relaxed sm:leading-loose" data={transaction.id} data2={transaction.trip_id}>
            <td>
                {<ConvertDate date={new Date(`${transaction.day}T${transaction.hour}`)}  withTime={true}/>}
                <br />
                <span className="text-red-500 text-sm sm:text-base">هزینه سفر</span>
                <br />
                <span className="text-xs sm:text-sm">{`کوریر: ${transaction.driver}`}</span>
                <br />
                <span className="text-xs sm:text-sm">{`شعبه: ${transaction.hub.title}`}</span>
            </td>
            <ShowPrice isRed={true} amount={amount}/>
        </tr>
    );
}

export default TripRow;