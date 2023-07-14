import { useState } from "react";
import { useDispatch } from "react-redux";
import { requestLogin } from "../../reducers/loginSlice";


const initState = {
    email: 'wndyd0110@naver.com',
    pw: '123456'
}

const LoginComponent = () => {
    
    const [loginInfo, setLoginInto] = useState({...initState})

    const dispatch = useDispatch()
    
    return ( 

        <div className="h-full bg-slate-100">
            <div>
                <label>Email</label>
                <input type='text' name="email" 
                value={loginInfo.email}
                onChange={()=>{}}
                ></input>
            </div>
            <div>
                <label>PassWord</label>
                <input type='password' name="pw" 
                value={loginInfo.pw}
                onChange={()=>{}}
                ></input>
            </div>
            <div>
                <button onClick={() => dispatch(requestLogin(loginInfo))}>LOGIN</button>
            </div>
        </div>

     );
}
 
export default LoginComponent;