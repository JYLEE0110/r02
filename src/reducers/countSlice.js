import { createSlice } from "@reduxjs/toolkit";


// Store에 연결 중간 역할 createSlice로 외부에서 호출 할 수 있게 
const countSlice = createSlice({

    name: "CountSlice",
    initialState: {
        num: 5
    },
    // 비동기 통신은 extraReducer
    reducers: {
        // 2번째 parameter는 payload이고 여러개 보내고 싶으면 객체형식으로 보내야한다.
        inc: (state, param) => {
            console.log(state)
            console.log(param)
            return {num: state.num + param.payload}
        },
        dec: (state, param) => {
            console.log(state)
            console.log(param)
            return {num: state.num - param.payload}
        }
    }
})

export const {inc, dec} = countSlice.actions

// 실제 외부에 노출
export default countSlice.reducer