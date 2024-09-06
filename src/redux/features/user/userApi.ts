import baseApi from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
      query: (data) => {
        return {
          url: "/users/me",
          method: "PUT",
          body: data,
        };
      },
    }),
    getProfile: builder.query({
      query: () => {
        return {
          url: "/users/me",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = userApi;
