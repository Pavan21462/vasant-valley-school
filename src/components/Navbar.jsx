import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        "Home",
        "About",
        "Academics",
        "Admissions",
        "Gallery",
        "Contact",
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


                <div>
                    <h1 className="text-2xl font-bold text-blue-700">
                        Vasant Valley
                    </h1>
                </div>


                <ul className="hidden lg:flex items-center gap-8 font-medium">
                    {navLinks.map((link) => (
                        <li
                            key={link}
                            className="cursor-pointer hover:text-blue-700 transition"
                        >
                            {link}
                        </li>
                    ))}

                    <button className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
                        Apply Now
                    </button>
                </ul>


                <div
                    className="lg:hidden cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
                </div>
            </div>


            {menuOpen && (
                <div className="lg:hidden bg-white shadow-md">
                    {navLinks.map((link) => (
                        <div
                            key={link}
                            className="px-6 py-4 border-b hover:bg-gray-100 cursor-pointer"
                        >
                            {link}
                        </div>
                    ))}

                    <div className="p-4">
                        <button className="w-full bg-blue-700 text-white py-3 rounded-lg">
                            Apply Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;