import TodoList from "../components/todo/TodoList";
import BasicLayout from "../layouts/BasicLayout";

const MainPage = () => {

    console.log("Main Page")

    return ( 

        <BasicLayout>
            <h2>Main Page</h2>
            <TodoList></TodoList>
        </BasicLayout>

     );
}
 
export default MainPage;