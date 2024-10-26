/** @format */

import { useQuery } from "@tanstack/react-query";
import { getCurrntUser } from "../../services/apiAuth";

// get the current user and store it to the cache
export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrntUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
