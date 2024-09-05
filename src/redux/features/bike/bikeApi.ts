import baseApi from "../../api/baseApi";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBike: builder.mutation({
      query: (bike) => {
        return {
          url: "/bikes",
          method: "POST",
          body: bike,
        };
      },
    }),
    getBikes: builder.query({
      query: () => {
        return {
          url: "/bikes",
          method: "GET",
        };
      },
    }),
    getSingleBike: builder.query({
      query: (id) => {
        return {
          url: `/bikes/${id}`,
          method: "GET",
        };
      },
    }),
    updateSingleBike: builder.mutation({
      query: (data) => {
        return {
          url: `/bikes/${data?.id}`,
          method: "PUT",
          body: data?.bike,
        };
      },
    }),
  }),
});
export const {
  useGetBikesQuery,
  useGetSingleBikeQuery,
  useAddBikeMutation,
  useUpdateSingleBikeMutation,
} = bikeApi;
