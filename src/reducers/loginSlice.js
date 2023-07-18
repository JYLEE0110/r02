import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil";
import { postLogin } from "../api/memberAPI";


const loadCookie = () => {

    const loginObj = getCookie("login")

    console.log("login..........obj.........")
    console.log(loginObj)

    if (!loginObj) {
        return initState
    }

    return loginObj

}

const initState = {
    email: '',
    nickname: '',
    admin: false,
    loading: false,
    // 에러 메세지
    errorMsg: null
}

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: loadCookie(),
    reducers: {
        requestLogin: (state, action) => {
            const payload = action.payload
            console.log("requestLogin", payload)

            // 쿠키는 문자열 이므로 stringify로 객체를 문자열로 변환
            setCookie("login", JSON.stringify(payload), 1)

            return payload
        },

        requestLogout: (state) => {
            // state 에있는 내용을 clean / main페이지로 이동
            removeCookie('login');

            return initState

        }

    },
    extraReducers: (builder) => {
        // return을 하지않아도 된다.

        builder.addCase(postLoginThunk.fulfilled, (state, action) => {

            // action payload => 서버에서 보내온 데이터
            console.log("fulfilled", action.payload)
            const { email, nickname, admin, errorMsg } = action.payload

            if (errorMsg) {
                state.errorMsg = errorMsg

                return
            }

            state.email = email
            state.nickname = nickname
            state.admin = admin
            state.loading = false

            // 쿠키는 문자열 이므로 stringify로 객체를 문자열로 변환
            setCookie("login", JSON.stringify(action.payload), 1)
        })

            .addCase(postLoginThunk.pending, (state, aciton) => {
                console.log("pending")
                state.loading = true
            })

            .addCase(postLoginThunk.rejected, (state, action) => {
                console.log("rejected")
            })

    }
})

// 외부에서 사용
export const {requestLogout} = loginSlice.actions
export const { requestLogin } = loginSlice.actions

// 함수 안에서 비동기 호출 파라미터가 있으므로 람다식으로 처리
export const postLoginThunk =
    // param => API의 파라미터 값
    createAsyncThunk('postLoginThunk', (params) => {
        return postLogin(params)
    })

// stroe에 등록
export default loginSlice.reducer