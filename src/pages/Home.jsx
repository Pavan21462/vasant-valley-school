import About from "../components/About";
import Facilities from "../components/Facilities";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Statistics from "../components/Statistics";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <WhyChooseUs />
            <Statistics />
            <Facilities />
        </>
    );
};

export default Home;