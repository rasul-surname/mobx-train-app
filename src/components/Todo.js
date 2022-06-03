import {observer} from "mobx-react-lite";
import todo from '../store/todo';

const Todo = observer(() => {

    return (
        <div className="todoList">
            {todo.todos.map((elem) =>
                <div className="todo" key={elem.id}>
                    <input type="checkbox" checked={elem.completed} onChange={() => todo.completeTodo(elem.id)}/>
                    {elem.title}
                    <button onClick={() => todo.removeTodo(elem.id)}>X</button>
                </div>
            )}
        </div>
    )
});

export default Todo;