import CouponsAndDiscounts from "../../components/Home/CuponsAndDiscounts";
import Featured from "../../components/Home/Featured";
import HeroSection from "../../components/Home/HeroSection";
import Testimonials from "../../components/Home/Testimonials";
import WhyChooseUs from "../../components/Home/WhyChooseus";

const Home = () => {
  return (
    <div className="lg:space-y-28 space-y-16 bg-gray-200">
      <HeroSection />
      <section className="container">
        <Featured />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <section className="container">
        <Testimonials />
      </section>
      <section>
        <CouponsAndDiscounts />
      </section>
    </div>
  );
};

export default Home;
