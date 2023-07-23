import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axiosInstance from "@/utils/config/axios-instance";

const TodoService = () => {
    const useFetchTodo = () => {
        function fetchUser(){
            return axiosInstance
                .get(`/users/todo`)
                .then((res) => res.data);
        }

        return useQuery({
            queryFn: fetchUser,
            queryKey: [`todo`],
            retry: 0,
        });
    };


    return {
        useFetchTodo,
    };
};

export default TodoService;