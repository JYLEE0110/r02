import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAccessToken, getUserEmail } from "../../api/kakaoAPI";

const KakaoRedirectPage = () => {

    // SearchParma 배열의 첫번째는 읽을때 두번째는 세팅
    const [searchParams] = useSearchParams()

    // 카카오 로그인 후 /member/kakao?code= 쿼리스트링을 붙은 code의 값을 추출
    const authCode = searchParams.get('code')

    useEffect(() => {

        getAccessToken(authCode)
            .then(accessToken => {
                console.log(accessToken)
                getUserEmail(accessToken).then(email => {
                    console.log("EMAIL:",email )
                })
            }
            )

    }, [authCode])

    return (
        <div>
            {authCode}
           
        </div>
    );
}

export default KakaoRedirectPage;