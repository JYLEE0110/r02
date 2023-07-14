import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todoSlice",
    initialState: ['aaa','bbb'],
    reducers: {
        addTodo:(state, param) => {

            console.log("todo...",state)

            // spread로 state 다시 추가 후 새로운 payload추가
            return [...state, param.payload]

        }
    }
})

export const {addTodo} = todoSlice.actions

// 실제 외부에 노출
export default todoSlice.reducer