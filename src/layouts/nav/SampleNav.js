import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginNav from "./LoginNav";

const SampleNav = () => {

    const todoArr = useSelector(state => state.todo)
    
    return (


        /* a태그는 애플리케이션이 재실행 되어서 Link로 쓴다. */
        <div className="flex  justify-center m-6 p-4 text-black font-extrabold">
            <div className="m-4 text-4xl ">
                <Link to="/">Main</Link>
                <span className="bg-red-500 font-extrabold">{todoArr.length}</span>
            </div>
            <div className="m-4 text-4xl ">
                <Link to="/about">About</Link>
            </div>
            <div className="m-4 text-4xl ">
                <Link to="/products/list">Products</Link>
            </div>
            <div className="m-4 text-4xl ">
                <Link to="/board/list">Board</Link>
            </div>
            <div className="w-6">
                <LoginNav></LoginNav>
            </div>
        </div>

    );
}

export default SampleNav;