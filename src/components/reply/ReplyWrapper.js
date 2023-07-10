import { useEffect, useState } from "react"
import ReplyList from "./ReplyList"
import ReplyInput from "./ReplyInput"
import ReplyRead from "./ReplyRead"

/* 상태유지 */
const initState = {
    bno : 0,
    page : 1,
    last : true,

    refresh : false,
    current : 0
}

const ReplyWrapper = ({bno}) => {
    const [data, setData] = useState(initState)
    
    // props의 상태를 유지할떄 useEffect => bno가 바뀔때 
    useEffect(() => {

        data.bno = bno
        data.last = true
        data.page = 1
        setData({...data})

    },[bno])

    // 조회 시 => Read
    const changeCurrent = (rno) => {

        data.current = rno
        setData({...data})

    }

    // 페이지가 변경되었을때 처리 함수
    const movePage = (num) => {

        console.log(num)

        data.page = num
        data.last = false
        data.refresh = !data.refresh
        setData({...data})
    }

    // 댓글 등록 후 refresh
    const refreshLast = () => {
        data.last = true
        data.refresh = !data.refresh
        setData({...data})
    }

    const cancelRead = () => {
        data.current = 0
        setData({...data})
    }

    // 댓글 삭제 시
    const refreshPage = (hide) => {
        data.refresh = !data.refresh

        if(hide){
            data.current = 0
        }

        setData({...data})
    }

    return ( 

        <div>
            <ReplyInput bno={bno} refreshLast={refreshLast}></ReplyInput>
            {data.current !== 0 ? <ReplyRead 
            rno={data.current} 
            cancelRead={cancelRead} 
            refreshPage={refreshPage}></ReplyRead> : <></>}
            <ReplyList {...data} movePage={movePage} changeCurrent={changeCurrent}></ReplyList>
        </div>

     );
}
 
export default ReplyWrapper;