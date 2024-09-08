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
      invalidatesTags:["booking" , "bike"]
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
    getOwnBookings: builder.query({
      query: () => {
        return {
          url: "/rentals/me",
          method: "GET",
        };
      },
      providesTags : ["booking" , "bike"]
    }),
    returnBike: builder.mutation({
      query: (data) => {
        return {
          url: `/rentals/${data?.id}/return`,
          method: "PUT",
          body: data?.rental,
        };
      },
      invalidatesTags:['booking' , 'bike']
    }),
    updateSingleBooking: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/rentals/${data?.id}`,
          method: "PATCH",
          body: data?.rental,
        };
      },
      invalidatesTags:['booking' , 'bike']
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetBookingsQuery,
  useReturnBikeMutation,
  useGetOwnBookingsQuery,
  useUpdateSingleBookingMutation
} = bookingAPi;
