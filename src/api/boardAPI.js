import axios from "axios";
import { createSearchParams } from "react-router-dom";

export const getList = async(queryObj) => {

    // Json 데이터를 쿼리스트링으로 변경
    const queryString = createSearchParams(queryObj).toString()

    const res = await axios.get(`http://localhost:8080/api/board/list?${queryString}`);

    return res.data
}

export const getOne = async (bno) => {

    const res = await axios.get(`http://localhost:8080/api/board/${bno}`);

    return res.data
}

