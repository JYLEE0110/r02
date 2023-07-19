import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/productAPI";
import { useEffect, useState } from "react";
import ListPageComponent from "../common/ListPageComponent";


const initState = {

    dtoList: [],
    end: 0,
    start: 0,
    next: false,
    prev: false,
    pageNums: [],
    page: 0,
    size: 0,
    requestDTO: null

}

const ListComponent = ({ queryObj, movePage, moveRead }) => {

    console.log("ListComponent........................1")

    const [listData, setListData] = useState(initState)

    useEffect(() => {

        console.log("List component...useEffect..................")

        getList(queryObj).then(data => {
            console.log(data)
            setListData(data)
        })

    }, [queryObj])

    return (

        <div>
            <div className="pl-5">
                <ul role="list" className="divide-y divide-gray-100 flex flex-wrap container justify-center">
                    {listData.dtoList.map(({ pno, pname, price, fname, reviewCnt, reviewAvg }) => (
                        <li key={pno} onClick={() => moveRead(pno)} className=" w-1/5 h-[300px] m-2 p-2 rounded-md shadow-lg bg-gray-100" >
                            <div >

                                <div className="text-white font-extrabold">
                                    <p className="text-xl font-semibold leading-6 text-gray-900 ">{pno}</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <img src={`http://localhost/s_${fname}`}></img>
                                </div>
                                <div>
                                    <p className="text-center text-gray-500">{pname} - {price}</p>
                                </div>
                                <div>
                                    <p className="text-center text-gray-500">리뷰 {reviewCnt} - {reviewAvg}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>


            </div>

            {/* ListPage에서 props로 받은 movePage를 다시 하위 컴포넌트인 PageComponent에도 전달 */}
            {/* PageResponseDTO(결과 값) => listData를 spread연산자로 내려줌 */}
            <ListPageComponent movePage={movePage} {...listData} ></ListPageComponent>

        </div>

    );
}

export default ListComponent;