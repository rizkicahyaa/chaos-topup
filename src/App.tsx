import "./App.css";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
            <Navbar />

            <main className="pt-24 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center space-y-6 py-20">
                        <div className="inline-block px-4 py-1.5 bg-red-950/30 text-red-400 rounded-full text-sm font-medium mb-4 border border-red-900/30">Top-up Game Terpercaya</div>

                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                            Top-up Game <br />
                            <span className="text-red-500">Mudah & Cepat</span>
                        </h1>

                        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">Nikmati pengalaman top-up game favoritmu dengan proses yang mudah, harga terbaik, dan layanan 24/7.</p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                            <button className="w-full sm:w-auto px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all shadow-sm hover:shadow-md">Mulai Sekarang</button>
                            <button className="w-full sm:w-auto px-8 py-3.5 bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium rounded-lg border border-gray-700 transition-all">Lihat Game</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
