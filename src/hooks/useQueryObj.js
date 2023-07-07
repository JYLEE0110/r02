
/* 단순 클로져일 뿐이다. */

import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"


const checkNull = (obj) => {

    const result = {}

    // 객체 = in / 배열 = of
    // obj =>{page, size, type, keyword}
    for (const attr in obj) {
        // property(page, size, type, keyword) in obj
        const attrName = attr
        const attrValue = obj[attr]

        if (attrValue && attrValue !== 'null') {
            result[attrName] = attrValue
        }
    }

    return result
}

const useQueryObj = () => {

    // 쿼리스트링 처리
    // useSearchParams은 반환하는게 queryObj를 반환
    const [search, setSearch] = useSearchParams()

    // Hook은 함수 내부에서 선언 X
    const navigate = useNavigate()

    console.log(search)
    // || => 없으면 1
    const page = search.get("page") || 1
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")

    const queryObj = checkNull({ page, size, type, keyword })

    const moveList = () => {
        const queryString = createSearchParams(queryObj).toString()

        // board / product 등이 들어올 수 있으니 ../로 처리
        navigate(`../list?${queryString}`)
    }
    // readPage이동 시
    const moveRead = (bno) => {

        console.log("moveRead: " + bno)

        // read 페이지 이동 시 queryString이 따라 붙어야한다. 
        const queryString = createSearchParams(queryObj).toString()

        // board / product 등이 들어올 수 있으니 ../로 처리
        navigate(`../read/${bno}?${queryString}`)

    }


    // queryObj : queryObj....
    return {queryObj, setSearch, moveRead, moveList}

}

export default useQueryObj