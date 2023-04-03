import { useState } from "react";

const TodoCreate = ({createTodo}) => {
    const [title, setTitle]= useState("")
const handleSbmintAddTodo =(e)=>{
    
e.preventDefault();
  if(!title.trim()){
    
  return setTitle("")
  }
  createTodo(title);
   setTitle("")  //reinicia el forrmulario
};

    return(
    <form onSubmit={handleSbmintAddTodo} className=" dark:bg-gray-800 
    bg-white rounded-md overflow-hidden py-4 px-4  flex gap-4 items-center transition-all duration-1000">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input className=" dark:bg-gray-800  w-full text-gray-400 outline-none transition-all duration-1000"
           type="text" placeholder="create a new todo..."
           value={title}
           onChange={(e)=> setTitle(e.target.value)}
           />
     </form>

    ) 
};
export default TodoCreate;

