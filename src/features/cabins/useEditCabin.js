/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

/** @format */
export function useEditCabin() {
  const queryClient = useQueryClient();

  //we're going to edit the cabin data
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("cabin successfully edited");
      // invalidate queries
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      //reset the table and close it
    },
    // handle Errors
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editCabin };
}
