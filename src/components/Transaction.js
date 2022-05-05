import {
    FETCH_CONCURRENCY_COSTS,
    FETCH_PAYMENTS,
    FETCH_MISC_EXPENSES,
    FETCH_TRIP_FINANCIALS,
} from "../actions/actionTypes";
import ConcurrencyRow from "./tableRows/ConcurrencyRow";
import MiscRow from "./tableRows/MiscRow";
import PaymentRow from "./tableRows/PaymentRow";
import TripRow from "./tableRows/TripRow";

const DayTransaction = ({ day , transactions }) => {
    const renderRows = () => {
        return transactions.sort((a, b) => {
            if (a.hour > b.hour) {
                return -1;
            }
            if (a.hour < b.hour) {
                return 1;
            }
            return 0;
            }).map(transaction => {
            switch(transaction.type){
                case FETCH_CONCURRENCY_COSTS:
                    return (<ConcurrencyRow key={transaction.id} transaction={transaction}/>);
                case FETCH_PAYMENTS:
                    return (<PaymentRow key={transaction.id} transaction={transaction}/>);              
                case FETCH_MISC_EXPENSES:
                    return (<MiscRow key={transaction.id} transaction={transaction}/>);
                case FETCH_TRIP_FINANCIALS:
                    return (<TripRow key={transaction.id} transaction={transaction}/>);
                default:
                    return ;
            }
        })
    }

    const [date,week] = new Intl.DateTimeFormat("fa", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(new Date(day)).split(',')

    if(transactions.length){
        return (
        <div dir="rtl">
            <div className="bg-gray-200 text-gray-900 py-3 px-8" dir="rlt">
                {week} {date}
            </div>
            <div className="px-4 py-2">
                <table className="w-full border-collapse">
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>
        </div> 
     );
    }
    else{
        <></>
    }
    
}
 
export default DayTransaction;