import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const  initialStateTodo =[
  {id: 1, title: "Complete online  javascrip bluuweb curse", completed: true},
  {id: 2, title: "go to the gym", completed: false},
  {id: 3, title: "10 minutos meditacion", completed: false},
  {id: 4, title: "pic up grocerias", completed: true},
  {id: 5, title: "Complete todo app on frontend mentor", completed: false},

];

const App = ()=> {

const [todos, setTodos] = useState(initialStateTodo);
const createTodo = (title)=> {
  const newTodo ={
    id: Date.now(),
    title: title.trim(),
    completed: false,
  }
  setTodos([...todos, newTodo]);
};

const removeTodo=(id) =>{
  setTodos(todos.filter((todo)=> todo.id !== id));
  
  };

  const updateTodo =(id)=>{
setTodos(
  todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed}:todo))
};

  const computedItemsLeft = todos.filter((todo)=> !todo.completed).length;
  
 const clearCompleted =()=>{
 setTodos(todos.filter((todo)=>!todo.completed));

 }
  //filter
 const [filter, setFilter] = useState("all");
 const changeFilter =(filter)=> setFilter(filter);
 const filteredTodos = () =>{

  switch(filter){
    case "all":
      return todos;
    case "active":
        return todos.filter((todo)=> !todo.completed);
    case "completed":
      return todos.filter((todo)=> todo.completed);
        default:
        return todos;
  }
 }

return (
<div className="dark:bg-gray-900 bg-[url('./assets/images/bg-mobile-light.jpg')]
 bg-no-repeat bg-contain bg-gray-400 min-h-screen dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-1000">
      <Header/>

    <main className="container mx-auto px-4 mt-8">  
      <TodoCreate 
      createTodo={createTodo}/>

      <TodoList 
      todos={filteredTodos()} 
      removeTodo={removeTodo} 
      updateTodo={updateTodo}
      />
      <TodoComputed 
      computedItemsLeft={computedItemsLeft}
      clearCompleted={clearCompleted}
      />
      <TodoFilter changeFilter={changeFilter} filter={filter}/>
    </main>
     
     <footer className="text-center mt-8 dark:text-gray-400 ">drag and drop to reorder list </footer>

</div>
    );
};
export default App;
