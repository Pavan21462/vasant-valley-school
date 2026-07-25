import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";

const Gallery = () => {
    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-5">

                <h2 className="text-4xl font-bold text-center text-blue-700">
                    Gallery
                </h2>

                <p className="text-center text-gray-600 mt-3 mb-10">
                    Explore our beautiful campus and student activities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="Gallery"
                            className="rounded-xl shadow-md hover:scale-105 transition duration-300"
                        />
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Gallery;