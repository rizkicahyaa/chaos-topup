import { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 mx-4 mt-4">
            <div
                className="max-w-7xl mx-auto rounded-2xl px-6 py-4 backdrop-blur-xl border"
                style={{
                    backgroundColor: "rgba(35, 57, 91, 0.8)",
                    borderColor: "rgba(89, 201, 165, 0.3)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                }}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Chaos Logo" className="h-10 w-auto brightness-0 invert" />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold" style={{ color: "#59C9A5" }}>
                                CHAOS
                            </span>
                            <span className="text-xs text-gray-300">Top-up Premium</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-gray-200 text-sm font-medium transition-colors" onMouseEnter={(e) => (e.currentTarget.style.color = "#59C9A5")} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>
                            Beranda
                        </a>
                        <a href="#" className="text-gray-200 text-sm font-medium transition-colors" onMouseEnter={(e) => (e.currentTarget.style.color = "#59C9A5")} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>
                            Game
                        </a>
                        <a href="#" className="text-gray-200 text-sm font-medium transition-colors" onMouseEnter={(e) => (e.currentTarget.style.color = "#59C9A5")} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>
                            Promo
                        </a>
                        <a href="#" className="text-gray-200 text-sm font-medium transition-colors" onMouseEnter={(e) => (e.currentTarget.style.color = "#59C9A5")} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>
                            Bantuan
                        </a>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                        <button
                            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl text-gray-200 text-sm font-medium transition-all"
                            style={{ backgroundColor: "rgba(89, 201, 165, 0.1)" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(89, 201, 165, 0.2)";
                                e.currentTarget.style.color = "#59C9A5";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(89, 201, 165, 0.1)";
                                e.currentTarget.style.color = "";
                            }}
                        >
                            <User className="w-4 h-4" />
                            Masuk
                        </button>
                        <button
                            className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-white rounded-xl font-medium text-sm transition-all"
                            style={{ backgroundColor: "#59C9A5", boxShadow: "0 4px 12px rgba(89, 201, 165, 0.3)" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#4AB896";
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow = "0 6px 16px rgba(89, 201, 165, 0.4)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "#59C9A5";
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 4px 12px rgba(89, 201, 165, 0.3)";
                            }}
                        >
                            <ShoppingCart className="w-4 h-4" />
                            Keranjang
                        </button>

                        {/* Mobile Menu Button */}
                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-200">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t" style={{ borderColor: "rgba(89, 201, 165, 0.2)" }}>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="px-4 py-2.5 text-gray-200 rounded-lg text-sm font-medium transition-colors" onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(89, 201, 165, 0.1)")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}>
                                Beranda
                            </a>
                            <a href="#" className="px-4 py-2.5 text-gray-200 rounded-lg text-sm font-medium transition-colors" onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(89, 201, 165, 0.1)")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}>
                                Game
                            </a>
                            <a href="#" className="px-4 py-2.5 text-gray-200 rounded-lg text-sm font-medium transition-colors" onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(89, 201, 165, 0.1)")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}>
                                Promo
                            </a>
                            <a href="#" className="px-4 py-2.5 text-gray-200 rounded-lg text-sm font-medium transition-colors" onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(89, 201, 165, 0.1)")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}>
                                Bantuan
                            </a>
                            <div className="flex flex-col gap-2 mt-2">
                                <button className="w-full px-4 py-2.5 text-gray-200 rounded-lg font-medium text-sm transition-colors" style={{ border: "1px solid #59C9A5" }}>
                                    Masuk
                                </button>
                                <button className="w-full px-4 py-2.5 text-white rounded-lg font-medium text-sm transition-colors" style={{ backgroundColor: "#59C9A5" }}>
                                    Keranjang
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
