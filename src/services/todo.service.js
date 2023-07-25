import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axiosInstance from "@/utils/config/axios-instance";
import createAxiosInstance from "@/utils/config/axios-instance";

const TodoService = () => {
    const useFetchTodo = (accessToken) => {
        function fetchTodo(){
            return createAxiosInstance(accessToken)
                .get(`/users/todos`)
                .then((res) => res.data);
        }

        return useQuery({
            queryFn: fetchTodo,
            queryKey: [`todos`],
            retry: 0,
        });
    };


    return {
        useFetchTodo,
    };
};

export default TodoService;
