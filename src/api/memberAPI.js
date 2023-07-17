import axios from "axios"

export const postLogin = async(params) => {

    // async의 반환값은 무조건 promise이다.

    const res = await axios.post(`http://localhost:8080/api/member/login`,params)

    return res.data

}