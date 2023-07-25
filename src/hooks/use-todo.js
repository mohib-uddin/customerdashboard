import TodoService from "@/services/todo.service";

const useTodo=(todoItem)=>{

    const {useFetchTodo}=TodoService();
    const {data}=useFetchTodo();
    data&&console.log(data)
    const status=data&&data[todoItem]
    return{
       status
    }


}

export default useTodo;
