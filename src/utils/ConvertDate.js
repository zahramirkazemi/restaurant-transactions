const ConvertDate = ({date, withTime}) => {
    let params = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }
    
    const convert = () => {
        if(withTime){
            Object.assign(params, {
                hour: "2-digit",
                minute: "2-digit",
                hourCycle: 'h24'});
        }
        return (new Intl.DateTimeFormat("fa", params).format(date))
    }

    return (
        <span dir="ltr" className="text-xs sm:text-sm">
                {convert()}
        </span>
    );
}
 
export default ConvertDate;