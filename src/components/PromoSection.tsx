const PromoSection = () => {
    return (
        <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Promo Spesial</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                    <div className="text-sm font-bold mb-2">DISKON 20%</div>
                    <div className="text-2xl font-bold mb-2">Semua Diamond MLBB</div>
                    <div className="text-sm opacity-90">Berlaku hingga 20 Feb 2026</div>
                    <button className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-lg font-bold text-sm hover:bg-gray-100">Beli Sekarang</button>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                    <div className="text-sm font-bold mb-2">CASHBACK 15%</div>
                    <div className="text-2xl font-bold mb-2">Top-up Free Fire</div>
                    <div className="text-sm opacity-90">Minimal pembelian 100rb</div>
                    <button className="mt-4 px-4 py-2 bg-white text-purple-600 rounded-lg font-bold text-sm hover:bg-gray-100">Beli Sekarang</button>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                    <div className="text-sm font-bold mb-2">PROMO SPESIAL</div>
                    <div className="text-2xl font-bold mb-2">Bundle Hemat PUBG</div>
                    <div className="text-sm opacity-90">Hemat hingga 30%</div>
                    <button className="mt-4 px-4 py-2 bg-white text-green-600 rounded-lg font-bold text-sm hover:bg-gray-100">Beli Sekarang</button>
                </div>
            </div>
        </section>
    );
};

export default PromoSection;
