import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GameSection from "./components/GameSection";
import PromoSection from "./components/PromoSection";

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Hero />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                <GameSection />
                <PromoSection />
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center">
                        <p className="text-gray-400 text-sm">© 2026 Chaos Top-up. All rights reserved.</p>
                        <p className="text-gray-500 text-xs mt-2">Top-up game murah, cepat, dan terpercaya</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
