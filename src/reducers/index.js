import {
    FETCH_CONCURRENCY_COSTS,
    FETCH_PAYMENTS,
    FETCH_MISC_EXPENSES,
    FETCH_TRIP_FINANCIALS,
} from "../actions/actionTypes";
import _ from 'lodash';

export default function reducer(state = [],action){
    switch(action.type){
        case FETCH_CONCURRENCY_COSTS:
        case FETCH_MISC_EXPENSES:
            return {
                ...state,
                ..._.mapKeys(
                    action.payload.map(
                        el => ({
                            type: action.type ,
                            day: el.created_at.split("T")[0],
                            hour: el.created_at.slice(11,16), ...el
                        })
                    ),
                    'id'
                )
            }            
        case FETCH_PAYMENTS:
            return {
                ...state,
                ..._.mapKeys(
                    action.payload.map(
                        el => ({
                            type: action.type, 
                            day: el.datetime.split("T")[0] ,
                            hour: el.datetime.slice(11,16), ...el
                        })
                    ),
                    'id'
                )
            }
        case FETCH_TRIP_FINANCIALS:
            return {
                ...state,
                ..._.mapKeys(
                    action.payload.map(
                        el => ({
                            type: action.type, 
                            day: el.request_datetime.split("T")[0] ,
                            hour: el.request_datetime.slice(11,16), ...el
                        })
                    ),
                    'id'
                )
            }
        default:
            return state;
    }
}