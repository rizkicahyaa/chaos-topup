import { useState } from "react";

interface Game {
    id: number;
    name: string;
    image: string;
    icon: string;
}

const GameSection = () => {
    const games: Game[] = [
        {
            id: 1,
            name: "Mobile Legends",
            image: "/images/mlbb.jpg",
            icon: "/images/games/mlbb.webp",
        },
        {
            id: 2,
            name: "Genshin Impact",
            image: "/images/genshin.jpg",
            icon: "/images/games/genshin.webp",
        },
        {
            id: 3,
            name: "Honkai: Star Rail",
            image: "/images/hsr.jpg",
            icon: "/images/games/hsr.webp",
        },
        {
            id: 4,
            name: "Zenless Zone Zero",
            image: "/images/zenless.png",
            icon: "/images/games/zenless.webp",
        },
        {
            id: 5,
            name: "Wuthering Waves",
            image: "/images/wuwa.webp",
            icon: "/images/wuwa.webp",
        },
        {
            id: 6,
            name: "Arknights: Endfield",
            image: "/images/endfield.webp",
            icon: "/images/endfield.webp",
        },
    ];

    const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

    const handleImageError = (gameId: number) => {
        setImageErrors((prev) => ({ ...prev, [gameId]: true }));
    };

    return (
        <section className="mb-10">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Game Populer</h2>
                <a href="#" className="text-orange-600 font-semibold hover:text-orange-700">
                    Lihat Semua →
                </a>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {games.map((game) => (
                    <div key={game.id} className="bg-white rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-orange-500 group">
                        <div className="relative mb-2 overflow-hidden rounded-lg bg-gradient-to-br from-orange-100 to-orange-50">
                            {!imageErrors[game.id] ? (
                                <img src={game.image} alt={game.name} className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-300" onError={() => handleImageError(game.id)} />
                            ) : (
                                <div className="w-full aspect-square flex items-center justify-center">
                                    <div className="text-center p-2">
                                        <div className="w-16 h-16 mx-auto mb-2 bg-orange-200 rounded-full flex items-center justify-center">
                                            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <p className="text-xs font-semibold text-gray-700 text-center group-hover:text-orange-600">{game.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GameSection;
