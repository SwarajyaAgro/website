import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div className="px-6 md:px-12 lg:px-20 xl:px-40 py-8">
            <div className="max-w-[1280px] mx-auto">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 mb-8 text-sm">
                    <span className="font-bold text-primary">Cart</span>
                    <span
                        className="text-text-secondary dark:text-gray-500 material-symbols-outlined text-base">chevron_right</span>
                    <span className="text-text-secondary dark:text-gray-400">Details</span>
                    <span
                        className="text-text-secondary dark:text-gray-500 material-symbols-outlined text-base">chevron_right</span>
                    <span className="text-text-secondary dark:text-gray-400">Payment</span>
                </div>
                {/* Page Heading */}
                <div className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-text-main dark:text-white mb-3">Your
                        Selection</h1>
                    <p className="text-text-secondary dark:text-gray-400 text-lg flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-xl">local_shipping</span>
                        You are ₹49 away from free shipping.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Cart Items Column */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        {/* Header Row */}
                        <div
                            className="hidden md:flex justify-between border-b border-border-light dark:border-border-dark pb-4 text-sm font-medium text-text-secondary dark:text-gray-400">
                            <span className="w-1/2">Product</span>
                            <span className="w-1/4 text-center">Quantity</span>
                            <span className="w-1/4 text-right">Total</span>
                        </div>
                        {/* Item 1 */}
                        <div
                            className="group flex flex-col md:flex-row gap-6 p-4 md:p-6 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light/50 dark:border-border-dark hover:shadow-md transition-shadow">
                            <div className="flex gap-6 w-full md:w-1/2">
                                <div className="shrink-0">
                                    <div className="h-24 w-24 md:h-28 md:w-28 rounded-lg bg-gray-100 dark:bg-gray-800 bg-cover bg-center shadow-inner"
                                        data-alt="Premium glass jar of red saffron threads on marble"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjSaHsyCCCciyY9VqUaEkoSjrHaTwHvTTW2beWR1_6uhkDvqHkZGGXnEjFYDFrb3eV2GiPaSC4ONqc1QloOYAGkHReTp-FZpMiXm4fFwKdRKaKedUsQFn8_3buWmnJDerScaqIzR1vZsmtSqnobj9JRv_p2ErZnplqorDR8fyMyk9bgJb8wfLsHYGdtc21KZjnluuwhZFBxhYeEIWu2AQccq2SwvnGOLfnsfOsUbAP9veys1o3RuFKS9D0TsLxKE8x5BRxL5oa6ug")' }}>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between py-1">
                                    <div>
                                        <h3 className="text-lg font-bold text-text-main dark:text-white">Kashmiri Saffron
                                        </h3>
                                        <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">1 gram • Premium
                                            Grade A</p>
                                        <p className="text-xs text-primary mt-2 italic flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">psychiatry</span>
                                            Aromatic notes: Earthy, warm, bitter
                                        </p>
                                    </div>
                                    <button
                                        className="text-left text-xs font-semibold text-red-500 hover:text-red-600 mt-2 md:mt-0 underline decoration-red-200 underline-offset-2">Remove</button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between md:justify-center w-full md:w-1/4">
                                <div
                                    className="flex items-center gap-3 border border-border-light dark:border-border-dark rounded-full px-3 py-1 bg-background-light dark:bg-background-dark">
                                    <button
                                        className="w-6 h-6 flex items-center justify-center rounded-full text-text-secondary hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                        <span className="material-symbols-outlined text-sm">remove</span>
                                    </button>
                                    <span className="w-4 text-center font-medium text-text-main dark:text-white">1</span>
                                    <button
                                        className="w-6 h-6 flex items-center justify-center rounded-full text-text-secondary hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                        <span className="material-symbols-outlined text-sm">add</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-end w-full md:w-1/4">
                                <p className="text-xl font-bold text-text-main dark:text-white">₹950</p>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div
                            className="group flex flex-col md:flex-row gap-6 p-4 md:p-6 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light/50 dark:border-border-dark hover:shadow-md transition-shadow">
                            <div className="flex gap-6 w-full md:w-1/2">
                                <div className="shrink-0">
                                    <div className="h-24 w-24 md:h-28 md:w-28 rounded-lg bg-gray-100 dark:bg-gray-800 bg-cover bg-center shadow-inner"
                                        data-alt="Pile of golden turmeric powder on wooden spoon"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKy4cyT-jpkn_19hq3B1K_2WTesd5iGEwGUI_f58r3s_ZB5_7IF3XDbhlKk_lFqgyheu6rYMPdSX5zb3MPf15lPOrZtYTAzJ7KZIxT1S8C7XDrkAlVnztHveIB6S-uD-PEMhOVuR4X7FHEGtggpDViUo4Mo1s8l0Ig2q2Yoy6B12WLmS23jY2mgc6J8dZaJjCDelFDBV7PoyNI1ZoQr0VNWvOLh0-KDjepJTn5itKlyxIx1RtDe56s7IZJ3I9EgPAv2KRdAlgoxUg")' }}>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between py-1">
                                    <div>
                                        <h3 className="text-lg font-bold text-text-main dark:text-white">Organic Turmeric
                                        </h3>
                                        <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">250 grams • High
                                            Curcumin</p>
                                        <p className="text-xs text-primary mt-2 italic flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">healing</span>
                                            Benefits: Anti-inflammatory, immunity
                                        </p>
                                    </div>
                                    <button
                                        className="text-left text-xs font-semibold text-red-500 hover:text-red-600 mt-2 md:mt-0 underline decoration-red-200 underline-offset-2">Remove</button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between md:justify-center w-full md:w-1/4">
                                <div
                                    className="flex items-center gap-3 border border-border-light dark:border-border-dark rounded-full px-3 py-1 bg-background-light dark:bg-background-dark">
                                    <button
                                        className="w-6 h-6 flex items-center justify-center rounded-full text-text-secondary hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                        <span className="material-symbols-outlined text-sm">remove</span>
                                    </button>
                                    <span className="w-4 text-center font-medium text-text-main dark:text-white">2</span>
                                    <button
                                        className="w-6 h-6 flex items-center justify-center rounded-full text-text-secondary hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                        <span className="material-symbols-outlined text-sm">add</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-end w-full md:w-1/4">
                                <p className="text-xl font-bold text-text-main dark:text-white">₹900</p>
                            </div>
                        </div>
                        {/* Upsell / Pairs well with */}
                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-text-main dark:text-white mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                                Pairs well with
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div
                                    className="flex items-center gap-4 p-4 border border-border-light dark:border-border-dark rounded-lg bg-surface-light dark:bg-surface-dark">
                                    <div className="w-16 h-16 rounded bg-gray-100 dark:bg-gray-700 bg-cover bg-center"
                                        data-alt="Black peppercorns in a bowl"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuANDjXO_wcVG816rndOdiWeR7dK8i0EEPykE2YOuYcCGhaBDfkQGoF_urKJQXUbQJuLYlyyeyWTTMOusteyJglsmLl3q18LbgRkqY0AWGDXHAq6BWVMB8HKWsXfyT7Gyzi2ncMVBuE9h9sulQMW-ba9lMcKhNxjlS1Cp1scAFcb0jnPCWPwO3Boxvwc9lKaUBSNhlXze6Dhz4hpiieqWoH2Whj99N652iPwwp2Ng-EuHBv1VXDWaFMd-ajsI9bXw641az1CmUcIYOQ")' }}>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-sm text-text-main dark:text-white">Malabar Black
                                            Pepper</h4>
                                        <p className="text-xs text-text-secondary dark:text-gray-400">₹350 • 100g</p>
                                    </div>
                                    <button
                                        className="p-2 bg-primary/20 hover:bg-primary/30 text-primary-dark rounded-full transition-colors">
                                        <span className="material-symbols-outlined text-sm">add</span>
                                    </button>
                                </div>
                                <div
                                    className="flex items-center gap-4 p-4 border border-border-light dark:border-border-dark rounded-lg bg-surface-light dark:bg-surface-dark">
                                    <div className="w-16 h-16 rounded bg-gray-100 dark:bg-gray-700 bg-cover bg-center"
                                        data-alt="Cinnamon sticks piled up"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuChKzngDsKlpDHgiE2nShEiZAIDMvp_JfVlcOgSvubvwz2K2MATh6kWXxVjB1QMF-jCXyCIHKPGMDZraVQsNJ-QZTzSj46LnIT-NOqhG9lvHAEwxxicD6qwHH3jpc8gg1PHhvLLPCkTgpYx-rU88_Yko6CCRiQ29U1hZVC5mj-bUrlCatkNAXwpgLMfsNv7y93Tv5wnfMoBI1VNyxjTTPBl4WyfHCO7XvHbtgMfTj4DdQGtBhvA3cNmYQIHj6KFqpfts_Oruv5lpPY")' }}>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-sm text-text-main dark:text-white">Ceylon Cinnamon
                                        </h4>
                                        <p className="text-xs text-text-secondary dark:text-gray-400">₹420 • 50g</p>
                                    </div>
                                    <button
                                        className="p-2 bg-primary/20 hover:bg-primary/30 text-primary-dark rounded-full transition-colors">
                                        <span className="material-symbols-outlined text-sm">add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Order Summary Column */}
                    <div className="lg:col-span-4">
                        <div
                            className="sticky top-24 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-text-main dark:text-white mb-6">Order Summary</h2>
                            {/* Calculations */}
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-sm text-text-secondary dark:text-gray-400">
                                    <span>Subtotal</span>
                                    <span className="text-text-main dark:text-white font-medium">₹1,850</span>
                                </div>
                                <div className="flex justify-between text-sm text-text-secondary dark:text-gray-400">
                                    <span>Shipping Estimate</span>
                                    <span className="text-text-main dark:text-white font-medium">₹50</span>
                                </div>
                                <div className="flex justify-between text-sm text-text-secondary dark:text-gray-400">
                                    <span>Tax (5% GST)</span>
                                    <span className="text-text-main dark:text-white font-medium">₹92.50</span>
                                </div>
                                <div className="h-px bg-border-light dark:bg-border-dark w-full my-2"></div>
                                <div className="flex justify-between items-end">
                                    <span className="text-lg font-bold text-text-main dark:text-white">Total</span>
                                    <span className="text-2xl font-black text-primary">₹1,992.50</span>
                                </div>
                            </div>
                            {/* Promo Code */}
                            <div className="mb-6">
                                <label
                                    className="block text-xs font-semibold text-text-main dark:text-white mb-2 uppercase tracking-wide"
                                    htmlFor="promo">Promo Code</label>
                                <div className="flex gap-2">
                                    <input
                                        className="w-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg px-3 py-2 text-sm text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        id="promo" placeholder="Enter code" type="text" />
                                    <button
                                        className="bg-background-light dark:bg-background-dark text-text-main dark:text-white px-4 py-2 rounded-lg text-sm font-bold border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Apply</button>
                                </div>
                            </div>
                            {/* Checkout Button */}
                            <Link to="/payment"
                                className="w-full bg-primary hover:bg-primary-dark text-background-dark font-bold text-lg py-4 rounded-lg shadow-lg shadow-primary/20 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2">
                                <span>Secure Checkout</span>
                                <span className="material-symbols-outlined">lock</span>
                            </Link>
                            {/* Trust Badges */}
                            <div className="mt-6 flex justify-center gap-6 text-text-secondary dark:text-gray-500">
                                <div className="flex flex-col items-center gap-1 group cursor-help">
                                    <span
                                        className="material-symbols-outlined text-2xl group-hover:text-primary transition-colors">verified_user</span>
                                    <span className="text-[10px] uppercase font-bold tracking-wider">Secure</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 group cursor-help">
                                    <span
                                        className="material-symbols-outlined text-2xl group-hover:text-primary transition-colors">eco</span>
                                    <span className="text-[10px] uppercase font-bold tracking-wider">Organic</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 group cursor-help">
                                    <span
                                        className="material-symbols-outlined text-2xl group-hover:text-primary transition-colors">local_shipping</span>
                                    <span className="text-[10px] uppercase font-bold tracking-wider">Fast</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
