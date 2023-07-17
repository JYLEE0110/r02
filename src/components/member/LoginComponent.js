import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginThunk, requestLogin } from "../../reducers/loginSlice";


const initState = {
    email: 'user00@aaa.com',
    pw: '1111'
}

const LoginComponent = () => {

    const loginState = useSelector(state => state.login)

    const [loginInfo, setLoginInto] = useState({ ...initState })

    const dispatch = useDispatch()

    // 에러 메세지 추출
    const errorMsg = loginState.errorMsg

    return (

        <div className="h-full bg-slate-100">
            {/* 모달로 처리 해야한다. 동작중에 버튼을 계속 못 누르게 처리 */}
            <div className="text-3xl bg-red-500">
                Loading : {loginState.loading ? '로그인 중' : ''} 
            </div>

            {errorMsg ? <div className="text-3xl bg-red-500">이메일과 패스워드를 다시 확인해 주세요</div> : <></>}

            <div>
                <label>Email</label>
                <input type='text' name="email"
                    value={loginInfo.email}
                    onChange={() => { }}
                ></input>
            </div>
            <div>
                <label>PassWord</label>
                <input type='password' name="pw"
                    value={loginInfo.pw}
                    onChange={() => { }}
                ></input>
            </div>
            <div>
                <button onClick={() => dispatch(postLoginThunk(loginInfo))}>LOGIN</button>
            </div>
        </div>

    );
}

export default LoginComponent;