import { useDispatch } from "react-redux";
import { dec, inc } from "../../reducers/countSlice";

const CountButtons = () => {
    
    const dispatch = useDispatch()

    const handleClickInc = () => {
        dispatch(inc(2))
    }

    const handleClickdec = () => {
        dispatch(dec(2))
    }
    
    return ( 
        <div>
            <button onClick={handleClickInc}>INC</button>
            <button onClick={handleClickdec}>DEC</button>
        </div>
     );
}
 
export default CountButtons;