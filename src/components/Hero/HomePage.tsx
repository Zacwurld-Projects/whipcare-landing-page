import Navbar from "./Navbar"
import Explore from "./Explore"
import Hero from "./index"
import Features from "./Features"
import Statistics from "./Statistics"
import Services from "./Services"
import Testimonials from "./Testimonials"
import CTA from "./CTA"

const HomePage = () => {
    return (
        <div className="w-full">
            {/* <Navbar
                textColor="text-gray-900"
            /> */}
            <Hero />
            <Explore />
            <Features />
            <Statistics />
            <Services />
            <Testimonials />
            <CTA />
        </div>
    )
}

export default HomePage