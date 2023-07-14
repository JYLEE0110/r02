import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginNav = () => {

    const { email, signed } = useSelector(state => state.login)

    console.log("LoginNav..", email, signed)

    if (signed) {

        return (
            <div>
                {email}
            </div>
        )

    }

    return (

        <div>
            <Link to="/member/login">LOGIN</Link>
        </div>

    );
}

export default LoginNav;