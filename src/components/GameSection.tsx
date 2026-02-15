const GameSection = () => {
    return (
        <section className="mb-10">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Game Populer</h2>
                <a href="#" className="text-orange-600 font-semibold hover:text-orange-700">
                    Lihat Semua →
                </a>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {["Mobile Legends", "Genshin Impact", "Honkai Star Rail", "Valorant", "Call of Duty"].map((game, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-orange-500 group">
                        <div className="w-full aspect-square bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg mb-2"></div>
                        <p className="text-xs font-semibold text-gray-700 text-center group-hover:text-orange-600">{game}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GameSection;
