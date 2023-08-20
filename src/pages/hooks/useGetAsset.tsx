import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { 금융타입 } from "../../lib/types";
import { AxiosError } from "axios";
import { http } from "../../lib/utils/http";

export const useGetAsset = (
  options?: UseQueryOptions<금융타입, AxiosError, 금융타입, string[]>
) => useQuery(["api", "asset"], () => http.get<금융타입>("api/asset"), options);
