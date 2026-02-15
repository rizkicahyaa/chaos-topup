const Footer = () => {
    return (
        <footer
            className="text-white py-12 mt-20 border-t"
            style={{
                backgroundColor: "rgba(35, 57, 91, 0.6)",
                borderColor: "rgba(89, 201, 165, 0.2)",
                backdropFilter: "blur(10px)",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center space-y-2">
                    <p className="text-gray-300 font-medium">© 2026 Chaos Top-up. All rights reserved.</p>
                    <p className="text-gray-400 text-sm">Top-up game murah, cepat, dan terpercaya</p>
                    <div className="flex justify-center gap-6 pt-4">
                        <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                            Tentang Kami
                        </a>
                        <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                            Syarat & Ketentuan
                        </a>
                        <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                            Hubungi Kami
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
