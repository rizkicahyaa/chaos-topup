import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-b-2 border-orange-500 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Chaos Logo" className="h-10 w-auto" />
                        <div className="hidden sm:flex flex-col">
                            <span className="text-lg font-bold text-orange-600">CHAOS</span>
                            <span className="text-xs text-gray-600">Top-up Murah & Cepat</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <a href="#" className="text-gray-700 hover:text-orange-600 text-sm font-semibold transition-colors">
                            Beranda
                        </a>
                        <a href="#" className="text-gray-700 hover:text-orange-600 text-sm font-semibold transition-colors">
                            Daftar Game
                        </a>
                        <a href="#" className="text-gray-700 hover:text-orange-600 text-sm font-semibold transition-colors">
                            Promo
                        </a>
                        <a href="#" className="text-gray-700 hover:text-orange-600 text-sm font-semibold transition-colors">
                            Cek Pesanan
                        </a>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">
                        <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-all">
                            <User className="w-4 h-4" />
                            <span className="text-sm font-semibold">Masuk</span>
                        </button>
                        <button className="hidden sm:flex items-center gap-2 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all shadow-md">
                            <ShoppingCart className="w-4 h-4" />
                            Keranjang
                        </button>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 py-3 space-y-2">
                        <a href="#" className="block text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-semibold">
                            Beranda
                        </a>
                        <a href="#" className="block text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-semibold">
                            Daftar Game
                        </a>
                        <a href="#" className="block text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-semibold">
                            Promo
                        </a>
                        <a href="#" className="block text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-semibold">
                            Cek Pesanan
                        </a>
                        <div className="flex flex-col gap-2 pt-2">
                            <button className="w-full px-4 py-2 text-orange-600 border border-orange-500 rounded-lg font-semibold">Masuk</button>
                            <button className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold">Keranjang</button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
