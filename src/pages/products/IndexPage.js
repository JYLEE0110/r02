import { Link, Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
    return (

        <BasicLayout>
            <div className="mt-4 p-4 bg-gray-50 text-2xl text-black flex justify-center">
                <div className="underline font-extrabold m-2 p-2">List</div>
                <div className="underline font-extrabold m-2 p-2">
                    {/* 상대 경로이므로 products를 물고간다. */}
                    <Link to={'register'}>Register</Link>
                </div>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
        </BasicLayout>

    );
}

export default IndexPage;