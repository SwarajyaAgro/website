import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    data-alt="Dark moody shot of floating spices like cardamom and cinnamon sticks"
                    style={{
                        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDfbo5x_IFvlJB16e8M7AgAKj3nPHNa5yxHK_iwkrpo_kOhlsx2XkGAEMgxUxQUgzeHHrwXLCEAs82jFUa4MeJZgqPyhm1MDuaFnRg4oXpFrSbEbEQLrrUYzl4cAeUZvy0LR2oNm-xyPAokYO8S4eSdizkud_Aewn6-r8NgS-a8QzAjsRLejtmQSFrHYWhsQARc3ZtxhwMEKqmbuVdDJ5QkCi_hBH3eo46u5vuoZzxkMg3-WBuskyjB1aK9M-0p4S66-Ipoib3DbFg")'
                    }}>
                </div>
                {/* Content */}
                <div
                    className="relative z-10 w-full max-w-[1440px] px-4 md:px-10 flex flex-col items-start gap-6 animate-fade-in-up">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium tracking-widest uppercase mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Authentic Indian Heritage
                    </div>
                    <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight max-w-[800px]">
                        The Soul of India,<br /> <span className="text-primary italic font-serif pr-2">Bottled</span> for the World
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-[600px]">
                        Hand-picked, single-origin spices rooted in Ayurveda and crafted for global culinary excellence.
                        Experience the purity of Kerala in every grain.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Link to="/shop"
                            className="flex items-center justify-center h-12 px-8 rounded-full bg-primary hover:bg-[#eeb514] text-[#1c180d] text-base font-bold transition-transform hover:scale-105 shadow-lg shadow-primary/30">
                            Shop the Collection
                        </Link>
                        <Link to="/story"
                            className="flex items-center justify-center h-12 px-8 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 text-base font-medium transition-colors">
                            Explore Our Story
                        </Link>
                    </div>
                </div>
            </div>
            {/* Trust Badges Strip */}
            <div className="w-full bg-[#f4f0e7] py-6 border-b border-[#e8e2ce]">
                <div
                    className="max-w-[1440px] mx-auto px-4 md:px-10 flex flex-wrap justify-center gap-8 md:gap-16 text-secondary-text opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-2xl">verified</span>
                        <span className="text-sm font-semibold tracking-wide uppercase">FSSAI Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-2xl">eco</span>
                        <span className="text-sm font-semibold tracking-wide uppercase">100% Organic</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-2xl">public</span>
                        <span className="text-sm font-semibold tracking-wide uppercase">Global Export</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-2xl">science</span>
                        <span className="text-sm font-semibold tracking-wide uppercase">Lab Tested</span>
                    </div>
                </div>
            </div>
            {/* Shop by Category Section */}
            <div className="w-full bg-background-light bg-pattern-subtle py-20">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                        <div>
                            <h2 className="text-primary-text text-3xl md:text-4xl font-bold tracking-tight mb-2">Curated Collections
                            </h2>
                            <p className="text-secondary-text max-w-md">Explore our range of premium spices, categorized for your
                                culinary needs.</p>
                        </div>
                        <a className="group flex items-center gap-1 text-primary-text font-semibold border-b-2 border-transparent hover:border-primary transition-all"
                            href="#">
                            View All Categories
                            <span
                                className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {/* Category 1 */}
                        <a className="group flex flex-col items-center gap-4 text-center cursor-pointer" href="#">
                            <div
                                className="w-full aspect-square overflow-hidden rounded-full border-4 border-white shadow-md group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                    data-alt="Top down view of a wooden bowl filled with whole cinnamon, cloves and peppercorns"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrcp_li78bhE7XEYesg4XxXDPkmhlv4O-N1MU18Xd41wOoo9hDkoI-85FWObiFNhMiuETAq5bjCndzod3mtZXJXVjU5MWjmLvnWG711jIAqRhF28geWioc-acpxb0O1EN7PqdF5nT23-L3hpJREstYFP02breUBOQOSNtT7Q0wp6txviwp7exDyWmETepKazF3m3cNfXtyJezOeLNPtd_SQ3yPa76dKNThEK0-cxIVJBVARA1B_UtcQRy3iUcFLHtDz8KVcma4dvo")' }}>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-primary-text group-hover:text-primary transition-colors">Whole
                                    Spices</h3>
                                <p className="text-xs text-secondary-text uppercase tracking-widest mt-1">Pure &amp; Unprocessed</p>
                            </div>
                        </a>
                        {/* Category 2 */}
                        <a className="group flex flex-col items-center gap-4 text-center cursor-pointer" href="#">
                            <div
                                className="w-full aspect-square overflow-hidden rounded-full border-4 border-white shadow-md group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                    data-alt="Mound of bright yellow turmeric powder"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-3AuSbBWG8bvMzMbWVmnrzraaNn_wdHbZTOu6pX46jbVEFwUl5yPnkKpHFvNOD3ZJR7v4K-yMAj0lXbJsK8DrbnG-Y89VdcF26TFopTD33cqfV9QswWs5j-WIxNU7Ts5QCoFy7JID1MnJhLcwyaIBW4xkQVohP-it2MJ-mMEI3bTQua5JuNi7uEguUH4Q1TB_px250rgbUrDx83xtXH5pNX-_s5FmBSwJihKG5kq_WPlpu1d9vVCgfSqIgGex-NMupvXyDZAzERM")' }}>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-primary-text group-hover:text-primary transition-colors">
                                    Ground Powders</h3>
                                <p className="text-xs text-secondary-text uppercase tracking-widest mt-1">Cold-Milled</p>
                            </div>
                        </a>
                        {/* Category 3 */}
                        <a className="group flex flex-col items-center gap-4 text-center cursor-pointer" href="#">
                            <div
                                className="w-full aspect-square overflow-hidden rounded-full border-4 border-white shadow-md group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                    data-alt="Colorful mix of spices in a masala blend"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByonZojW2ln3vY9KBUSj9BCKIkWV81iiaRtigo5O7xKFcyON2pHPaw2hNwc6HR7onccDnIbmMs7btT9HnOdSUZAXhN5jGR0ghqSeGOoSmC04LnlOU7K1Cj2SpRlbpnV9xf_4lw7iCRhgF-rczppGQkrHUJcKTrMXScqZUQ5EDFfwujLy58-ADsAY7TJBet-v_3yuv9C-IboG371bfCu7EtdkmEHVsjyENdzIWKhCpx0FUvL7nM0adS5eCvvzq1C8s_PV_w-3KgjCw")' }}>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-primary-text group-hover:text-primary transition-colors">Royal
                                    Blends</h3>
                                <p className="text-xs text-secondary-text uppercase tracking-widest mt-1">Chef Crafted</p>
                            </div>
                        </a>
                        {/* Category 4 */}
                        <a className="group flex flex-col items-center gap-4 text-center cursor-pointer" href="#">
                            <div
                                className="w-full aspect-square overflow-hidden rounded-full border-4 border-white shadow-md group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                    data-alt="Ayurvedic herbs and roots in a rustic setting"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZioK-FzZS9HLvEyfFNXfnbcG64aP15c9hIClp9zaUs5yL777G37uK7mE2JiY6qaN0aMeZLM8mf06l2kqPm9a6WqpmIz_Dn919edNQCc-H3Mz93IhMg3-gAvpoBbT9MKtb8pGFSVcF_LtbayYPqxayC8Yb65Lz21OWaWJL22RdZJnAE5gZBaQ1t1_QYEAkT0MNo85ZrjEE8dkvn9y_IdV8XzYy3sN6bF8_jPEYkTjUQ_LqMBe3TEvriWC8-MZdY727ToUGKnPH8zM")' }}>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-primary-text group-hover:text-primary transition-colors">
                                    Ayurvedic</h3>
                                <p className="text-xs text-secondary-text uppercase tracking-widest mt-1">Healing &amp; Wellness</p>
                            </div>
                        </a>
                        {/* Category 5 */}
                        <a className="group flex flex-col items-center gap-4 text-center cursor-pointer" href="#">
                            <div
                                className="w-full aspect-square overflow-hidden rounded-full border-4 border-white shadow-md group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                    data-alt="Elegant gift box containing assorted spice jars"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJvn02ucUa45K1JOeLPxstILMveSWfaORjPV5i28RStM86UwWOc51zheczDGfbkK2txIsi5Juu2Brpt2LvO9yT4c_plzERvylttFZzCnkPsR_t0bhpNaZoqSoRMOe_icpT1UD_nHcZftEsMPIY6HZWq0C2vGYW-eexOVQPEHJKl4YcY-E9a4hS4M5JTfxrLNC5AyVPkywEtouUCpmC8QySBIZeMq5MwrK037bFExfdqS1rJyKHhvR9m3sGGD1jyWKnY4nMdao-DZo")' }}>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-primary-text group-hover:text-primary transition-colors">
                                    Export Packs</h3>
                                <p className="text-xs text-secondary-text uppercase tracking-widest mt-1">Gifts &amp; Bulk</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            {/* Featured Products Section */}
            <div className="w-full py-20 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Best Sellers</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-3 text-primary-text">Taste the Exquisite</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Product Card 1 */}
                        <div className="group relative flex flex-col gap-3">
                            <Link to="/product/1" className="relative w-full aspect-[4/5] bg-[#f8f8f5] rounded-xl overflow-hidden mb-2 cursor-pointer">
                                <span
                                    className="absolute top-3 left-3 bg-primary text-[#1c180d] text-xs font-bold px-2 py-1 rounded-sm z-10">BESTSELLER</span>
                                <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0"
                                    data-alt="Jar of Kashmiri Saffron on a light background"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5WClkkVLfTTMW89owBLFn_oPf6kVQlzijSa5hBkeVBl2aw3_xt0Z5bYI0H71jnNrDJBRLBLEsBQMmFfrgf9UkQ75EBa30MPbVwFmcixHSSkByxJxzJUTiMFlBiEf1osemwtqFZnQg7F6t8kl9WEQfAxmFhKT9Ry7WJyW4BrCJfn_BBvnj4gehk_7QrHkOkKVY7eTptoRJru2XsUdhiOKVEvZWE1tSEGB0kqyS_CDBnHwJ5Y0JtIIUuNJGz111OA-u3EZv7y_efUw")' }}>
                                </div>
                                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-105"
                                    data-alt="Close up of saffron strands showing texture"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9grSggkMjfVDNAFKBadQJcnX4-NyNBZFF5x4781ZLrBbTQK4K2D0_NuaZT4eg7yeBI1s_URw319fLk_-443lh_WBBxYDrwtfQhvhQXwAU1rRHBhkWr7Mv-tOxRUHZjaZEgz9okOWq9P7ZI2jvZ-4a7i-vnwm_qr_NdSmzpc6rKtaRXgjI_jMXiekNUHoUAet1HMVP-ZoXmCNWCS_tC2NvPfEYBNWdygzm310YQAtDZiDcf1tfgQ4PdzWB6q_SvvDlFmmAkpmnU7k")' }}>
                                </div>
                                <button
                                    className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-primary-text font-bold text-sm px-6 py-3 rounded-full shadow-lg hover:bg-primary whitespace-nowrap">
                                    Add to Cart
                                </button>
                            </Link>
                            <div className="flex flex-col">
                                <Link to="/product/1">
                                    <h3
                                        className="text-lg font-bold text-primary-text leading-tight group-hover:text-primary transition-colors">
                                        Kashmiri Saffron (1g)</h3>
                                </Link>
                                <p className="text-secondary-text text-sm">Mongra Grade A++</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-primary font-bold">$18.00</span>
                                    <div className="flex text-primary text-xs">
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star_half</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product Card 2 */}
                        <div className="group relative flex flex-col gap-3">
                            <Link to="/product/2" className="relative w-full aspect-[4/5] bg-[#f8f8f5] rounded-xl overflow-hidden mb-2 cursor-pointer">
                                <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0"
                                    data-alt="Jar of Green Cardamom pods"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQMrMSrB4MZsefEoiPgQ1SSF5FW9JiULHNvJeiSaauFE-TvVND0Gvd6NgqpcIPJho0td5Y0FyGDFtpFN7ez7XgaIPg08CdLptp4L3WAkG9bIqVUIoSuN_2wvJyr0zDRMPHzwi0RuL4ie9myBxA2pSeIHHCdViPIHHV3pTP4OkPoMMGe29X2x9bMsIlsxl23XPr3USxXA8YNVfqgRNDJ2gMchxYBlhtrvcXQX-DkFKpdUGBBl-NMbk9xVd5pDDfcCrogjWAu-_KrIk")' }}>
                                </div>
                                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-105"
                                    data-alt="Macro shot of green cardamom pods"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJ_huJzgqsMPCm142ZwnoDXt5jO-VYQiT37Ou3wZ9pc2m9zZLfm7okzfCAqKZtCveYoeln8LlrVYb8pKO4jFDx37QviObUMpwJvp2MT1WRc7fB7jMYEpJbEVJBXbs3FobCTlYXkh_owPJpZRA3pTCHnIIixuBa74RQZHo3lavOz6N1_7qYqgg8aFvPU07VAG7ugrFXKlEa3FCIPqUA7ZemsiziO69UwV8OkSzJDg6pt3r_BgOdTu-tirdRglTBhoiZ-Lu_-9jddUU")' }}>
                                </div>
                                <button
                                    className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-primary-text font-bold text-sm px-6 py-3 rounded-full shadow-lg hover:bg-primary whitespace-nowrap">
                                    Add to Cart
                                </button>
                            </Link>
                            <div className="flex flex-col">
                                <Link to="/product/2">
                                    <h3
                                        className="text-lg font-bold text-primary-text leading-tight group-hover:text-primary transition-colors">
                                        Alleppey Green Cardamom</h3>
                                </Link>
                                <p className="text-secondary-text text-sm">8mm Jumbo Pods</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-primary font-bold">$12.50</span>
                                    <div className="flex text-primary text-xs">
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product Card 3 */}
                        <div className="group relative flex flex-col gap-3">
                            <Link to="/product/3" className="relative w-full aspect-[4/5] bg-[#f8f8f5] rounded-xl overflow-hidden mb-2 cursor-pointer">
                                <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0"
                                    data-alt="Bag of Lakadong Turmeric Powder"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHv1oP7pBoi6Kh8LnHekt6lsNpi5G1L3wb_3sh-SCfcwQOzJl9SFXKKgMZBp6RkJsFUNB0iODnllgI1ghtWfCcwrpq57LkpwKfObsuHVroxz1kYBlwT5HVfkyvJu83R9p8hHrWD4z3lWi40GKLzMfkyHogngRj5DVQCVwm4sD0oAZBtbzObVg8H8Iyk6wRmH0wfXEKcgTqeuViRCUN1w-q0Wtps73njsHIMJHG0s6SrFH4CzbomyAx520xP9LTvWBNeThL3qT87w4")' }}>
                                </div>
                                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-105"
                                    data-alt="Vibrant turmeric powder texture"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsKE3KsBHlV1CTFe9nR3EvnG20YBtuD68btkh2Ei3-0GNMRP76uOIK7p2XGygs_iPcV6oKtVSqUHJxwz0VZ8asLvaY4UcjGJ0LEgXUpVCLujhz_2N_N03Zr_xy8pkRGrRiU9t1pmnYencf_tDQi48CqC7rE50vj-z6crLssYbGOEox-TKm40aDPG0XoPF397W_nwWwair5sVtZlrqAggEPtpaz6pakuyfXKypW73gLQsM4jHmBXyBRww4vnbW1vD_GcGVVDKEpNlo")' }}>
                                </div>
                                <button
                                    className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-primary-text font-bold text-sm px-6 py-3 rounded-full shadow-lg hover:bg-primary whitespace-nowrap">
                                    Add to Cart
                                </button>
                            </Link>
                            <div className="flex flex-col">
                                <Link to="/product/3">
                                    <h3
                                        className="text-lg font-bold text-primary-text leading-tight group-hover:text-primary transition-colors">
                                        Lakadong Turmeric</h3>
                                </Link>
                                <p className="text-secondary-text text-sm">High Curcumin (5%+)</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-primary font-bold">$9.00</span>
                                    <div className="flex text-primary text-xs">
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star_border</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product Card 4 */}
                        <div className="group relative flex flex-col gap-3">
                            <Link to="/product/4" className="relative w-full aspect-[4/5] bg-[#f8f8f5] rounded-xl overflow-hidden mb-2 cursor-pointer">
                                <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0"
                                    data-alt="Black Peppercorns in a jar"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZpL2VlwYyN1KfKHa_97TwY0qwwk7Cac6n-J6Zhtie6wIZO5vMW-2Y3wot2Ltmj-7PcFEQ7BfPGv5PbsO5I4mtPj1hj7GyEoTzTbB3h7XW4xo7bn4nJNt829-jLI9bqbDQ4ANKfP1vCMZLJy9UmemmXfuzMhMAjjD-oSkYtL00L4N8LoHIA6wg2G6tiuWAOgC2Q8_iwG_alEe8S_jFnmg9Xn8J0sMHi2MEFaCfiZEPfSp3qP0GE2nZyiLhZRVm7unKU1OihXubUAs")' }}>
                                </div>
                                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-105"
                                    data-alt="Macro of black peppercorns"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJAe31LlJMA3YwqffPYNtKM1K-3wtmHXF861bic0x3SO2GsH3J-PqwiRUpg3Eq-HeqgZaIp_CdF0KOGm6cGoi4DVuSpkDaKXcBR7m8LPz9D3eOSCymYTPL3pMd3WYdKmUvcAI2c9kxI0kWDqis46YhLWVWZzXKNkRRMBDObcgDylFeqPkJZaVKpvydkPvh4tB32aUOw-GIEX4a6nQHJmu-A-DzftbkKFXPvwbn7AiAOYf7ZT-zhtwbpTgbbGes8zbRIwLO83z4mV8")' }}>
                                </div>
                                <button
                                    className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-primary-text font-bold text-sm px-6 py-3 rounded-full shadow-lg hover:bg-primary whitespace-nowrap">
                                    Add to Cart
                                </button>
                            </Link>
                            <div className="flex flex-col">
                                <Link to="/product/4">
                                    <h3
                                        className="text-lg font-bold text-primary-text leading-tight group-hover:text-primary transition-colors">
                                        Tellicherry Black Pepper</h3>
                                </Link>
                                <p className="text-secondary-text text-sm">Bold &amp; Aromatic</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-primary font-bold">$11.00</span>
                                    <div className="flex text-primary text-xs">
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined !text-[14px] fill-current">star</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Trust / Why Our Spices Section */}
            <div className="w-full bg-[#fcfbf8] py-24 relative overflow-hidden">
                {/* Abstract pattern background */}
                <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,85.8,-7.1C81.5,6.2,70.2,18.5,60.2,29.1C50.2,39.7,41.5,48.6,31.7,56.3C21.9,64,10.9,70.5,-1.3,72.7C-13.5,74.9,-27,72.8,-39.2,66.1C-51.4,59.4,-62.3,48.1,-70.5,35C-78.7,21.9,-84.2,7,-82.4,-7.1C-80.6,-21.2,-71.5,-34.5,-60.7,-43.8C-49.9,-53.1,-37.4,-58.4,-25,-61.8C-12.6,-65.2,-0.3,-66.7,13.2,-70.1C26.7,-73.5,53.4,-78.8,44.7,-76.4Z"
                            fill="#9c8749" transform="translate(100 100)"></path>
                    </svg>
                </div>
                <div className="max-w-[960px] mx-auto px-4 md:px-10 flex flex-col gap-16 relative z-10">
                    <div className="text-center">
                        <h2 className="text-primary-text text-3xl md:text-5xl font-bold tracking-tight mb-4">Why Swarajya Agro Foods?
                        </h2>
                        <p className="text-secondary-text text-lg font-light">Experience the difference of purity, tradition, and
                            ethical sourcing.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div
                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-[#e8e2ce] shadow-sm hover:shadow-lg transition-shadow">
                            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <span className="material-symbols-outlined !text-4xl">agriculture</span>
                            </div>
                            <h3 className="text-xl font-bold text-primary-text mb-2">Sourced from the Source</h3>
                            <p className="text-secondary-text leading-relaxed">Single-origin spices procured directly from partner
                                farms in Kerala &amp; Northeast India.</p>
                        </div>
                        {/* Feature 2 */}
                        <div
                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-[#e8e2ce] shadow-sm hover:shadow-lg transition-shadow">
                            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <span className="material-symbols-outlined !text-4xl">ac_unit</span>
                            </div>
                            <h3 className="text-xl font-bold text-primary-text mb-2">Cold-Ground Technology</h3>
                            <p className="text-secondary-text leading-relaxed">Traditional grinding at low temperatures to preserve
                                volatile oils and natural potency.</p>
                        </div>
                        {/* Feature 3 */}
                        <div
                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-[#e8e2ce] shadow-sm hover:shadow-lg transition-shadow">
                            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <span className="material-symbols-outlined !text-4xl">workspace_premium</span>
                            </div>
                            <h3 className="text-xl font-bold text-primary-text mb-2">Export Quality Certified</h3>
                            <p className="text-secondary-text leading-relaxed">Meeting rigorous international standards: FSSAI, FDA
                                approved, and 100% Organic.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Storytelling / Heritage Section */}
            <div className="w-full flex flex-col lg:flex-row bg-[#221e10] text-white overflow-hidden">
                <div className="lg:w-1/2 relative min-h-[500px]">
                    <div className="absolute inset-0 bg-cover bg-center"
                        data-alt="Traditional Indian spice market scene with burlap sacks and warm lighting"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCiLbqw6F4EbIk6np3UinzvNeeJSQUE2QweVaEG6HpZoSR8RwmeNHZPJWXBcX5Aj7dFUkqUJWCqp2QcZhUBFYK9sJrzBf4RlOd9Ubh3GImn_AZfC8ms3tGBoOuQOhMwh8OjgE4Db1XFQexsENSAER2hzJHtWPFOi31ZhXXLZ9LcI8a7IElWyIdxgZRLmr-uilXfNx4nYVsyaZoNVse7xLCwWCIQpayc4nUY_x5C8Kv-2R36mXIuqvLcit878cybdIMgwFENcVFrso")' }}>
                    </div>
                </div>
                <div className="lg:w-1/2 p-10 md:p-20 flex flex-col justify-center gap-8 relative">
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                        <span className="material-symbols-outlined !text-[200px]">temple_hindu</span>
                    </div>
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Legacy</span>
                    <h2 className="text-4xl md:text-5xl font-serif leading-tight">Tracing the Roots of <br /><span
                        className="text-primary">Flavor</span></h2>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                        Swarajya Agro Foods was born from a desire to bring the authentic taste of Indian households to the global
                        table. We travel to the remote corners of the spice coast to find farmers who still honor ancient
                        cultivation methods.
                    </p>
                    <a className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase tracking-wide text-sm"
                        href="#">
                        Read Our Full Story
                        <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
                    </a>
                </div>
            </div>
            {/* Testimonials */}
            <div className="w-full bg-background-light py-20">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                    <h2 className="text-center text-3xl font-bold text-primary-text mb-16">Loved by Chefs &amp; Home Cooks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#f4f0e7] flex flex-col gap-4">
                            <div className="flex text-primary">
                                <span className="material-symbols-outlined fill-current">star</span>
                                <span className="material-symbols-outlined fill-current">star</span>
                                <span className="material-symbols-outlined fill-current">star</span>
                                <span className="material-symbols-outlined fill-current">star</span>
                                <span className="material-symbols-outlined fill-current">star</span>
                            </div>
                            <p className="text-primary-text italic text-lg leading-relaxed">"The aroma of the cardamom took me
                                straight back to my grandmother's kitchen in Kerala. Absolutely authentic and fresh."</p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="size-10 rounded-full bg-gray-200 bg-cover bg-center" data-alt="Portrait of a woman"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmx2mQjBVqtzoISS7xZeYSD4hztWd-9MVbx6qdwJXC06B9bKgUhnz2U1hzW770hVz0cbeZI7JwLlYsIImaguojXxbTcnqE_gC9jTVs7qQgi8I6udahuJdZ_ovB2ySPN06QbzajQrcI3KiVvyz_G9X-RhGK8AGJwN8qrZJoywgn6-OWsE32mFMdsiGJo_5PNleJO5wCcA4sVF9fQ8bJsjsFLxMTbOMD-JuFcLMfOfcxmmObp_JrtGDt52bpLPBkbRgSOIZBtzjXoP8")' }}>
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-primary-text">Anjali M.</p>
                                    <p className="text-xs text-secondary-text">Verified Buyer, London</p>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#f4f0e7] flex flex-col gap-4">
                            <div className="flex text-primary">
                                <span className="material-symbols-outlined fill-current">star</span>
                                <span className="material-symbols-outlined fill-current">star</span>
                                <span className="material-symbols-outlined fill-current">star</span>
                                <span className="material-symbols-outlined fill-current">star</span>
                                <span className="material-symbols-outlined fill-current">star</span>
                            </div>
                            <p className="text-primary-text italic text-lg leading-relaxed">"I've tried many turmeric brands, but
                                the Lakadong turmeric from Swarajya Agro Foods is in a league of its own. The color is incredibly
                                vibrant."</p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="size-10 rounded-full bg-gray-200 bg-cover bg-center" data-alt="Portrait of a man"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxEMS9XZZl-HGAESPqRM6_tuaJIsz0-OVS-gOLLZHpwAt0zOIX9zIP1xsqbULt7nSoM40emekQ3-OQGOEA_Px7T-TE96YRvoNPskNXA7nV6Xb2Ncws0l7op2FWM8ffFAlgJEeeVk89rCpnk2_TbsC4PWke6ErUzyo-sgwUz3oYDLTAfUi0XK7oHxRzp1Bq-n0wt5cNShVZwuXmMw0m2WXyGrEyTnh6EhFDaEj4RPHQyGwbijsh1pZOB2PbmWpnapmcLWtBAlQxvug")' }}>
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-primary-text">David R.</p>
                                    <p className="text-xs text-secondary-text">Chef, New York</p>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial 3 */}
                        <div
                            className="bg-white p-8 rounded-xl shadow-sm border border-[#f4f0e7] flex flex-col gap-4 md:hidden lg:flex">
                            <div className="flex text-primary">
                                <span className="material-symbols-outlined fill-current">star</span>
                                <span className="material-symbols-outlined fill-current">star</span>
                                <span className="material-symbols-outlined fill-current">star</span>
                                <span className="material-symbols-outlined fill-current">star</span>
                                <span className="material-symbols-outlined fill-current">star</span>
                            </div>
                            <p className="text-primary-text italic text-lg leading-relaxed">"Fast shipping and the packaging is
                                gorgeous. It makes for a perfect gift. I'm ordering the spice box for all my friends."</p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="size-10 rounded-full bg-gray-200 bg-cover bg-center" data-alt="Portrait of a woman"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7_2Wzg4YuUGwvlu6k7GDHrpgQXRkN1e3cz_MrGrwyL1XMvM_zF9VseUB69uzyW1x08pCNJur19rA8qyxpzwZj7ihxHmFr0F9KELTUkzP0hc3BjM1pnbwrbCSqUA_u02Zg3A7gqdJ29I-fkOSagcCV67WjtVfWAezQloVtmRpwBdRYXnfkU95khFJCkrDjbKf4xK5pSwomuzjwd6UqRN9yrJEjaVShvLDxzbNiMpR-oGfujZpXTP03LKNIeT0QODg5ya18xn3mcT0")' }}>
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-primary-text">Sarah L.</p>
                                    <p className="text-xs text-secondary-text">Verified Buyer, Sydney</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
