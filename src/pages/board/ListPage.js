import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import ListComponent from "../../components/board/ListComponent";
import ListSearchComponent from "../../components/board/ListSearchComponent";
import useQueryObj from "../../hooks/useQueryObj";

const ListPage = () => {

  console.log("List Page....................................")

  // 필요한 것만  => 객체
  const {queryObj, setSearch, moveRead} = useQueryObj();

  console.log(useQueryObj())

  const movePage = (num) => {

    console.log("NUM------------" + num)
    queryObj.page = num
    setSearch({ ...queryObj })
  }

  // 검색 시
  const moveSearch = (type, keyword) => {

    // 검색 후 page = 1
    queryObj.page = 1
    queryObj.type = type
    queryObj.keyword = keyword

    setSearch({ ...queryObj })
  }

  return (

    <div>
      Board List Page
      <ListSearchComponent queryObj={queryObj} moveSearch={moveSearch}></ListSearchComponent>
      <ListComponent queryObj={queryObj} movePage={movePage} moveRead={moveRead} ></ListComponent>
    </div>

  );
}

export default ListPage;