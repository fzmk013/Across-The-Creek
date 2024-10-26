/** @format */

import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
//Toast notifications are a type of UI element commonly used in app development
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate= useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUpApi,
    // recieve newly created user as data
    onSuccess: (user) => {
      console.log(user);
      toast.success("Account successfully created! ");
      navigate("/login");
    },
    onError: (err) => {
      console.log(err);
      console.log(err.message);
      toast.error(err.message);
    }
  });

  return { signup, isLoading };
}
