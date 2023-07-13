import { useEffect, useState } from "react";

const ListSearchComponent = ({ queryObj, moveSearch }) => {

    {/* props로 들어온애가 상태관리 할때 useEffect */ }

    console.log("SearchComponent---------------");
    console.log(queryObj)

    const[searchObj, setSearchObj] = useState({type:'', keyword:''})

    useEffect(() => {

        searchObj.type = queryObj.type || ''
        searchObj.keyword = queryObj.keyword || ''

        setSearchObj({...searchObj})

    },[queryObj])

    return (

        <div className="m-4 p-4 bg-gray-100 border-2">

            {/* QueryObject 필요함 */}
            <select 
            className="border-1 m-2 p-2"
            value={searchObj.type}
            onChange={e => {
                searchObj.type = e.target.value
                setSearchObj({...searchObj})
            }}
            >
                {/* option 변경될대 마다 onChange 사용 */}

                <option value={''}>---</option>
                <option value={'t'}>제목</option>
                <option value={'c'}>내용</option>
                <option value={'w'}>작성자</option>
                <option value={'tc'}>제목/내용</option>
                <option value={'tcw'}>제목/내용/작성자</option>
            </select>

            <input type='text'
                className="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value = {searchObj.keyword}
                onChange = {e => {
                    searchObj.keyword = e.target.value
                    setSearchObj({...searchObj})
                }}

            ></input>

            <button 
            className="border-2 m-2 p-2"
            onClick={e => moveSearch(searchObj.type, searchObj.keyword)}
            >
                SEARCH
            </button>

        </div>

    );
}

export default ListSearchComponent;