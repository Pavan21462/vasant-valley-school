import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <WhyChooseUs />
        </>
    );
};

export default Home;