

import TodoItem from "./TodoItem";
// overflow-hidden  sirve para que no se desvorde el contenido de un contenedor  
const TodoList = ({ todos, removeTodo, updateTodo}) => {
    return(
        <div className="bg-white transition-all duration-1000
         dark:bg-gray-800 overflow-hidden rounded-t-md [&>article]:px-4 mt-8">

        {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
        
       )) }
        
        </div>
    )
};
export default TodoList;

