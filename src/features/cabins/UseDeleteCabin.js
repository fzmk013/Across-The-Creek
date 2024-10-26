/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

/** @format */
export function useDeleteCabin() {
  //  get access to our query client instance (useQueryClient hook)
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    //for deleting cabins

    mutationFn: deleteCabinApi,
    // TELL REACT QUERY WHAT TO DO WHEN MUTATION WAS SUCCESSFUL
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        //refetch and reload automaticaly
        queryKey: ["cabins"],
      });
    },
    // recieves the error that was thrown inside mutationFn
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
