import { useSearchParams } from "react-router-dom";
import ListComponent from "../../components/board/ListComponent";


const checkNull = (obj) => {

    const result = {}
  
    // 객체 = in / 배열 = of
    // obj =>{page, size, type, keyword}
    for (const attr in obj) {
        // property(page, size, type, keyword) in obj
      const attrName = attr
      const attrValue = obj[attr]
  
      if( attrValue && attrValue !== 'null'){
        result[attrName] = attrValue
      }
    }
  
    return result
  }


const ListPage = () => {

    console.log("List Page....................................")

    // 쿼리스트링 처리
    const [search, setSearch] = useSearchParams()

    console.log(search)
    
    // || => 없으면 1
    const page = search.get("page") || 1
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")

    const queryObj = checkNull({page, size, type, keyword})

    console.log("queryObj : ",queryObj)

    const movePage = (num) => {

        console.log("NUM------------" + num)
        queryObj.page = num
        setSearch({...queryObj})
    }

    return (
        
        <div>
            Board List Page
            <ListComponent queryObj={queryObj} movePage={movePage}></ListComponent>
        </div>

     );
}
 
export default ListPage;