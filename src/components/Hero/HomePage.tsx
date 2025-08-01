import Navbar from "./Navbar";
import Explore from "./Explore";
import Hero from "./index";
import Features from "./Features";
import Statistics from "./Statistics";
import Services from "./Services";
import Testimonials from "./Testimonials";
import CTA from "./CTA";

const HomePage = () => {
  return (
    <div className='w-full'>
      <Navbar textColor='text-gray-900' hamburgerColor='text-black' />
      <Hero />
      <Explore />
      <Features />
      <Statistics />
      <Services />
      <Testimonials />
      <div className='lg:px-[4rem]'>
        <CTA />
      </div>
    </div>
  );
};

export default HomePage;
