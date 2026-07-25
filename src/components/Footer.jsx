import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-8">

            <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center">

                <div>
                    <h2 className="text-2xl font-bold">
                        Vasant Valley School
                    </h2>

                    <p className="text-gray-300 mt-2">
                        Inspiring Excellence, Shaping Tomorrow.
                    </p>
                </div>

                <div className="flex gap-5 text-2xl mt-6 md:mt-0">

                    <FaFacebook className="hover:text-blue-300 cursor-pointer" />

                    <FaInstagram className="hover:text-pink-300 cursor-pointer" />

                    <FaLinkedin className="hover:text-blue-400 cursor-pointer" />

                </div>

            </div>

        </footer>
    );
};

export default Footer;