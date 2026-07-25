import { motion } from "framer-motion";
import heroImage from "../assets/images/hero.jpg";

const Hero = () => {
    return (
        <section
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
            id="home"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl text-center text-white"
                >
                    <h1 className="text-5xl md:text-7xl font-bold">
                        Inspiring Excellence,
                        <br />
                        Shaping Tomorrow
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-200">
                        Empowering students with knowledge, creativity, leadership, and
                        values to build a brighter future.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="#gallery"
                            className="rounded-full bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-700 transition"
                        >
                            Explore Campus
                        </a>

                        <a
                            href="#contact"
                            className="rounded-full border-2 border-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition"
                        >
                            Apply Now
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;