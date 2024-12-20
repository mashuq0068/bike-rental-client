import ContactUs from "../../components/Home/ContactUs";
import Featured from "../../components/Home/Featured";
import HeroSection from "../../components/Home/HeroSection";
import Testimonials from "../../components/Home/Testimonials";
import WhyChooseUs from "../../components/Home/WhyChooseus";
import ChooseBike from "../../components/Home/ChooseBike";
import HowItWorks from "../../components/Home/HowItWorks";


const Home = () => {
  return (
    <div className="lg:space-y-28 space-y-16">
      <HeroSection />
      <section className="">
        <ChooseBike />
      </section>
      <section className="container">
        <Featured />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <HowItWorks/>
      </section>
      <section>
        <ContactUs/>
      </section>
    </div>
  );
};

export default Home;
