import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800/50">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="text-xl font-semibold text-white tracking-tight hover:text-red-500 transition-colors">
                            Chaos
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="#" className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors">
                            Beranda
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors">
                            Game
                        </a>
                        <button className="ml-4 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all">Pesan Sekarang</button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 border-t border-gray-800/50">
                    <div className="px-4 py-3 space-y-1">
                        <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                            Beranda
                        </a>
                        <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                            Game
                        </a>
                        <button className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium">Pesan Sekarang</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
