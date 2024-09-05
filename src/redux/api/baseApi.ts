/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery, BaseQueryApi, BaseQueryFn, FetchArgs, DefinitionType } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { logout } from "../features/auth/authSlice";

// base query
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  // credentials: "include",
  prepareHeaders: (headers) => {
    const token = Cookies.get("token");
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
});

const customBaseQuery: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  const result = await baseQuery(args, api, extraOptions);
  const errorMessage = (result.error?.data as { message?: string })?.message;
  if (
    result.error?.status === 401 ||
    result.error?.status === 403 ||
   errorMessage === "JWT expired"
  ) {
    api.dispatch(logout());
  }
  return result;
};

// base api
const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
});

export default baseApi;
