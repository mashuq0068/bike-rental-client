// import baseApi from "../../api/baseApi";

// const userApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     createBooking: builder.mutation({
//       query: (rental) => {
//         return {
//           url: "/rentals",
//           method: "POST",
//           body: rental,
//         };
//       },
//     }),
//     getBookings: builder.query({
//       query: () => {
//         return {
//           url: "/rentals",
//           method: "GET",
//         };
//       },
//     }),
//     returnBike: builder.mutation({
//       query: (data) => {
//         return {
//           url: `/rentals/${data?.id}`,
//           method: "PUT",
//           body: data?.rental,
//         };
//       },
//     }),
//   }),
// });
