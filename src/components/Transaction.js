import {
    FETCH_CONCURRENCY_COSTS,
    FETCH_PAYMENTS,
    FETCH_MISC_EXPENSES,
    FETCH_TRIP_FINANCIALS,
} from "../actions/actionTypes";
import SortFunction from "../utils/SortFunction";
import ConcurrencyRow from "./tableRows/ConcurrencyRow";
import MiscRow from "./tableRows/MiscRow";
import PaymentRow from "./tableRows/PaymentRow";
import TripRow from "./tableRows/TripRow";

const DayTransaction = ({ day, transactions }) => {
    const renderRows = () => {
        return transactions
            .sort((a, b) => SortFunction(a.hour, b.hour))
            .map((transaction) => {
                switch (transaction.type) {
                    case FETCH_CONCURRENCY_COSTS:
                        return <ConcurrencyRow key={transaction.id} transaction={transaction} />;
                    case FETCH_PAYMENTS:
                        return <PaymentRow key={transaction.id} transaction={transaction} />;
                    case FETCH_MISC_EXPENSES:
                        return <MiscRow key={transaction.id} transaction={transaction} />;
                    case FETCH_TRIP_FINANCIALS:
                        return <TripRow key={transaction.id} transaction={transaction} />;
                    default:
                        return <></>;
                }
            });
    };

    const [date, week] = new Intl.DateTimeFormat("fa", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
        .format(new Date(day))
        .split(",");

    if (transactions.length) {
        return (
            <div>
                <div className="bg-gray-200 text-gray-900 py-2 px-6 text-sm sm:text-base sm:py-3 sm:px-8">
                    {week} {date}
                </div>
                <div className="px-2 py-1 sm:px-4 sm:py-2">
                    <table className="w-full">
                        <tbody>{renderRows()}</tbody>
                    </table>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};

export default DayTransaction;
