import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-50 w-full border-b border-[#f4f0e7] bg-[#fcfbf8]/90 backdrop-blur-md">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-3">
                    <header className="flex items-center justify-between whitespace-nowrap">
                        {/* Logo & Nav Links */}
                        <div className="flex items-center gap-8 lg:gap-12">
                            <Link to="/" className="flex items-center gap-3 text-primary-text">
                                <div className="size-8 text-primary">
                                    <span className="material-symbols-outlined !text-[32px]">local_florist</span>
                                </div>
                                <h2 className="text-primary-text text-xl font-bold tracking-tight uppercase">Swarajya Agro Foods</h2>
                            </Link>
                            <div className="hidden lg:flex items-center gap-8">
                                <Link className="text-primary-text text-sm font-semibold hover:text-primary transition-colors"
                                    to="/shop">Shop</Link>
                                <Link className="text-primary-text text-sm font-medium hover:text-primary transition-colors"
                                    to="/heritage">Heritage</Link>
                                <Link className="text-primary-text text-sm font-medium hover:text-primary transition-colors"
                                    to="/ayurveda">Ayurveda</Link>
                                <Link className="text-primary-text text-sm font-medium hover:text-primary transition-colors"
                                    to="/recipes">Recipes</Link>
                                <Link className="text-primary-text text-sm font-medium hover:text-primary transition-colors"
                                    to="/gifts">Gifts</Link>
                            </div>
                        </div>
                        {/* Utility Icons & Search */}
                        <div className="flex items-center justify-end gap-4 md:gap-6">
                            <div
                                className="hidden md:flex items-center rounded-full bg-[#f4f0e7] px-3 h-10 w-64 group focus-within:ring-2 ring-primary/20 transition-all">
                                <span className="material-symbols-outlined text-secondary-text">search</span>
                                <input
                                    className="w-full bg-transparent border-none text-sm text-primary-text placeholder:text-secondary-text focus:ring-0 px-2"
                                    placeholder="Search for saffron, turmeric..." />
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    className="flex items-center justify-center size-10 rounded-full hover:bg-[#f4f0e7] transition-colors text-primary-text md:hidden">
                                    <span className="material-symbols-outlined">search</span>
                                </button>
                                <button
                                    className="flex items-center justify-center size-10 rounded-full hover:bg-[#f4f0e7] transition-colors text-primary-text">
                                    <span className="material-symbols-outlined">person</span>
                                </button>
                                <Link to="/checkout"
                                    className="flex items-center justify-center size-10 rounded-full hover:bg-[#f4f0e7] transition-colors text-primary-text relative">
                                    <span className="material-symbols-outlined">shopping_bag</span>
                                    <span className="absolute top-2 right-1 size-2 bg-primary rounded-full"></span>
                                </Link>
                                <button
                                    className="flex items-center justify-center size-10 rounded-full hover:bg-[#f4f0e7] transition-colors text-primary-text lg:hidden">
                                    <span className="material-symbols-outlined">menu</span>
                                </button>
                            </div>
                        </div>
                    </header>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-[#221e10] text-[#f4f0e7] pt-20 pb-10">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-[#f4f0e7]/10 pb-12">
                        {/* Column 1: Brand */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <div className="size-8 text-primary">
                                    <span className="material-symbols-outlined !text-[32px]">local_florist</span>
                                </div>
                                <h2 className="text-xl font-bold tracking-tight uppercase">Swarajya Agro Foods</h2>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Bringing the authentic flavors of India to the world. Ethically sourced, carefully processed,
                                and delivered with love.
                            </p>
                            <div className="flex gap-4">
                                {/* Social Icons placeholders */}
                                <a className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
                                    href="#">
                                    <span className="text-xs font-bold">FB</span>
                                </a>
                                <a className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
                                    href="#">
                                    <span className="text-xs font-bold">IG</span>
                                </a>
                                <a className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
                                    href="#">
                                    <span className="text-xs font-bold">TW</span>
                                </a>
                            </div>
                        </div>
                        {/* Column 2: Quick Links */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-bold text-primary mb-2">Shop</h3>
                            <Link className="text-gray-400 hover:text-primary transition-colors text-sm" to="/shop">Whole Spices</Link>
                            <Link className="text-gray-400 hover:text-primary transition-colors text-sm" to="/shop">Ground Powders</Link>
                            <Link className="text-gray-400 hover:text-primary transition-colors text-sm" to="/shop">Blends &amp; Masalas</Link>
                            <Link className="text-gray-400 hover:text-primary transition-colors text-sm" to="/shop">Ayurvedic Collection</Link>
                            <Link className="text-gray-400 hover:text-primary transition-colors text-sm" to="/shop">Gift Sets</Link>
                        </div>
                        {/* Column 3: Company */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-bold text-primary mb-2">Company</h3>
                            <Link className="text-gray-400 hover:text-primary transition-colors text-sm" to="/story">Our Story</Link>
                            <Link className="text-gray-400 hover:text-primary transition-colors text-sm" to="/sourcing">Sourcing &amp; Farmers</Link>
                            <Link className="text-gray-400 hover:text-primary transition-colors text-sm" to="/wholesale">Wholesale / Export</Link>
                            <Link className="text-gray-400 hover:text-primary transition-colors text-sm" to="/enquiry">Contact Us</Link>
                            <Link className="text-gray-400 hover:text-primary transition-colors text-sm" to="/careers">Careers</Link>
                        </div>
                        {/* Column 4: Newsletter */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-bold text-primary mb-2">Newsletter</h3>
                            <p className="text-gray-400 text-sm">Subscribe to receive updates, access to exclusive deals, and more.</p>
                            <form className="flex flex-col gap-3">
                                <input
                                    className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-primary placeholder:text-gray-500"
                                    placeholder="Enter your email" type="email" />
                                <button
                                    className="bg-primary text-black font-bold py-3 px-4 rounded-md hover:bg-[#eeb514] transition-colors text-sm uppercase tracking-wider">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                        <p>© 2024 Swarajya Agro Foods Pvt. Ltd. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                            <a className="hover:text-primary transition-colors" href="#">Shipping Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
