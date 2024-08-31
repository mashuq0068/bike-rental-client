

// Sample data for team members
const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    bio: "John is a visionary leader with over 20 years of experience in the industry. He is passionate about driving innovation and leading the company to new heights.",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.vQLd_ru4egy6PM0nf56b3QHaE7&pid=Api&P=0&h=220",
  },
  {
    name: "Jane Smith",
    position: "CTO",
    bio: "Jane is a tech enthusiast with a background in software development and systems architecture. She oversees our tech initiatives and ensures cutting-edge solutions.",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.mhk6FKSa94s0DCCP14jAqQAAAA&pid=Api&P=0&h=220",
  },
  {
    name: "Emily Johnson",
    position: "CFO",
    bio: "Emily manages our financial operations and strategy. With her extensive expertise in finance, she ensures the company’s financial health and growth.",
    image:
      "https://thumbs.dreamstime.com/b/smiling-young-caucasian-businessman-glasses-stand-modern-office-show-confidence-motivation-work-happy-millennial-178916678.jpg",
  },
];

const AboutUsSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Mission Statement Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our platform aims to revolutionize bike rentals with innovative
            solutions that enhance convenience and customer satisfaction. We
            believe in providing the best service with a focus on
            sustainability, affordability, and community.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-700 text-center mb-12">
            Meet Our <span className="text-red-500">Team</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={`${member.name}'s photo`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <h4 className="text-md font-semibold text-gray-600 mb-4">
                    {member.position}
                  </h4>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* History & Milestones Section */}
        <section className="bg-white py-16 px-6 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-700 text-center mb-12">
            Our <span className="text-red-500">History</span> & Milestones
          </h2>
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-full">
                <span className="text-xl">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Founded in 2020
                </h3>
                <p className="text-gray-600 mt-2">
                  We started with a mission to make bike rentals more accessible
                  and convenient for everyone. Our journey began with a small
                  team and a big vision.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-full">
                <span className="text-xl">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Expanded Nationwide
                </h3>
                <p className="text-gray-600 mt-2">
                  Within two years, we expanded our operations to major cities
                  across the country, offering a wide range of bike models and
                  rental options.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-full">
                <span className="text-xl">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Awarded for Excellence
                </h3>
                <p className="text-gray-600 mt-2">
                  Our commitment to quality and customer satisfaction earned us
                  industry awards and recognition for excellence in bike rental
                  services.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUsSection;
