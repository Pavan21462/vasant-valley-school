import { motion } from "framer-motion";
import {
    FaGraduationCap,
    FaChalkboardTeacher,
    FaSchool,
    FaTrophy,
} from "react-icons/fa";

const features = [
    {
        icon: FaGraduationCap,
        title: "Academic Excellence",
        description:
            "A curriculum designed to inspire innovation, creativity and lifelong learning.",
    },
    {
        icon: FaChalkboardTeacher,
        title: "Expert Faculty",
        description:
            "Dedicated teachers committed to helping every student achieve success.",
    },
    {
        icon: FaSchool,
        title: "Modern Infrastructure",
        description:
            "Smart classrooms, advanced labs, library and a safe learning environment.",
    },
    {
        icon: FaTrophy,
        title: "Holistic Development",
        description:
            "Sports, arts, leadership and co-curricular activities for overall growth.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-blue-600 font-semibold uppercase tracking-widest">
                        Why Choose Us
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Empowering Students for a Better Tomorrow
                    </h2>

                    <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
                        We combine academic excellence, experienced faculty and modern
                        facilities to create a learning environment where every child can
                        grow with confidence.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
                            >
                                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                                    <Icon className="text-3xl text-blue-600" />
                                </div>

                                <h3 className="text-xl font-bold mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;