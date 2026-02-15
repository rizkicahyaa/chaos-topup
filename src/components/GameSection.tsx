import { useState } from "react";
import { Gamepad2 } from "lucide-react";

const GameSection = () => {
    const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

    const handleImageError = (gameId: number) => {
        setImageErrors((prev) => ({ ...prev, [gameId]: true }));
    };

    const games = [
        { id: 1, name: "Mobile Legends", image: "/images/mlbb.jpg" },
        { id: 2, name: "Genshin Impact", image: "/images/genshin.jpg" },
        { id: 3, name: "Honkai: Star Rail", image: "/images/hsr.jpg" },
        { id: 4, name: "Zenless Zone Zero", image: "/images/zenless.png" },
        { id: 5, name: "Wuthering Waves", image: "/images/wuwa.webp" },
        { id: 6, name: "Arknights: Endfield", image: "/images/endfield.webp" },
    ];

    return (
        <section className="py-12 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Game Populer</h2>
                        <p className="text-gray-400">Pilih game favoritmu untuk top-up</p>
                    </div>
                    <a
                        href="#"
                        className="px-6 py-3 rounded-xl transition-all text-white text-sm font-medium whitespace-nowrap"
                        style={{
                            backgroundColor: "rgba(89, 201, 165, 0.1)",
                            border: "1px solid rgba(89, 201, 165, 0.3)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(89, 201, 165, 0.2)";
                            e.currentTarget.style.color = "#59C9A5";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(89, 201, 165, 0.1)";
                            e.currentTarget.style.color = "white";
                        }}
                    >
                        Game Lainnya
                    </a>
                </div>

                {/* Game Grid - Larger Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {games.map((game) => (
                        <div key={game.id} className="group cursor-pointer">
                            <div
                                className="rounded-2xl p-4 backdrop-blur-sm transition-all"
                                style={{
                                    backgroundColor: "rgba(35, 57, 91, 0.4)",
                                    border: "1px solid rgba(89, 201, 165, 0.2)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "rgba(35, 57, 91, 0.6)";
                                    e.currentTarget.style.borderColor = "#59C9A5";
                                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(89, 201, 165, 0.2)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "rgba(35, 57, 91, 0.4)";
                                    e.currentTarget.style.borderColor = "rgba(89, 201, 165, 0.2)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                <div
                                    className="relative mb-3 overflow-hidden rounded-xl"
                                    style={{
                                        backgroundColor: "rgba(35, 57, 91, 0.8)",
                                        aspectRatio: "1",
                                    }}
                                >
                                    {!imageErrors[game.id] ? (
                                        <img src={game.image} alt={game.name} className="w-full h-full object-cover transition-transform duration-300" onError={() => handleImageError(game.id)} />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <Gamepad2 className="w-12 h-12" style={{ color: "#59C9A5" }} />
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-sm font-semibold text-gray-200 text-center transition-colors group-hover:text-white">{game.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GameSection;
