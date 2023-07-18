import { Link } from "react-router-dom";

// 로그인 버튼누를시 쿼리스트링으로 붙여야한다.
const REST_KEY = `f22967614a3ff3efdebdcd707623cd5e`
const REDIRECT_URI = `http://localhost:3000/member/kakao`

// 로그인버튼 누를 시 호출되는 URL
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

const KakaoLoginComponent = () => {
    return ( 

        <div className="text-3xl ">
            <Link to={kakaoURL}>KAKAO LOGIN</Link>
        </div>

     );
}
 
export default KakaoLoginComponent;