import {
    FaBook,
    FaLaptopCode,
    FaFlask,
    FaBus,
    FaFutbol,
    FaChalkboardTeacher,
} from "react-icons/fa";

const Facilities = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto px-5">

                <h2 className="text-4xl font-bold text-center text-blue-700">
                    Our Facilities
                </h2>

                <p className="text-center text-gray-600 mt-3 mb-10">
                    We provide modern facilities for better learning and development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                        <FaBook className="text-4xl text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold">Library</h3>
                        <p className="text-gray-600 mt-2">
                            A well-stocked library with thousands of books.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                        <FaLaptopCode className="text-4xl text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold">Computer Lab</h3>
                        <p className="text-gray-600 mt-2">
                            Modern computer lab with high-speed internet.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                        <FaFlask className="text-4xl text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold">Science Lab</h3>
                        <p className="text-gray-600 mt-2">
                            Fully equipped physics, chemistry and biology labs.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                        <FaBus className="text-4xl text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold">Transport</h3>
                        <p className="text-gray-600 mt-2">
                            Safe and reliable transportation across the city.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                        <FaFutbol className="text-4xl text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold">Sports Ground</h3>
                        <p className="text-gray-600 mt-2">
                            Large playground for sports and physical activities.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                        <FaChalkboardTeacher className="text-4xl text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold">Smart Classrooms</h3>
                        <p className="text-gray-600 mt-2">
                            Digital classrooms with interactive learning tools.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Facilities;