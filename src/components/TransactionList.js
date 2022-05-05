import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTransactions } from "../actions";
import DataTabel from "./DataTabel";


const TransactionList = ({filter}) => {  
    const transactions = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchTransactions(dispatch);
    },[])
    console.log(transactions)
    const renderList = ()=> {
        switch(filter){
            case 'all':
                break;
            default:
                transactions.map(transaction => {
                    
                })
                break;
        }
    }
    return ( 
        <div className="w-full p-4">          
        </div>
     );
}
 
export default TransactionList;