import { Link } from "react-router-dom";

const SampleNav = () => {
    return (

        <div className="flex  justify-center m-6 p-4 text-black font-extrabold">
            <div className="m-4 text-4xl ">
                <Link to="/">Main</Link>
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
        </div>

    );
}

export default SampleNav;