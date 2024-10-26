/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  // get queryclient for invalidate the queries
  const queryClient = useQueryClient();
  // we're going to change the cabindata
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      // invalidate queries
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      //reset the table and close it
    },
    // handle Errors
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
