import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";
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

            <div className ="pl-5">
                {/* <ul>
                    {listData.dtoList.map(({ bno, title, writer, replyCount }) =>
                        <li
                        key={bno}
                        onClick={() => moveRead(bno)}
                        >{bno}-{title}-{writer}-{replyCount}
                        </li>)
                    }
                </ul> */}



                <ul role="list" className="divide-y divide-gray-100">
                    {listData.dtoList.map(({ bno, title, writer, regDate, replyCount }) => (
                        <li key={bno} onClick={() => moveRead(bno)} className="flex justify-between gap-x-6 py-2" >
                            <div className="flex gap-x-4">

                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900 ">{writer}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{title}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{regDate}</p>
                                </div>
                            </div>
                            <div className="sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">{regDate}</p>
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