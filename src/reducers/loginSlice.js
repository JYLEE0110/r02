import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../util/cookieUtil";


const loadCookie = () => {
    
    const loginObj = getCookie("login")

    console.log("login..........obj.........")
    console.log(loginObj)

    if(!loginObj){
        return initState
    }

    return loginObj


}

const initState = {
    email: '',
    signed: false
}

const loginSlice = createSlice({
    name : 'loginSlice',
    initialState: loadCookie(),
    reducers: {
        requestLogin: (state, param) => {
            const payload = param.payload
            console.log("requestLogin", payload)
            const loginObj = {email: payload.email, signed:true}

            // 쿠키는 문자열 이므로 stringify로 객체를 문자열로 변환
            setCookie("login",JSON.stringify(loginObj), 1)

            return loginObj
        }
    }
})

// 외부에서 사용
export const {requestLogin} = loginSlice.actions

// stroe에 등록
export default loginSlice.reducer