import {
        FETCH_CONCURRENCY_COSTS,
        FETCH_PAYMENTS,
        FETCH_MISC_EXPENSES,
        FETCH_TRIP_FINANCIALS,
} from "./actionTypes";

export const fetchTransactions = async (dispatch) => {
        const resp = await fetch("data.json");
        const data = await resp.json();        
        dispatch({ type: FETCH_TRIP_FINANCIALS, payload: data.trip_financials });
        dispatch({ type: FETCH_PAYMENTS, payload: data.payments });  
        dispatch({ type: FETCH_MISC_EXPENSES, payload: data.misc_expenses });  
        dispatch({ type: FETCH_CONCURRENCY_COSTS, payload: data.concurrency_costs });     
}