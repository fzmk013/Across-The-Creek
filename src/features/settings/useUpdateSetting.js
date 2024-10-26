/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

/** @format */
export function useUpdateSetting() {
  const queryClient = useQueryClient();

  //we're going to edit the cabin data
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting successfully edited");
      // invalidate queries
      // The invalidateQueries method can be used to invalidate and refetch single or multiple queries in the cache based on their query keys or any other functionally accessible property/state of the query
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      //reset the table and close it
    },
    // handle Errors
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateSetting };
}
