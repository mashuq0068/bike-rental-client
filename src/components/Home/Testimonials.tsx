
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "This bike rental service is amazing! I had the best experience ever.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The bikes are top-notch, and the customer service is unbeatable.",
  },
  {
    id: 3,
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    quote:
      "I loved the ease of booking and the quality of the bikes. Highly recommend!",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The bikes are top-notch, and the customer service is unbeatable.",
  },
  {
    id: 3,
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    quote:
      "I loved the ease of booking and the quality of the bikes. Highly recommend!",
  },
];

const Testimonials = () => {
  return (
    <section className="">
      <div className=" mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-700">
          What Our <span className="text-red-500">Customers</span> Say
        </h2>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 2, // 2 slides per view on tablets
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3, // 3 slides per view on larger screens
            },
          
          }}
          loop={true}
          className=" mx-auto"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md"
                />
                <p className="text-lg italic text-gray-600 mb-4">
                  "{testimonial.quote}"
                </p>
                <h3 className="text-xl font-bold text-gray-800">
                  {testimonial.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
