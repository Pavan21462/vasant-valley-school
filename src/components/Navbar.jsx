import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Facilities", href: "#facilities" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" },
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
                        <li key={link.name}>
                            <a href={link.href} className="hover:text-blue-700 transition">
                                {link.name}
                            </a>
                        </li>
                    ))}

                    <a href="#contact" className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition" >
                        Apply Now
                    </a>
                </ul>

                <div className="lg:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} >
                    {menuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
                </div>
            </div>


            {menuOpen && (
                <div className="lg:hidden bg-white shadow-md">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="block px-6 py-4 border-b hover:bg-gray-100">
                            {link.name}
                        </a>
                    ))}

                    <div className="p-4">
                        <a href="#contact" className="block w-full bg-blue-700 text-white py-3 rounded-lg text-center hover:bg-blue-800 transition">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;