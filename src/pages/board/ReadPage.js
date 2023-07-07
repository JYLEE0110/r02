import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/board/read/ReadComponent";

const ReadPage = () => {
    
    const{queryObj, moveList} = useQueryObj();
    // router 설정에 path: "read/:bno"로 처리해서 bno값을 가져오려고 => 객체라 구조분해 할당
    const {bno} = useParams()

    console.log(bno)
    console.log(queryObj)


    return ( 
        
        <div>
            Board Page
            <ReadComponent bno={bno}></ReadComponent>
            <button onClick={(e) => moveList()}>move List</button>
        </div>
        
     );
}
 
export default ReadPage

;