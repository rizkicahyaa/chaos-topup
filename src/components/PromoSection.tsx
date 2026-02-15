import { Percent, Gift, Sparkles } from "lucide-react";

const PromoSection = () => {
    return (
        <section className="py-12 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-white mb-2">Promo Spesial</h2>
                    <p className="text-gray-400">Jangan lewatkan penawaran terbatas kami</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Promo 1 */}
                    <div
                        className="group rounded-2xl p-8 text-white transition-all cursor-pointer"
                        style={{
                            background: "linear-gradient(135deg, #59C9A5, #4AB896)",
                            boxShadow: "0 8px 24px rgba(89, 201, 165, 0.3)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-8px)";
                            e.currentTarget.style.boxShadow = "0 16px 40px rgba(89, 201, 165, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(89, 201, 165, 0.3)";
                        }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                                <Percent className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-semibold opacity-90">DISKON 20%</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Semua Diamond MLBB</h3>
                        <p className="text-sm opacity-90 mb-6">Berlaku hingga 20 Feb 2026</p>
                        <button className="w-full px-4 py-3 bg-white rounded-xl font-semibold text-sm transition-all" style={{ color: "#59C9A5" }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}>
                            Beli Sekarang →
                        </button>
                    </div>

                    {/* Promo 2 */}
                    <div
                        className="group rounded-2xl p-8 text-white transition-all cursor-pointer"
                        style={{
                            background: "linear-gradient(135deg, #D81E5B, #C11850)",
                            boxShadow: "0 8px 24px rgba(216, 30, 91, 0.3)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-8px)";
                            e.currentTarget.style.boxShadow = "0 16px 40px rgba(216, 30, 91, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(216, 30, 91, 0.3)";
                        }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                                <Gift className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-semibold opacity-90">CASHBACK 15%</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Top-up Free Fire</h3>
                        <p className="text-sm opacity-90 mb-6">Minimal pembelian 100rb</p>
                        <button className="w-full px-4 py-3 bg-white rounded-xl font-semibold text-sm transition-all" style={{ color: "#D81E5B" }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}>
                            Beli Sekarang →
                        </button>
                    </div>

                    {/* Promo 3 */}
                    <div
                        className="group rounded-2xl p-8 text-white transition-all cursor-pointer"
                        style={{
                            background: "linear-gradient(135deg, rgba(89, 201, 165, 0.8), rgba(35, 57, 91, 0.9))",
                            border: "1px solid rgba(89, 201, 165, 0.3)",
                            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-8px)";
                            e.currentTarget.style.boxShadow = "0 16px 40px rgba(89, 201, 165, 0.3)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.2)";
                        }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                                <Sparkles className="w-6 h-6" style={{ color: "#59C9A5" }} />
                            </div>
                            <span className="text-sm font-semibold" style={{ color: "#59C9A5" }}>
                                PROMO SPESIAL
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Bundle Hemat PUBG</h3>
                        <p className="text-sm opacity-90 mb-6">Hemat hingga 30%</p>
                        <button className="w-full px-4 py-3 bg-white rounded-xl font-semibold text-sm transition-all" style={{ color: "#59C9A5" }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}>
                            Beli Sekarang →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoSection;
