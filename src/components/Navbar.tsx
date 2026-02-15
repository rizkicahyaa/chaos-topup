import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-orange-900 border-b border-orange-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Chaos Logo" className="h-10 w-auto brightness-0 invert" />
                        <div className="hidden sm:flex flex-col">
                            <span className="text-lg font-bold text-teal-400">CHAOS</span>
                            <span className="text-xs text-orange-200">Top-up Murah & Cepat</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <a href="#" className="text-orange-100 hover:text-teal-400 text-sm font-semibold transition-colors">
                            Beranda
                        </a>
                        <a href="#" className="text-orange-100 hover:text-teal-400 text-sm font-semibold transition-colors">
                            Daftar Game
                        </a>
                        <a href="#" className="text-orange-100 hover:text-teal-400 text-sm font-semibold transition-colors">
                            Promo
                        </a>
                        <a href="#" className="text-orange-100 hover:text-teal-400 text-sm font-semibold transition-colors">
                            Cek Pesanan
                        </a>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">
                        <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-teal-300 hover:text-teal-100 transition-colors">
                            <User className="w-4 h-4" />
                            <span className="text-sm font-semibold">Masuk</span>
                        </button>
                        <button className="hidden sm:flex items-center gap-2 px-5 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition-colors">
                            <ShoppingCart className="w-4 h-4" />
                            Keranjang
                        </button>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-cyan-100 p-2">
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-orange-900 border-t border-orange-800">
                    <div className="px-4 py-3 space-y-2">
                        <a href="#" className="block text-orange-100 hover:text-teal-400 px-3 py-2 text-sm font-semibold">
                            Beranda
                        </a>
                        <a href="#" className="block text-orange-100 hover:text-teal-400 px-3 py-2 text-sm font-semibold">
                            Daftar Game
                        </a>
                        <a href="#" className="block text-orange-100 hover:text-teal-400 px-3 py-2 text-sm font-semibold">
                            Promo
                        </a>
                        <a href="#" className="block text-orange-100 hover:text-teal-400 px-3 py-2 text-sm font-semibold">
                            Cek Pesanan
                        </a>
                        <div className="flex flex-col gap-2 pt-2">
                            <button className="w-full px-4 py-2 text-teal-300 border border-teal-500 rounded-lg font-semibold hover:bg-orange-800 transition-colors">Masuk</button>
                            <button className="w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition-colors">Keranjang</button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
