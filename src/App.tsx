import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GameSection from "./components/GameSection";
import PromoSection from "./components/PromoSection";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: "#23395B" }}>
            <Navbar />
            <Hero />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                <GameSection />
                <PromoSection />
            </main>

            <Footer />
        </div>
    );
}

export default App;
