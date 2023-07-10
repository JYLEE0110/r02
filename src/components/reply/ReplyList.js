import { useEffect, useState } from "react";
import { getRepliesOfBoard } from "../../api/replyAPI";
import ListPageComponent from "../common/ListPageComponent";

// 게시물dto든 댓글이든 같음
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

const ReplyList = ({ bno, page, last, movePage, refresh, changeCurrent }) => {

    console.log("Reply List,,, bno" + bno)

    const [listData, setListData] = useState(initState)

    useEffect(() => {

        getRepliesOfBoard(bno, page, last).then(data => {
            console.log(data)
            setListData(data)
        })

        // movePage 시 page와 last의 상태가 변경될때
    }, [bno, page, last, refresh])

    return (

        <div>
            <div>
                Reply List
            </div>
            <div>
                <ul>
                    {listData.dtoList.map(reply => 
                    <li 
                    key={reply.rno}
                    // 값이 바뀌었을 수 도있어서 처리
                    onClick = {() => changeCurrent(reply.rno)}
                    >
                        {reply.rno}-{reply.replyText}
                    </li>)}
                </ul>
                <ListPageComponent {...listData} movePage={movePage}></ListPageComponent>
            </div>
        </div>

    );
}

export default ReplyList;