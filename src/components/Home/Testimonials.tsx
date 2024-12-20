import Marquee from "react-fast-marquee";

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
    id: 4,
    name: "Sarah Connor",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    quote:
      "Fantastic service, amazing bikes, and super smooth experience overall.",
  },
  {
    id: 5,
    name: "Alex Johnson",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "Highly professional team and really easy to rent a bike. Loved it!",
  },
  {
    id: 6,
    name: "Emma Watson",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    quote:
      "The best bike rental service in town! I’ll definitely come back again.",
  },
];

const Testimonials = () => {
  return (
    <section className=" container">
      <div className=" mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 uppercase">
          What Our <span >Customers</span> Say
        </h2>

        {/* Marquee Section */}
        <Marquee
          pauseOnHover
          speed={70}
         
          gradient={false}
          className="flex "
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 mx-4 p-8 rounded-lg shadow-lg text-center flex-shrink-0 w-64"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <p className="text-md italic text-gray-700 mb-4">
                "{testimonial.quote}"
              </p>
              <h3 className="text-lg font-bold text-gray-900">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
