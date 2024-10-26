/** @format */

import { useQueries, useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  // react query to get the data
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    //uniquely identify this query in our cache
    queryKey: ["settings"],
    // needs to be an functoin that returns a promise or in other words , an async functoin
    queryFn: getSettings,
  });

  return { isLoading, error, settings };
}
