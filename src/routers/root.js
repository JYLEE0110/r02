import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ListPage from "../pages/board/ListPage";
import IndexPage from "../pages/board/IndexPage";

import { Suspense, lazy } from "react";
import LoadingPage from "../pages/LoadingPage";

const Loading = <LoadingPage></LoadingPage>
const Board_Index = lazy(() => import("../pages/board/IndexPage"))
const Board_List = lazy(() => import("../pages/board/ListPage"))
const Board_Read = lazy(() => import("../pages/board/ReadPage"))

const Products_Index = lazy(() => import("../pages/products/IndexPage"))
const Products_List = lazy(() => import("../pages/products/ListPage"))
const Products_Register = lazy(() => import("../pages/products/RegisterPage"))
const Products_Read = lazy(() => import("../pages/products/ReadPage"))
const Products_Modify = lazy(() => import("../pages/products/ModifyPage"))

const Member_Login = lazy(() => import("../pages/member/LoginPage"))

const router = createBrowserRouter([

    {
        path:"",
        element: <MainPage></MainPage>
    },
    {
        path:"about",
        element: <AboutPage></AboutPage>
    },
    {
        path:"member/login",
        element: <Suspense fallback={Loading}><Member_Login/></Suspense>,
    },
    {
        /* React는 페이지를 한번에 다 가져오는데 부하를 줄이기 위해 필요할때 가져오게 suspence설정을 해준다. */
        /* 가져올때 시간이 걸리므로 fallback 페이지 보여줌 */
        path:"board",
        element : <Suspense fallback={Loading}><Board_Index></Board_Index></Suspense>,
        children: [

            {
                path: "list",
                element: <Suspense fallback={Loading}><Board_List></Board_List></Suspense>
            },
            {
                path: "read/:bno",
                element: <Suspense fallback={Loading}><Board_Read></Board_Read></Suspense>
            }
        ]
    },

    {
        path:"products",
        element : <Suspense fallback={Loading}><Products_Index></Products_Index></Suspense>,
        children: [

            {
                path: "list",
                element: <Suspense fallback={Loading}><Products_List></Products_List></Suspense>
            },
            {
                path: "register",
                element: <Suspense fallback={Loading}><Products_Register></Products_Register></Suspense>
            },
            {
                path: "read/:pno",
                element: <Suspense fallback={Loading}><Products_Read></Products_Read></Suspense>
            },
            {
                path: "modify/:pno",
                element: <Suspense fallback={Loading}><Products_Modify></Products_Modify></Suspense>
            }
        ]
    }

])

export default router;