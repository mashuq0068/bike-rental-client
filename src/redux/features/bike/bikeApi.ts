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
      invalidatesTags:["bike"]
    }),
    getBikes: builder.query({
      query: () => {
        return {
          url: "/bikes",
          method: "GET",
        };
      },
      providesTags:["bike"]
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
      invalidatesTags:["bike"]
    }),
    deleteSingleBike: builder.mutation({
      query: (id) => {
        return {
          url: `/bikes/${id}`,
          method: "DELETE",
          
        };
      },
      invalidatesTags:["bike"]
    }),
   
  }),
});
export const {
  useGetBikesQuery,
  useGetSingleBikeQuery,
  useAddBikeMutation,
  useUpdateSingleBikeMutation,
  useDeleteSingleBikeMutation
} = bikeApi;
