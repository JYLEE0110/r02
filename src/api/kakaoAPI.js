import axios from "axios"


const REST_KEY = `f22967614a3ff3efdebdcd707623cd5e`
const REDIRECT_URI = `http://localhost:3000/member/kakao`

const AUTH_TOKEN_URL = `https://kauth.kakao.com/oauth/token`

// Access Token을 가져옴
// 인가코드를 받아서 body로 보냄
export const getAccessToken = async (authCode) => {
    const header = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        }
    }

    const params = {

        grant_type: `authorization_code`,
        client_id: REST_KEY,
        redirect_uri: REDIRECT_URI,
        code: authCode

    }

    // 응답 중에 AccessToken값 추출
    const res = await axios.post(AUTH_TOKEN_URL, params, header)

    const {access_token} = res.data

    return access_token

}

// 사용자 정보 가져오기
const KAKAO_USER = `https://kapi.kakao.com/v2/user/me`

export const getUserEmail = async(accessToken) => {

    const header = {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        }
    }

    const res = await axios.get(KAKAO_USER, header)

    const {kakao_account} = res.data

    console.log(kakao_account)
    
    return kakao_account.email

}