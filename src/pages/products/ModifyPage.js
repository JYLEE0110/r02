import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ModifyComponent from "../../components/products/ModifyComponent";

const ModifyPage = () => {
    

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