import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartNav from "./CartNav";
import { useEffect } from "react";
import { removeCookie } from "../../util/cookieUtil";
import { requestLogout } from "../../reducers/loginSlice";

const LoginNav = () => {

    const { email, nickname, loading } = useSelector(state => state.login)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log("LoginNav..", email, loading)

    const handleLogout = () => {

        dispatch(requestLogout())
        console.log('Logout===================')
        console.log(email)
        navigate(`/`)

    }


    // 이메일이 있을 시
    if (email !== '') {

        return (
            <div>
                <div>
                    {email}
                    <button onClick={handleLogout}>LOGOUT</button>
                </div>
                <CartNav></CartNav>
            </div>
        )

    }

    return (

        <div>
            <Link to="/member/login">LOGIN {email}sdf</Link>

        </div>

    );
}

export default LoginNav;