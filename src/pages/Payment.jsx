import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div className="flex-1 flex justify-center py-6 lg:py-10 px-4 sm:px-6">
            <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">
                {/* Left Column: Forms */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                    {/* Breadcrumbs */}
                    <nav className="flex flex-wrap items-center gap-2 text-sm">
                        <Link className="text-[#9c8749] hover:text-primary transition-colors font-medium" to="/checkout">Cart</Link>
                        <span className="material-symbols-outlined text-[#9c8749] text-base">chevron_right</span>
                        <Link className="text-[#9c8749] hover:text-primary transition-colors font-medium"
                            to="#">Information</Link>
                        <span className="material-symbols-outlined text-[#9c8749] text-base">chevron_right</span>
                        <Link className="text-[#9c8749] hover:text-primary transition-colors font-medium" to="#">Shipping</Link>
                        <span className="material-symbols-outlined text-[#9c8749] text-base">chevron_right</span>
                        <span className="text-text-main-light dark:text-text-main-dark font-bold">Payment</span>
                    </nav>
                    {/* Contact Information */}
                    <section className="flex flex-col gap-4">
                        <header className="flex items-center justify-between">
                            <h3 className="text-lg font-bold tracking-tight text-text-main-light dark:text-text-main-dark">
                                Contact Information</h3>
                            <Link className="text-sm font-medium text-[#9c8749] hover:text-primary underline" to="#">Log
                                in</Link>
                        </header>
                        <div className="flex flex-col gap-4">
                            <label className="flex flex-col w-full">
                                <span className="sr-only">Email</span>
                                <input
                                    className="form-input w-full rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-[#2a261a] text-text-main-light dark:text-text-main-dark focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 placeholder-[#9c8749]"
                                    placeholder="Email address" type="email" defaultValue="customer@example.com" />
                            </label>
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input defaultChecked
                                        className="h-5 w-5 rounded border-border-light dark:border-border-dark text-primary focus:ring-primary focus:ring-offset-0 dark:bg-[#2a261a] dark:checked:bg-primary transition-colors"
                                        type="checkbox" />
                                </div>
                                <span
                                    className="text-sm text-text-main-light dark:text-text-main-dark opacity-80 group-hover:opacity-100 transition-opacity">Email
                                    me with news and offers</span>
                            </label>
                        </div>
                    </section>
                    {/* Shipping Address */}
                    <section className="flex flex-col gap-4 pt-4 border-t border-border-light dark:border-border-dark">
                        <h3 className="text-lg font-bold tracking-tight text-text-main-light dark:text-text-main-dark">
                            Shipping Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                className="form-input w-full rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-[#2a261a] text-text-main-light dark:text-text-main-dark focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 placeholder-[#9c8749]"
                                placeholder="First Name" type="text" />
                            <input
                                className="form-input w-full rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-[#2a261a] text-text-main-light dark:text-text-main-dark focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 placeholder-[#9c8749]"
                                placeholder="Last Name" type="text" />
                            <div className="md:col-span-2">
                                <input
                                    className="form-input w-full rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-[#2a261a] text-text-main-light dark:text-text-main-dark focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 placeholder-[#9c8749]"
                                    placeholder="Address" type="text" />
                            </div>
                            <div className="md:col-span-2">
                                <input
                                    className="form-input w-full rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-[#2a261a] text-text-main-light dark:text-text-main-dark focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 placeholder-[#9c8749]"
                                    placeholder="Apartment, suite, etc. (optional)" type="text" />
                            </div>
                            <input
                                className="form-input w-full rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-[#2a261a] text-text-main-light dark:text-text-main-dark focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 placeholder-[#9c8749]"
                                placeholder="City" type="text" />
                            <input
                                className="form-input w-full rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-[#2a261a] text-text-main-light dark:text-text-main-dark focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 placeholder-[#9c8749]"
                                placeholder="Postal Code" type="text" />
                            <div className="relative md:col-span-2">
                                <select
                                    className="form-select w-full rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-[#2a261a] text-text-main-light dark:text-text-main-dark focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 pr-10 appearance-none">
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>United Kingdom</option>
                                    <option>India</option>
                                </select>
                            </div>
                        </div>
                    </section>
                    {/* Payment */}
                    <section className="flex flex-col gap-4 pt-4 border-t border-border-light dark:border-border-dark">
                        <header className="flex items-center justify-between">
                            <h3 className="text-lg font-bold tracking-tight text-text-main-light dark:text-text-main-dark">
                                Payment</h3>
                            <div className="flex gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
                                {/* Simple representations of cards using div/text/icon for mockup */}
                                <span className="material-symbols-outlined text-2xl" title="Credit Card">credit_card</span>
                                <span className="material-symbols-outlined text-2xl" title="Payments">payments</span>
                            </div>
                        </header>
                        <div
                            className="rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-[#2a261a] overflow-hidden">
                            <div
                                className="p-4 bg-background-light dark:bg-background-dark/50 border-b border-border-light dark:border-border-dark flex items-center justify-between">
                                <span className="text-sm font-medium">Credit Card</span>
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                            </div>
                            <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2 relative">
                                    <input
                                        className="form-input w-full rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-[#2a261a] text-text-main-light dark:text-text-main-dark focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 pl-12 placeholder-[#9c8749]"
                                        placeholder="Card number" type="text" />
                                    <span
                                        className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#9c8749]">credit_card</span>
                                </div>
                                <input
                                    className="form-input w-full rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-[#2a261a] text-text-main-light dark:text-text-main-dark focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 placeholder-[#9c8749]"
                                    placeholder="Expiration (MM/YY)" type="text" />
                                <div className="relative">
                                    <input
                                        className="form-input w-full rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-[#2a261a] text-text-main-light dark:text-text-main-dark focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 placeholder-[#9c8749]"
                                        placeholder="CVV" type="text" />
                                    <span
                                        className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#9c8749] text-lg cursor-help">help</span>
                                </div>
                                <div className="md:col-span-2">
                                    <input
                                        className="form-input w-full rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-[#2a261a] text-text-main-light dark:text-text-main-dark focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 placeholder-[#9c8749]"
                                        placeholder="Name on card" type="text" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Submit Button */}
                    <div className="pt-6">
                        <button
                            className="w-full h-14 bg-primary hover:bg-[#d9aa20] text-[#1c180d] text-lg font-bold rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group">
                            Pay Now <span className="font-normal">$106.00</span>
                            <span
                                className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                        <p className="text-xs text-center text-[#9c8749] mt-4 flex items-center justify-center gap-1">
                            <span className="material-symbols-outlined text-base">lock</span>
                            All transactions are secure and encrypted.
                        </p>
                    </div>
                </div>
                {/* Right Column: Order Summary */}
                <div className="lg:col-span-5 h-full">
                    <div
                        className="sticky top-24 flex flex-col gap-6 bg-white dark:bg-[#2a261a] rounded-xl p-6 shadow-sm border border-border-light dark:border-border-dark">
                        <h3
                            className="text-lg font-bold tracking-tight text-text-main-light dark:text-text-main-dark border-b border-border-light dark:border-border-dark pb-4">
                            Order Summary</h3>
                        {/* Products List */}
                        <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                            {/* Item 1 */}
                            <div className="flex gap-4 items-start">
                                <div
                                    className="relative h-20 w-20 shrink-0 rounded-lg border border-border-light dark:border-border-dark overflow-hidden bg-background-light dark:bg-background-dark">
                                    <img alt="Glass jar of premium saffron threads on a dark surface"
                                        className="h-full w-full object-cover"
                                        data-alt="Glass jar of premium saffron threads on a dark surface"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjO3qiutricxKnKM2WwH_ul7xS0-nitWpa1McOj1uVDjZP8thKzpGLOfvoTBmFmFaRfPV6w5LtKMjxNs88AxxMDQDfOS7DHEoQ5mFR2nrW8hsktUafR7nzMOzbc5mwgfw5bRyKBTXLVurzLpyrJ_mA_VEZeYbAn9U53kZVCkCSPDUd4PrDURASzmvrlBbhFxFBTPr1G7xCJYDL7UqyQEOXj3VQXtxIGD4ADKsDj8xyae2djNYUy3ScJ5pfnVmLRRLvGNlsv-EvzYw" />
                                    <span
                                        className="absolute -top-0 -right-0 h-5 w-5 bg-primary text-[#1c180d] text-xs font-bold flex items-center justify-center rounded-bl-lg rounded-tr-sm">1</span>
                                </div>
                                <div className="flex flex-col flex-1 gap-1">
                                    <h4
                                        className="text-base font-bold text-text-main-light dark:text-text-main-dark leading-tight">
                                        Royal Kashmiri Saffron</h4>
                                    <p className="text-sm text-[#9c8749]">1 Gram / Premium Tin</p>
                                </div>
                                <div className="text-base font-bold text-text-main-light dark:text-text-main-dark">$32.00
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="flex gap-4 items-start">
                                <div
                                    className="relative h-20 w-20 shrink-0 rounded-lg border border-border-light dark:border-border-dark overflow-hidden bg-background-light dark:bg-background-dark">
                                    <img alt="Golden turmeric powder in a wooden bowl with spoon"
                                        className="h-full w-full object-cover"
                                        data-alt="Golden turmeric powder in a wooden bowl with spoon"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs-3kDBQ1DrRC8CXkmvLUGa5Bd_cuIJzQ5KIe5eI6b1gbNM8IgT_OKM1eV5d7vyNqSrmHIMs748OtldeQYy-7QOX7i_4jM1CMCS-0258R9VZbhiYkrsXNhSlN8GN9_TiBr7u1uTkFg9P-H7SjButAweTsoFmHgLcz6Xo52OuVZRD6oQrG0SNuVz0CJqoeA7lX8dwe6EfzW-wxyvqp_qD_j79ZErAwMS74a22myYlAU2GzdNu_DlrAoYAf1fhWYF_SsNvhXFqCBUZA" />
                                    <span
                                        className="absolute -top-0 -right-0 h-5 w-5 bg-primary text-[#1c180d] text-xs font-bold flex items-center justify-center rounded-bl-lg rounded-tr-sm">2</span>
                                </div>
                                <div className="flex flex-col flex-1 gap-1">
                                    <h4
                                        className="text-base font-bold text-text-main-light dark:text-text-main-dark leading-tight">
                                        Lakadong Turmeric</h4>
                                    <p className="text-sm text-[#9c8749]">250g / Refill Pouch</p>
                                </div>
                                <div className="text-base font-bold text-text-main-light dark:text-text-main-dark">$28.00
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div className="flex gap-4 items-start">
                                <div
                                    className="relative h-20 w-20 shrink-0 rounded-lg border border-border-light dark:border-border-dark overflow-hidden bg-background-light dark:bg-background-dark">
                                    <img alt="Green cardamom pods scattered on a rustic surface"
                                        className="h-full w-full object-cover"
                                        data-alt="Green cardamom pods scattered on a rustic surface"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2zzJPPaYhYG82LtUaBCAXu07MFW-PNZ5ulBzSbsIBR5dlHZ4a_Hu3pxZ2l3oNgNvi6R7dM32gzJknXmQv1-YQ3naGiyB-3z8DslbpO3p40F1jTn0bFRLCyg1UvQQNn3OoSG-KPDzZFuxsVDIVg2JgsVKTJjsgoaX0gaG6kCgMrqJ-zDBH0FxyF0tLwqz7MpfN_tXe-M6qqS8X-VisCTxud0Fbi69GO3PCtxbuh9RSiELPM1e2nbI51o-IS8zroP4Izt78jz3sAFk" />
                                    <span
                                        className="absolute -top-0 -right-0 h-5 w-5 bg-primary text-[#1c180d] text-xs font-bold flex items-center justify-center rounded-bl-lg rounded-tr-sm">1</span>
                                </div>
                                <div className="flex flex-col flex-1 gap-1">
                                    <h4
                                        className="text-base font-bold text-text-main-light dark:text-text-main-dark leading-tight">
                                        Kerala Green Cardamom</h4>
                                    <p className="text-sm text-[#9c8749]">100g / Glass Jar</p>
                                </div>
                                <div className="text-base font-bold text-text-main-light dark:text-text-main-dark">$18.00
                                </div>
                            </div>
                        </div>
                        {/* Discount Code */}
                        <div className="flex gap-2 py-4 border-t border-b border-border-light dark:border-border-dark">
                            <input
                                className="form-input flex-1 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:border-primary focus:ring-1 focus:ring-primary h-10 px-4 placeholder-[#9c8749] text-sm"
                                placeholder="Gift card or discount code" type="text" />
                            <button
                                className="h-10 px-4 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-[#9c8749] font-bold rounded-lg hover:bg-border-light dark:hover:bg-border-dark transition-colors text-sm">Apply</button>
                        </div>
                        {/* Cost Breakdown */}
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center text-sm text-[#9c8749]">
                                <span>Subtotal</span>
                                <span className="text-text-main-light dark:text-text-main-dark font-medium">$106.00</span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-[#9c8749]">
                                <span>Shipping</span>
                                <span
                                    className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Free</span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-[#9c8749]">
                                <span>Taxes</span>
                                <span className="text-text-main-light dark:text-text-main-dark font-medium">$0.00</span>
                            </div>
                        </div>
                        {/* Total */}
                        <div
                            className="flex justify-between items-end border-t border-border-light dark:border-border-dark pt-4">
                            <div className="flex flex-col">
                                <span
                                    className="text-base font-bold text-text-main-light dark:text-text-main-dark">Total</span>
                                <span className="text-xs text-[#9c8749]">Including $0.00 in taxes</span>
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-sm font-medium text-[#9c8749]">USD</span>
                                <span
                                    className="text-2xl font-bold text-text-main-light dark:text-text-main-dark">$106.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
