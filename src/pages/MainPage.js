import TodoList from "../components/todo/TodoList";
import BasicLayout from "../layouts/BasicLayout";

const MainPage = () => {

    console.log("Main Page")

    return ( 

        <BasicLayout>
            <h2>Main Page</h2>
            <TodoList></TodoList>
            <div>
                <div></div>                
                <div></div>                
                <div></div>                
                <div></div>                
            </div>
        </BasicLayout>

     );
}
 
export default MainPage;