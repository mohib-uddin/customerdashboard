import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axiosInstance from "@/utils/config/axios-instance";

const UserService = () => {
    const useFetchUser = () => {
        function fetchUser(){
            return axiosInstance
                .get(`/users`)
                .then((res) => res.data);
        }

        return useQuery({
            queryFn: fetchUser,
            queryKey: [`users`],
            retry: 0,
        });
    };


    return {
        useFetchUser,
    };
};

export default UserService;