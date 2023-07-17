import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../../reducers/cartSlice";
import { useEffect } from "react";


const CartNav = () => {

    // email이 바뀌면 useSelector가 일어난다.
    const { email, nickname } = useSelector(state => state.login)

    const {items} = useSelector(state => state.cart)

    const dispatch = useDispatch()

    // 이메일이 바뀌었을때 useEffect => disPatch로 카트를 불러온다.
    useEffect(() => {

        if(!email){
            return;
        }
        dispatch(getCartThunk(email))

    },[email])

    return ( 

        <div className="text-4xl text-red-500">Cart{items.length}</div>

     );
}
 
export default CartNav;