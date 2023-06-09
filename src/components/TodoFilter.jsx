const TodoFilter = ({changeFilter, filter}) => {
    return(
        <section className=" container mx-auto mt-8 transition-all duration-1000"> 
        <div className="bg-white mt-8 px-4 py-4 flex justify-center gap-4 rounded-md dark:bg-gray-800 transition-all duration-1000 ">

        <button className={`${filter=== "all"
        ? "text-blue-600 hover:text-gray-400" :"text-gray-500 hover:text-blue-600"}`} 
        onClick={()=> changeFilter("all")}>
          All
        </button>

        <button className={`${filter=== "active"
        ? "text-blue-600 hover:text-gray-400" :"text-gray-500 hover:text-blue-600"}`} 
         onClick={()=> changeFilter("active")}>
          Active
        </button>

        <button className={`${filter=== "completed"
        ? "text-blue-600 hover:text-gray-400" :"text-gray-500 hover:text-blue-600"}`}
        onClick={()=> changeFilter("completed")}>
          Completed
        </button>

        </div>
      </section>
    )
  
};
export default TodoFilter;

