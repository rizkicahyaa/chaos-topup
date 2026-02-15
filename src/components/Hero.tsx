import { Zap, Shield, Clock } from "lucide-react";

const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                            style={{
                                backgroundColor: "rgba(216, 30, 91, 0.1)",
                                border: "1px solid rgba(216, 30, 91, 0.3)",
                                color: "#D81E5B",
                            }}
                        >
                            <Zap className="w-4 h-4" />
                            Promo Spesial Hari Ini
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            Top-up Game
                            <br />
                            <span style={{ color: "#59C9A5" }}>Tercepat</span> & Termurah
                        </h1>

                        <p className="text-lg text-gray-300 leading-relaxed">Proses otomatis 24/7, harga terbaik, dan customer service siap membantu kapan saja</p>

                        <div className="flex flex-wrap gap-4">
                            <button
                                className="px-8 py-4 text-white rounded-xl font-medium text-lg transition-all"
                                style={{
                                    backgroundColor: "#D81E5B",
                                    boxShadow: "0 8px 24px rgba(216, 30, 91, 0.3)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(216, 30, 91, 0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(216, 30, 91, 0.3)";
                                }}
                            >
                                Mulai Top-up →
                            </button>
                            <button
                                className="px-8 py-4 text-gray-200 rounded-xl font-medium text-lg transition-all"
                                style={{
                                    border: "2px solid rgba(89, 201, 165, 0.3)",
                                    backgroundColor: "rgba(89, 201, 165, 0.05)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "rgba(89, 201, 165, 0.1)";
                                    e.currentTarget.style.borderColor = "#59C9A5";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "rgba(89, 201, 165, 0.05)";
                                    e.currentTarget.style.borderColor = "rgba(89, 201, 165, 0.3)";
                                }}
                            >
                                Lihat Tutorial
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-6">
                            <div className="p-4 rounded-xl backdrop-blur-sm" style={{ backgroundColor: "rgba(35, 57, 91, 0.6)", border: "1px solid rgba(89, 201, 165, 0.2)" }}>
                                <div className="flex items-center gap-2 mb-1">
                                    <Clock className="w-4 h-4" style={{ color: "#59C9A5" }} />
                                    <p className="text-xs text-gray-400">Proses</p>
                                </div>
                                <p className="text-lg font-bold text-white">&lt; 1 Menit</p>
                            </div>
                            <div className="p-4 rounded-xl backdrop-blur-sm" style={{ backgroundColor: "rgba(35, 57, 91, 0.6)", border: "1px solid rgba(89, 201, 165, 0.2)" }}>
                                <div className="flex items-center gap-2 mb-1">
                                    <Shield className="w-4 h-4" style={{ color: "#59C9A5" }} />
                                    <p className="text-xs text-gray-400">Transaksi</p>
                                </div>
                                <p className="text-lg font-bold text-white">100% Aman</p>
                            </div>
                            <div className="p-4 rounded-xl backdrop-blur-sm" style={{ backgroundColor: "rgba(35, 57, 91, 0.6)", border: "1px solid rgba(89, 201, 165, 0.2)" }}>
                                <div className="flex items-center gap-2 mb-1">
                                    <Zap className="w-4 h-4" style={{ color: "#59C9A5" }} />
                                    <p className="text-xs text-gray-400">Layanan</p>
                                </div>
                                <p className="text-lg font-bold text-white">24/7</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative hidden md:block max-w-lg mx-auto">
                        <div
                            className="p-8 rounded-3xl backdrop-blur-xl"
                            style={{
                                background: "linear-gradient(135deg, rgba(216, 30, 91, 0.2), rgba(89, 201, 165, 0.2))",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <div
                                className="rounded-2xl overflow-hidden"
                                style={{
                                    background: "linear-gradient(135deg, #D81E5B, #59C9A5)",
                                    aspectRatio: "16/9",
                                }}
                            >
                                <img src="/images/poster-games.png" alt="Gaming" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Floating badge */}
                        {/* <div
                            className="absolute -top-3 -right-3 px-5 py-2 rounded-full backdrop-blur-xl font-bold text-sm"
                            style={{
                                backgroundColor: "rgba(216, 30, 91, 0.9)",
                                color: "white",
                                boxShadow: "0 8px 24px rgba(216, 30, 91, 0.4)",
                            }}
                        >
                            Diskon 20%
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
