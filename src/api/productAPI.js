
import { createSearchParams } from "react-router-dom";
import jwtAxios from "../util/jwtUtil";

export const getList = async(queryObj) => {

    // Json 데이터를 쿼리스트링으로 변경
    const queryString = createSearchParams(queryObj).toString()

    const res = await jwtAxios.get(`http://localhost:8080/api/products/list?${queryString}`);

    return res.data
}


export const postProduct = async (formData) => {

    let header = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }

    const res = await jwtAxios.post(`http://localhost:8080/api/products/`, formData, header)

    return res.data
}

export const getProduct = async(pno) => {

    const res = await jwtAxios.get(`http://localhost:8080/api/products/${pno}`)

    return res.data

}

export const deleteProduct = async(pno) => {

    const res = await jwtAxios.delete(`http://localhost:8080/api/products/${pno}`)

    return res.data

}

export const putProduct = async (formData) => {

    let header = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }

    const res = await jwtAxios.post(`http://localhost:8080/api/products/modify`, formData, header)

    return res.data
}

