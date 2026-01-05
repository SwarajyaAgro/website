import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
    return (
        <div className="layout-container flex grow flex-col z-10">
            <div className="flex flex-1 justify-center py-6 px-4 md:px-8 lg:px-12">
                <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap gap-2 px-2 py-4 mb-4 text-sm">
                        <Link className="text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                            to="/">Home</Link>
                        <span className="text-text-muted dark:text-gray-600">/</span>
                        <Link className="text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                            to="#">Spices</Link>
                        <span className="text-text-muted dark:text-gray-600">/</span>
                        <span className="text-text-main dark:text-white font-semibold">Kashmiri Royal Saffron</span>
                    </div>
                    {/* Hero Section with Split Layout */}
                    <div className="@container">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12">
                            {/* Left Column: Media Gallery */}
                            <div className="lg:col-span-7 flex flex-col gap-6">
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg">
                                    <div
                                        className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10">
                                    </div>
                                    <div className="w-full h-full bg-center bg-cover bg-no-repeat transform group-hover:scale-105 transition-transform duration-700"
                                        data-alt="Macro shot of vibrant red saffron threads in a golden bowl"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjUJ7JC1zHXlbtXgvo1WdcjAZ9ZQP5sAV-1gv4HFt5p2Dk_UK4enXiEa4XAIh8BL4eg0D2XD3Vbr-hOTmDBt9BxA3iB6Q24Sog3Drf9EYIW6liOJPUycp3AdJAhOYi5ipfsDuUkNL-euo4l-D2XOnUkU0LIckG9QAMbM7tHHAU3X3EflusfrvxsVG39CHKI53FsL1uceLPK0bExkXedHB0ggwpZwx_Te_cwZ5Bz0nNhohK9YUY3FW2no74tD9vlBH8s_QVJKqNEQE")' }}>
                                    </div>
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <div
                                            className="inline-flex items-center gap-1 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur px-3 py-1.5 rounded-lg border border-border-light dark:border-border-dark shadow-sm">
                                            <span
                                                className="material-symbols-outlined text-primary text-sm">location_on</span>
                                            <span
                                                className="text-xs font-bold uppercase tracking-wider text-text-main dark:text-white">Harvested
                                                in Pampore</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div
                                        className="aspect-square rounded-xl overflow-hidden cursor-pointer border-2 border-primary">
                                        <div className="w-full h-full bg-cover bg-center"
                                            data-alt="Close up of saffron threads texture"
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1p-Nnnf5hOAkuLHCJY105TLzw0HNCzyhwbTeP_WwqLu75vQ2HT6LBYJpH0pXolzl289y4c44o9NAPIWaYN6v-tlWh4KRgIn2GZFuz3ZEuWjjemRRpISqLQ3XiGuydbO3MMDRcjjZCmIXERUc6vRv3MCsHWE-mPyK_TivZmczzQnVnv9-pP4pdfax8gAZQgsLZDDFdHXG7y7dnjjBSfosetwPLGRU4EQuockgBllrSiBotyR4-UX054zRXu07DQoEE78DBFM9Anzk")' }}>
                                        </div>
                                    </div>
                                    <div
                                        className="aspect-square rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-border-light dark:hover:border-border-dark">
                                        <div className="w-full h-full bg-cover bg-center"
                                            data-alt="Saffron infused in warm milk in a glass"
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAu95M-Xd3Nw0Exunglr9TBCDa3D8zr5iReWSadwm5tXDjvZAbEiqpwpYrYuxjmdl8m1kASIPhiAwVYtKuxAsCpPMKNvwzW61EWrmj6YqRBRpfNs9-ibkdvOsYaqx48yT76BDKw_15GaVLXAd5BKFy90KjvGxoaRUAkCSkjnTl8wLQNqWxHg7CFktr7LjnHymxGUzQU0LcpxEet5cbi8gwuOg5jDziegye1eXT50Db5w2Fbp-Avp5FUiVx0_C9s_M6aQODV4WIKxhM")' }}>
                                        </div>
                                    </div>
                                    <div
                                        className="aspect-square rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-border-light dark:hover:border-border-dark relative">
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
                                            <span
                                                className="material-symbols-outlined text-white text-3xl">play_circle</span>
                                        </div>
                                        <div className="w-full h-full bg-cover bg-center"
                                            data-alt="Video thumbnail of saffron harvesting process"
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6MDmiCXAyE8pd99-NWSmzdiL1ESp-rRas5W6M992y-vr9VcaZYzZAjmm9ZUIKEjDDhkOgGeYw2gbIZpNtB3pXkbic_GWpVKdAxiXEEKCu8cxUbC7X9FOJsI8VEUVlHZZ3aOInipRl3LScNpdnl4JIMyD99x08wYhJRqtEq8h3hiImhIK0pFUccLcZh-oJ7u4Tk_8l8Kev-RQ4n1icO8B1K8jLCwjC8ec7y3AWvZYXEHyGfEsTtOEsDnrk_jcXtWqaLtOompPaFFM")' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right Column: Product Details */}
                            <div className="lg:col-span-5 flex flex-col gap-8">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="px-2 py-1 bg-primary/20 text-text-main dark:text-primary rounded text-xs font-bold uppercase tracking-wider">Premium
                                            Grade A++</span>
                                        <span
                                            className="px-2 py-1 bg-border-light/50 dark:bg-border-dark/50 text-text-muted dark:text-gray-400 rounded text-xs font-bold uppercase tracking-wider">Ayurvedic
                                            Staple</span>
                                    </div>
                                    <h1
                                        className="text-text-main dark:text-white text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight">
                                        Kashmiri Royal Saffron
                                    </h1>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <span
                                                className="text-primary material-symbols-outlined text-lg fill-1">star</span>
                                            <span
                                                className="text-primary material-symbols-outlined text-lg fill-1">star</span>
                                            <span
                                                className="text-primary material-symbols-outlined text-lg fill-1">star</span>
                                            <span
                                                className="text-primary material-symbols-outlined text-lg fill-1">star</span>
                                            <span
                                                className="text-primary material-symbols-outlined text-lg fill-1">star_half</span>
                                            <span
                                                className="ml-2 text-sm font-semibold underline decoration-border-light decoration-2 underline-offset-4 dark:text-gray-300">4.9
                                                (128 reviews)</span>
                                        </div>
                                    </div>
                                    <p className="text-text-muted dark:text-gray-300 text-lg leading-relaxed">
                                        The Red Gold of the Himalayas. Hand-harvested from the valleys of Pampore, known
                                        for its deep crimson stigmas and potent aroma.
                                    </p>
                                    <div
                                        className="flex items-end gap-3 py-2 border-b border-border-light dark:border-border-dark pb-6">
                                        <span className="text-3xl font-black text-text-main dark:text-white">₹1,250</span>
                                        <span
                                            className="text-lg text-text-muted dark:text-gray-500 line-through pb-1">₹1,500</span>
                                        <span
                                            className="text-sm font-bold text-green-600 dark:text-green-400 pb-1.5 ml-auto">In
                                            Stock</span>
                                    </div>
                                </div>
                                {/* Flavor Visualizer */}
                                <div
                                    className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-5 shadow-sm">
                                    <h3
                                        className="text-sm font-bold uppercase tracking-wider mb-4 text-text-main dark:text-white">
                                        Flavor Profile</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1">
                                            <div
                                                className="flex justify-between text-xs font-medium text-text-muted dark:text-gray-400">
                                                <span>Aroma</span>
                                                <span className="text-primary">High</span>
                                            </div>
                                            <div
                                                className="h-2 w-full bg-border-light dark:bg-border-dark rounded-full overflow-hidden">
                                                <div className="h-full bg-primary w-[95%]"></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div
                                                className="flex justify-between text-xs font-medium text-text-muted dark:text-gray-400">
                                                <span>Color</span>
                                                <span className="text-primary">Deep</span>
                                            </div>
                                            <div
                                                className="h-2 w-full bg-border-light dark:bg-border-dark rounded-full overflow-hidden">
                                                <div className="h-full bg-primary w-[90%]"></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div
                                                className="flex justify-between text-xs font-medium text-text-muted dark:text-gray-400">
                                                <span>Earthy</span>
                                                <span className="text-primary">Med</span>
                                            </div>
                                            <div
                                                className="h-2 w-full bg-border-light dark:bg-border-dark rounded-full overflow-hidden">
                                                <div className="h-full bg-primary w-[60%]"></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div
                                                className="flex justify-between text-xs font-medium text-text-muted dark:text-gray-400">
                                                <span>Sweetness</span>
                                                <span className="text-primary">Low</span>
                                            </div>
                                            <div
                                                className="h-2 w-full bg-border-light dark:bg-border-dark rounded-full overflow-hidden">
                                                <div className="h-full bg-primary w-[30%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Actions */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-4">
                                        <div
                                            className="flex items-center border border-border-light dark:border-border-dark rounded-lg h-12 px-3 bg-surface-light dark:bg-surface-dark">
                                            <button
                                                className="size-8 flex items-center justify-center text-text-muted hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-lg">remove</span>
                                            </button>
                                            <span
                                                className="w-8 text-center font-bold text-text-main dark:text-white">1</span>
                                            <button
                                                className="size-8 flex items-center justify-center text-text-muted hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-lg">add</span>
                                            </button>
                                        </div>
                                        <button
                                            className="flex-1 h-12 rounded-lg bg-primary hover:bg-yellow-400 text-text-main font-bold text-base tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                                            Add to Cart
                                        </button>
                                    </div>
                                    <button
                                        className="w-full h-12 rounded-lg border-2 border-text-main dark:border-white text-text-main dark:text-white font-bold hover:bg-text-main hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                                        Buy Now
                                    </button>
                                </div>
                                {/* Benefits */}
                                <div className="grid grid-cols-3 gap-2 pt-2">
                                    <div
                                        className="flex flex-col items-center justify-center p-3 rounded-lg bg-background-light dark:bg-surface-dark/50 border border-transparent hover:border-border-light dark:hover:border-border-dark text-center">
                                        <span className="material-symbols-outlined text-primary mb-1">eco</span>
                                        <span className="text-xs font-medium text-text-muted dark:text-gray-400">100%
                                            Organic</span>
                                    </div>
                                    <div
                                        className="flex flex-col items-center justify-center p-3 rounded-lg bg-background-light dark:bg-surface-dark/50 border border-transparent hover:border-border-light dark:hover:border-border-dark text-center">
                                        <span className="material-symbols-outlined text-primary mb-1">handshake</span>
                                        <span className="text-xs font-medium text-text-muted dark:text-gray-400">Fair
                                            Trade</span>
                                    </div>
                                    <div
                                        className="flex flex-col items-center justify-center p-3 rounded-lg bg-background-light dark:bg-surface-dark/50 border border-transparent hover:border-border-light dark:hover:border-border-dark text-center">
                                        <span className="material-symbols-outlined text-primary mb-1">local_shipping</span>
                                        <span className="text-xs font-medium text-text-muted dark:text-gray-400">Free
                                            Shipping</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Narrative & Usage Section */}
                    <div
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-border-light dark:border-border-dark pt-12">
                        {/* Left: Accordions for Deep Dives */}
                        <div className="lg:col-span-8 flex flex-col gap-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6 text-text-main dark:text-white">Behind the Spice</h2>
                                <div className="flex flex-col gap-4">
                                    <details
                                        className="flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-6 py-2 group shadow-sm transition-all open:shadow-md"
                                        open="">
                                        <summary
                                            className="flex cursor-pointer items-center justify-between gap-6 py-3 select-none">
                                            <div className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-primary">history_edu</span>
                                                <p className="text-text-main dark:text-white text-base font-bold">The Origin
                                                    Story: Harvested in Pampore</p>
                                            </div>
                                            <span
                                                className="material-symbols-outlined text-text-muted transition-transform group-open:rotate-180">expand_more</span>
                                        </summary>
                                        <div className="pt-2 pb-4 px-2">
                                            <p className="text-text-muted dark:text-gray-300 text-sm leading-7">
                                                Our saffron is sourced directly from generational farmers in Pampore,
                                                Kashmir, often called the "Saffron Town". The unique soil composition,
                                                known as 'Karewa', combined with the crisp Himalayan air, produces
                                                saffron with the highest crocin content (color strength) in the world.
                                                Each flower is hand-picked at dawn before the sun rises to preserve the
                                                potency of the stigma. It takes approximately 150,000 flowers to produce
                                                just one kilogram of this royal spice.
                                            </p>
                                        </div>
                                    </details>
                                    <details
                                        className="flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-6 py-2 group shadow-sm transition-all open:shadow-md">
                                        <summary
                                            className="flex cursor-pointer items-center justify-between gap-6 py-3 select-none">
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className="material-symbols-outlined text-primary">self_improvement</span>
                                                <p className="text-text-main dark:text-white text-base font-bold">Ayurvedic
                                                    Wisdom: Tridoshic Balance</p>
                                            </div>
                                            <span
                                                className="material-symbols-outlined text-text-muted transition-transform group-open:rotate-180">expand_more</span>
                                        </summary>
                                        <div className="pt-2 pb-4 px-2">
                                            <p className="text-text-muted dark:text-gray-300 text-sm leading-7">
                                                In Ayurveda, Saffron (Kumkuma) is considered a 'Sattvic' spice that
                                                promotes spiritual growth and compassion. It is prized for its ability
                                                to balance all three doshas (Vata, Pitta, and Kapha), though it is
                                                especially effective for pacifying Vata and Kapha. It is traditionally
                                                used to improve digestion, boost mood (Ojas), and enhance complexion
                                                (Varnaya).
                                            </p>
                                        </div>
                                    </details>
                                    <details
                                        className="flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-6 py-2 group shadow-sm transition-all open:shadow-md">
                                        <summary
                                            className="flex cursor-pointer items-center justify-between gap-6 py-3 select-none">
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className="material-symbols-outlined text-primary">restaurant_menu</span>
                                                <p className="text-text-main dark:text-white text-base font-bold">Culinary
                                                    Notes: Floral &amp; Honeyed</p>
                                            </div>
                                            <span
                                                className="material-symbols-outlined text-text-muted transition-transform group-open:rotate-180">expand_more</span>
                                        </summary>
                                        <div className="pt-2 pb-4 px-2">
                                            <p className="text-text-muted dark:text-gray-300 text-sm leading-7">
                                                The flavor profile begins with a distinctively pungent, earthy hay-like
                                                aroma, which quickly opens up into notes of sweet floral honey and
                                                metallic brightness. When steeped in warm liquid (milk, water, or
                                                broth), it releases a brilliant golden-yellow dye. Best used in
                                                Biryanis, Kheer, Risottos, and Paellas.
                                            </p>
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>
                        {/* Right: Review Summary */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-24">
                                <h2 className="text-2xl font-bold mb-6 text-text-main dark:text-white">Customer Reviews</h2>
                                <div
                                    className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6 shadow-sm">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex items-baseline gap-4">
                                            <p
                                                className="text-text-main dark:text-white text-5xl font-black tracking-tighter">
                                                4.9</p>
                                            <div className="flex flex-col">
                                                <div className="flex gap-1">
                                                    <span
                                                        className="text-primary material-symbols-outlined text-xl fill-1">star</span>
                                                    <span
                                                        className="text-primary material-symbols-outlined text-xl fill-1">star</span>
                                                    <span
                                                        className="text-primary material-symbols-outlined text-xl fill-1">star</span>
                                                    <span
                                                        className="text-primary material-symbols-outlined text-xl fill-1">star</span>
                                                    <span
                                                        className="text-primary material-symbols-outlined text-xl fill-1">star_half</span>
                                                </div>
                                                <p className="text-text-muted dark:text-gray-400 text-sm mt-1">Based on 128
                                                    verified reviews</p>
                                            </div>
                                        </div>
                                        <div className="w-full h-px bg-border-light dark:bg-border-dark"></div>
                                        <div className="grid grid-cols-[24px_1fr_40px] items-center gap-y-2 text-sm">
                                            <span className="text-text-main dark:text-gray-300 font-medium">5</span>
                                            <div
                                                className="flex h-2 w-full overflow-hidden rounded-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                                                <div className="rounded-full bg-primary" style={{ width: '82%' }}></div>
                                            </div>
                                            <span className="text-text-muted dark:text-gray-500 text-right">82%</span>
                                            <span className="text-text-main dark:text-gray-300 font-medium">4</span>
                                            <div
                                                className="flex h-2 w-full overflow-hidden rounded-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                                                <div className="rounded-full bg-primary" style={{ width: '15%' }}></div>
                                            </div>
                                            <span className="text-text-muted dark:text-gray-500 text-right">15%</span>
                                            <span className="text-text-main dark:text-gray-300 font-medium">3</span>
                                            <div
                                                className="flex h-2 w-full overflow-hidden rounded-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                                                <div className="rounded-full bg-primary" style={{ width: '2%' }}></div>
                                            </div>
                                            <span className="text-text-muted dark:text-gray-500 text-right">2%</span>
                                            <span className="text-text-main dark:text-gray-300 font-medium">2</span>
                                            <div
                                                className="flex h-2 w-full overflow-hidden rounded-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                                                <div className="rounded-full bg-primary" style={{ width: '1%' }}></div>
                                            </div>
                                            <span className="text-text-muted dark:text-gray-500 text-right">1%</span>
                                            <span className="text-text-main dark:text-gray-300 font-medium">1</span>
                                            <div
                                                className="flex h-2 w-full overflow-hidden rounded-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                                                <div className="rounded-full bg-primary" style={{ width: '0%' }}></div>
                                            </div>
                                            <span className="text-text-muted dark:text-gray-500 text-right">0%</span>
                                        </div>
                                        <button
                                            className="text-sm font-bold text-text-main dark:text-white hover:text-primary transition-colors mt-2 text-left underline decoration-2 underline-offset-4">
                                            Read all reviews
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Recipes Section */}
                <div className="flex flex-col py-16 gap-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl lg:text-3xl font-bold text-text-main dark:text-white">Pairs Well With
                        </h2>
                        <div className="flex gap-2">
                            <button
                                className="size-10 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
                                <span className="material-symbols-outlined">arrow_back</span>
                            </button>
                            <button
                                className="size-10 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x">
                        {/* Card 1 */}
                        <div
                            className="min-w-[280px] md:min-w-[320px] snap-start flex flex-col gap-3 group cursor-pointer">
                            <div className="overflow-hidden rounded-xl aspect-[4/3]">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Golden Saffron Milk in a clay cup"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-F76m8CyKc39-YPrqTWQjRdeBcKchl73giruaZlq2h5fscLn0cNA4PSjWiZGzxjKXJSDso1pD_N8MLXiIwn12SuVZPaqW22bFyIn6Udux6WQ0Fc1mYzu6W1EwSH4L3SuELubaApNaHrIID3V5YjzkMdmmjeQK_HWZMC40foldE4OBLxP6cJS1bxtfjZwGOqm6eNgey4xBo0X839BTRf896GkcTqNL3I-gTDr2Ryu_6NmSEI2Th50RMobohuLimOuMJsoUfrO_eE8")' }}>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-primary uppercase tracking-wide">Beverage</span>
                                <h3
                                    className="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                                    Royal Saffron Milk (Kesar Doodh)</h3>
                                <p className="text-sm text-text-muted dark:text-gray-400 mt-1">10 mins • Beginner</p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div
                            className="min-w-[280px] md:min-w-[320px] snap-start flex flex-col gap-3 group cursor-pointer">
                            <div className="overflow-hidden rounded-xl aspect-[4/3]">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Aromatic Hyderabadi Biryani"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZ7bFhLfZy7LY9P2YyMpkW3nFBUkOwlmkd88S3swV7Lcl8aKqADdW-oblgkhoXmaFbOuqBhCZyMztUNwTIOTPH3Zr22mUGebfN7Tdhpvb3jHqPD2mXcoG055wdV5AGy2DAy3jEoL2boDlxI-eW_jraMUanI9gIuEMBhKO7ynrh0fg6poUYV4Yf1uCsnpmdT6mgVnyZwE_5HW43eOyuXVNHFTmUZpOinWMENrgoNChPApFVqVm3W3jc6kie1meF6WFtObTX3vhSIVo")' }}>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-primary uppercase tracking-wide">Main
                                    Course</span>
                                <h3
                                    className="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                                    Authentic Chicken Biryani</h3>
                                <p className="text-sm text-text-muted dark:text-gray-400 mt-1">90 mins • Advanced</p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div
                            className="min-w-[280px] md:min-w-[320px] snap-start flex flex-col gap-3 group cursor-pointer">
                            <div className="overflow-hidden rounded-xl aspect-[4/3]">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Rice pudding dessert with saffron"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsnM8ruQ2dIngRuuzf4tL-PPeKYjvD6MTIF5BOHNuiQGARya8gX1_LKWScHjyoGro4bSHzm82KgKoNrHAnN_7rCSCYxLidm4uu25P0YKVHh_mkHBUB8PxjeDdEvHAluavDHvAvHWVLzcsN1nf_C9Sk36LC34KN3aJVC0uwz3eWHqIUkr-XvuArUTEXYeQFZjiJP4AEJYjCpCZK3VTsnC9I4Vxq8oFACY85ig_u1fHgQ3H3mshZOaB0KuSVDpwPs1HbnVUOkL1qerE")' }}>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-primary uppercase tracking-wide">Dessert</span>
                                <h3
                                    className="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                                    Creamy Saffron Rice Pudding</h3>
                                <p className="text-sm text-text-muted dark:text-gray-400 mt-1">45 mins • Intermediate
                                </p>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div
                            className="min-w-[280px] md:min-w-[320px] snap-start flex flex-col gap-3 group cursor-pointer">
                            <div className="overflow-hidden rounded-xl aspect-[4/3]">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Yellow saffron tea in glass cup"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUk4la5OuNOvoVMCeJxxPNMAdLTkxVEv-HirkSmiaPR7zzThQqbwXvbZAqlheMLhqNvJp9Kgm2TH_4u2EMPHnbyf61aJWhKFOad8siyJaKWgAhmKPo119mHmM3G_PBugIejEhomGfbZo04kCyyAEPHWuH7zF6s2Cvca_modx_PZdhHddwM6uikiMubZJLEeDGlpWLPzGFx9BiN1gjfdnSelhr0h8nZh0DM8-zP7n6nXR7ijYLk-0mY6Q8xZsuD88k7PM4XmPCgqB8")' }}>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-primary uppercase tracking-wide">Wellness</span>
                                <h3
                                    className="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                                    Kashmiri Kahwa Tea</h3>
                                <p className="text-sm text-text-muted dark:text-gray-400 mt-1">15 mins • Easy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sticky Mobile Bottom Bar (visible only on small screens) */}
            <div
                className="fixed bottom-0 left-0 right-0 p-4 bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark lg:hidden z-50 flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div className="flex flex-col">
                    <span className="text-xs text-text-muted dark:text-gray-400">Total</span>
                    <span className="font-bold text-lg text-text-main dark:text-white">₹1,250</span>
                </div>
                <button className="px-8 py-3 rounded-lg bg-primary text-text-main font-bold shadow-md">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
