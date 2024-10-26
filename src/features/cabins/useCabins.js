/** @format */

import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    // uniquely identify this data
    queryKey: ["cabins"],
    // resbonsible for actually querying
    queryFn: getCabins,
  });

  return { isLoading, error, cabins };
}
