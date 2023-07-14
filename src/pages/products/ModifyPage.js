import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ModifyComponent from "../../components/products/ModifyComponent";
import useCustomLogin from "../../hooks/useCustomLogin";

const ModifyPage = () => {


    // 로그인 여부 페이지이동 커스텀 훅 추가
    // 커스텀 훅에 파라미터로 함수 전달 (파라미터가 커스텀 훅에 navigate)
    const { loginInfo } = useCustomLogin((nav) => {
        nav('../list')
        console.log("function.......")
    })

    const { queryObj, moveRead, moveList, moveModify } = useQueryObj();
    // router 설정에 path: "read/:bno"로 처리해서 bno값을 가져오려고 => 객체라 구조분해 할당
    const { pno } = useParams()

    return (

        <div>
            <div>modify Page {pno}</div>
            <ModifyComponent pno={pno} moveList={moveList} moveRead={moveRead}></ModifyComponent>
        </div>

    );
}

export default ModifyPage;