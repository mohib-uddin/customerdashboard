import TodoService from "@/services/todo.service";
import {useRouter} from "next/navigation";
const useTodo=(todoItem)=>{
    const accessToken=sessionStorage.getItem('token');
    const router=useRouter();
    const {useFetchTodo}=TodoService();
    const {data,isError}=useFetchTodo(accessToken);
    if(isError){
        router.push('/auth/login');
    }
    data&&console.log(data)
    const status=data&&data[todoItem]
    return{
       status
    }


}

export default useTodo;
