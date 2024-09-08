import baseApi from "../../api/baseApi";

const bookingAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (rental) => {
        return {
          url: "/rentals",
          method: "POST",
          body: rental,
        };
      },
      invalidatesTags:["booking"]
    }),
    getBookings: builder.query({
      query: () => {
        return {
          url: "/rentals",
          method: "GET",
        };
      },
      providesTags : ["booking"]
    }),
    returnBike: builder.mutation({
      query: (data) => {
        return {
          url: `/rentals/${data?.id}/return`,
          method: "PUT",
          body: data?.rental,
        };
      },
      invalidatesTags:['booking']
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetBookingsQuery,
  useReturnBikeMutation,
} = bookingAPi;
