import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


// 로직을 재사용할때 커스텀 hook을 고려해서 사용한다.
// 함수를 전달받음
const useCustomLogin = (fn) => {

    // store에서 가져온 값
    const loginInfo = useSelector(state => state.login)

    const navigate = useNavigate()

    useEffect(() => {

        // 로그인 전 useCustomLogin()에 함수로 파라미터가 있을 시
        if (fn) {
            if (!loginInfo.email) {
                // navigate 전달
                // 수정페이지 로그인 여부 체크
                fn(navigate)
                return
            }
            //read 페이지 로그인 여부 체크
        }

        // signed가 바뀔떄 
        // 로그인이 안되었으면 로그인 페이지로 튕겨냄
        if (!loginInfo.email) {
            navigate("/member/login")
        }

    }, [loginInfo.email])

    // 객체로 반환하고 원하는 값만 
    return { loginInfo }
}

export default useCustomLogin