import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";



 export default function TodoForm(
//    { todo, setTodo, addTodo, updateTodo }: {
//     todo: { id: string; title: string };
//     setTodo: (todo: { id: string; title: string }) => void;
//     addTodo: (todo: { id: string; title: string }) => void;
//     updateTodo: (todo: { id: string; title: string }) => void;
//   }
    ) {

    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
      



    return (
      <li className="list-group-item">

        <button 
            //onClick={() => addTodo(todo)}
            onClick={() => dispatch(addTodo(todo))}
            id="wd-add-todo-click"
            className="btn btn-success btn-md me-1 m-1 float-end"> 
            Add
            </button>

        <button 
            //onClick={() => updateTodo(todo)}
            onClick={() => dispatch(updateTodo(todo))}
            id="wd-update-todo-click"
            className="btn btn-warning btn-md me-1 m-1 float-end"> 
            Update
            </button>

        <input 
            className="form-control m-2"
            style={{ width: 'auto', fontSize: '1.1rem' }}
            value={todo.title}
            //onChange={ (e) => setTodo({ ...todo, title: e.target.value }) 
            onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value }))
        }/>

      </li>
    );
  }
  