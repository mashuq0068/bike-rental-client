import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// base query
const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:5000/api" });

// base api
const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
export default baseApi;
