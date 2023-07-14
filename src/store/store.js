import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../reducers/countSlice";
import todoSlice from "../reducers/todoSlice";
import loginSlice from "../reducers/loginSlice";

// 함수 => 결과물이 Store
export default configureStore({

    reducer : {
        counter: countSlice,
        todo : todoSlice,
        login : loginSlice
    }
})