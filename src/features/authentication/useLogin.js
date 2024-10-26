/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Login as LoginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  // const querClient = useQueryClient();
  const navigate = useNavigate();
  // useMutation to handle this login (cuz sth changes on the server(a user get authenicated) )
  const { mutate: Login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => LoginApi({ email, password }),

    // user id the data that recieve from the function
    onSuccess: (user) => {
      // take the newly logged in user and manully add them to te react query cache
      // querClient.setQueryData(["user"], user.user);
      // log new user to the console
      console.log(user);
      //if login was successful then navigate to the dashboard
      navigate("/dashboard", { replace: true });
    },
    // recieve the error object wich will be whatever error is returned from mutationFn (error.message from apiAuth)
    onError: (err) => {
      console.log("ERROR", err);
      toast.error(" incorrect Email or password  ");
    },
  });

  return { Login, isLoading };
}
