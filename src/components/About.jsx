import { motion } from "framer-motion";
import { FaSchool, FaUserGraduate, FaChalkboardTeacher, FaAward } from "react-icons/fa";
import aboutImage from "../assets/images/about.jpg";

const About = () => {
    return (
        <section className="bg-gray-50 py-24 overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={aboutImage} alt="School Campus" className="rounded-3xl shadow-2xl" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-blue-600 font-semibold uppercase tracking-widest">
                        About Our School
                    </p>

                    <h2 className="text-5xl font-bold mt-3 leading-tight">
                        Building Future Leaders Through Quality Education
                    </h2>

                    <p className="text-gray-600 mt-6 leading-8">
                        Vasant Valley School is committed to nurturing young minds through
                        innovation, creativity, and academic excellence. Our goal is to
                        empower every student with knowledge, confidence, and strong values.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-10">

                        <div className="flex items-center gap-4">
                            <FaSchool className="text-3xl text-blue-600" />
                            <span className="font-semibold">
                                Modern Campus
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaUserGraduate className="text-3xl text-blue-600" />
                            <span className="font-semibold">
                                Skilled Students
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaChalkboardTeacher className="text-3xl text-blue-600" />
                            <span className="font-semibold">
                                Expert Teachers
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaAward className="text-3xl text-blue-600" />
                            <span className="font-semibold">
                                Award Winning Education
                            </span>
                        </div>

                    </div>

                    <button className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 duration-300">
                        <a href="#facilities" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700">
                            Learn More
                        </a>
                    </button>

                </motion.div>

            </div>
        </section>
    );
};

export default About;