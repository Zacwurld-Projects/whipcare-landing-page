import Navbar from "./Navbar";
import Explore from "./Explore";
import Hero from "./index";
import Features from "./Features";
import Statistics from "./Statistics";
import Services from "./Services";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Footer from "./Footer";
import { useCountry } from "@/components/Global/CountryContext";

const HomePage = () => {
  const { selectedCountry, setSelectedCountry } = useCountry();

  return (
    <div className='w-full'>
      <Navbar
        key={`navbar-${selectedCountry?.name || 'default'}`}
        textColor='text-gray-900'
        hamburgerColor='text-black'
        selectedCountry={selectedCountry}
        onCountrySelect={setSelectedCountry}
      />
      <Hero selectedCountry={selectedCountry} />
      <Explore selectedCountry={selectedCountry} />
      <Features />
      <Statistics />
      <Services selectedCountry={selectedCountry} />
      <Testimonials />
      <div className='lg:px-[4rem]'>
        <CTA />
      </div>
      <Footer selectedCountry={selectedCountry} />
    </div>
  );
};

export default HomePage;
