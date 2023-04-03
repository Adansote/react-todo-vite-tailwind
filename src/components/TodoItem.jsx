import IconCross from "./icons/IconCross"
import IconCheck from "./icons/IconCheck";
// este item representa cada caja de tareas
//modo dark con clase dark este modo solo se visualiza siempre y cuando el sistema operativo este configurado
//para el modo manual activando laluna se necesita  darkMode: 'class' y pegarlo en tailwind.config
//en modo obcuro y tambien se puede desde inspeccionar 
const TodoItem = ({ todo, removeTodo, updateTodo }) => {

    const {id, title, completed} = todo;


    return(
        <article className="flex gap-4 py-4 border-b-gray-400 border-b ">

        <button 
        className = {`h-5 w-5 flex-none rounded-full border-2 ${
        completed
        ? "grid   place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        : "inline-block"
        } ` }
        onClick={()=> updateTodo(id)}
        > 

        {/*ojo con el acomodo de la linea puede marcar error */}

        {completed && <IconCheck/> }
              
        </button>
        <p className={`grow text-gray-600 dark:text-gray-400 transition-all duration-1000 ${completed && "line-through"}`}>
              {title}
        </p>
        <button className="flex-none " onClick={() => removeTodo(id)}>
               <IconCross/>
        </button>
      </article>
    
    )
  
};
export default TodoItem;
