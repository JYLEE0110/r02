import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/products/ReadComponent";

const ReadPage = () => {
    
    const{queryObj, moveRead ,moveList, moveModify} = useQueryObj();
    // router 설정에 path: "read/:bno"로 처리해서 bno값을 가져오려고 => 객체라 구조분해 할당
    const {pno} = useParams()

    console.log(pno)
    console.log(queryObj)
    
    return ( 

        <ReadComponent pno={pno} moveModify={moveModify} moveList={moveList}></ReadComponent>

     );
}
 
export default ReadPage


;