import Featured from "../../components/Home/Featured";
import HeroSection from "../../components/Home/HeroSection";

const Home = () => {
  return (
    <div className="lg:space-y-28 space-y-16 bg-gray-200">
      <HeroSection />
      <section className="container">
      <Featured />
      </section>
    </div>
  );
};

export default Home;
