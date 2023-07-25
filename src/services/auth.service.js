import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import instance from "@/utils/config/axios-instance";
const AuthService = () => {

    //Admin Log In
    const useHandleLoginInService = () => {
        function handleLogInRequest(
            data
        ) {
            return instance.post(`/admin/login`, {email:data.email,password:data.password}).then((res) => res.data);
        }

        const onSuccess = (response) => {
            localStorage.setItem('user',response)
            console.log(response)
        };
        const onError = (error) => {
            toast.error(viewError(error.response.data.message));
        };

        return useMutation({
            mutationFn: handleLogInRequest,
            onError,
            onSuccess,
            retry: 0,
        });
    };

    //Create Admin

    //Get All Admins


    //User Log Out
    // const useHandleLogOutService = () => {
    //     const onSuccess = () => {
    //         tokenService.clearStorage();
    //         toast.success("Logout Successfully");
    //         navigate("/login");
    //     };
    //     const onError = (error: errorType) => {
    //         toast.error(viewError(error.response.data.message));
    //     };
    //
    //     const handleLogoutRequest = () => {
    //         return axios.post(`/auth/logout`);
    //     };
    //
    //     return useMutation({
    //         mutationFn: handleLogoutRequest,
    //         onError,
    //         onSuccess,
    //         retry: 0,
    //     });
    // };

    return {
        useHandleLoginInService,
        // useHandleLogOutService,
    };
};

export default AuthService;
