
import CountButtons from "../components/counter/CountButtons";
import CountDisplay from "../components/counter/CountDisplay";
import TodoInput from "../components/todo/TodoInput";
import useCustomLogin from "../hooks/useCustomLogin";
import BasicLayout from "../layouts/BasicLayout";


const AboutPage = () => {


    // 로그인 여부 페이지이동 커스텀 훅 추가
    const{loginInfo} = useCustomLogin()

    return ( 

        <BasicLayout>
            <h2>About Page</h2>

            <TodoInput></TodoInput>

            <CountDisplay></CountDisplay>
            <CountButtons></CountButtons>
        </BasicLayout>
     );
}
 
export default AboutPage;