import { useSelector } from "react-redux";

const TodoList = () => {
    
    // slice의 initialState의 값을 가지고 온다.
    const todoArr = useSelector(state => state.todo)

    console.log("todo List", todoArr)
    
    return ( 

        <div>
            <ul>
                {todoArr.map((ele, idx)=> <li key={idx}>{ele}</li>)}
            </ul>
        </div>

     );
}
 
export default TodoList;