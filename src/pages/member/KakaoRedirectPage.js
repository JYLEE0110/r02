import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAccessToken, getUserEmail } from "../../api/kakaoAPI";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { requestLogin } from "../../reducers/loginSlice";

const KakaoRedirectPage = () => {


    const { email, nickname, loading } = useSelector(state => state.login)

    // SearchParma 배열의 첫번째는 읽을때 두번째는 세팅
    const [searchParams] = useSearchParams()

    // 카카오 로그인 후 /member/kakao?code= 쿼리스트링을 붙은 code의 값을 추출
    const authCode = searchParams.get('code')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {

        axios.get(`http://localhost:8080/api/member/kakao?code=${authCode}`).then(res => {

            console.log(res.data)

            const memberInfo = res.data

            dispatch(requestLogin(memberInfo))

            console.log("sdfsdfsfsdfsdf",nickname)
            console.log("sdfsdfsfsdfsdf",email)

            // 소셜 로그인 시 DB에 회원이 이미있을때 메인페이지 
            // 소셜 로그인 시 DB에 회원이 없을때 nickname이 SOCIAL_MEMBER로 들어가게 설계하였으므로
            // 수정 페이지로 이동
            if (nickname === 'SOCIAL_MEMBER') {
                navigate(`/member/modify`)
            } else {

                navigate("/")
            }



        })



        // 서버에 보내려면 필요없는 코드
        // getAccessToken(authCode)
        //     .then(accessToken => {
        //         console.log(accessToken)
        //         getUserEmail(accessToken).then(email => {
        //             console.log("EMAIL:",email )
        //         })
        //     }
        //     )

    }, [authCode])

    return (
        <div>
            {authCode}

        </div>
    );
}

export default KakaoRedirectPage;