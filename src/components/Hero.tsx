const Hero = () => {
    return (
        <section className="bg-orange-600 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center text-white space-y-4">
                    <div className="inline-block px-4 py-1 bg-yellow-400 text-orange-900 rounded-full text-sm font-bold mb-2">⚡ PROMO SPESIAL HARI INI!</div>
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Top-up Game Favoritmu
                        <br />
                        Harga Termurah & Tercepat!
                    </h1>
                    <p className="text-lg md:text-xl opacity-90">Proses otomatis 24 jam, aman dan terpercaya</p>
                    <button className="mt-4 px-8 py-3 bg-white text-orange-600 hover:bg-orange-50 rounded-lg font-bold text-lg transition-colors">Lihat Semua Game →</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
