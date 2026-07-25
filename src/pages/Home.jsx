import About from "../components/About";
import Contact from "../components/Contact";
import Facilities from "../components/Facilities";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
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
            <Gallery />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;