import React from 'react';

const Enquiry = () => {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <div className="relative w-full">
                <div
                    className="flex min-h-[400px] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-8 text-center"
                    data-alt="Macro shot of vibrant orange turmeric powder and whole spices textures"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFCBCxV_7D2vulHsJIRIaj0r_XKLtlT8LgyeoRgcgYu9zakscCxo_EVp-ed8xQZ3CRiSaTqMyhHrlxSl62i-UCbDezkfqeZVblY2xUM0ZDMwrhyGeXSlp7eglTaZ8Uo_EjvahMy-gm0m8FS9oQB28UfZ89zGvT3Vx6kZ8LM-QMsp0FD163O3yVGQdI1yOlZeMTbXgEruFbwwhe_biWTjhEmRH8qxW1ZWgFTR2qtu4JZh4xbbKgRsTpqDHJiTbyoCgTY_YWUHOQf08")'
                    }}
                >
                    <div className="max-w-3xl flex flex-col gap-4 animate-fade-in-up">
                        <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                            Bring the Taste of India to the World
                        </h1>
                        <p className="text-base font-medium leading-relaxed text-stone-200 md:text-lg">
                            Partner with us for premium spice exports, bulk wholesale, or private labeling.
                            Experience the heritage of authentic Indian flavors.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="layout-container flex grow flex-col py-10 px-4 md:px-10 lg:px-20 xl:px-40">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Column: Form Section */}
                        <div className="lg:col-span-7 flex flex-col gap-8">
                            {/* Tabs */}
                            <div className="w-full border-b border-stone-200 dark:border-stone-800">
                                <div className="flex gap-8">
                                    <a className="flex items-center gap-2 border-b-[3px] border-transparent pb-3 text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 transition-colors"
                                        href="#">
                                        <span className="material-symbols-outlined text-[20px]">support_agent</span>
                                        <span className="text-sm font-bold tracking-wide">General Enquiry</span>
                                    </a>
                                    <a className="flex items-center gap-2 border-b-[3px] border-primary pb-3 text-stone-900 dark:text-white"
                                        href="#">
                                        <span className="material-symbols-outlined text-[20px] text-primary">public</span>
                                        <span className="text-sm font-bold tracking-wide">Export / Wholesale</span>
                                    </a>
                                </div>
                            </div>
                            {/* Form Header */}
                            <div>
                                <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50">Export Enquiry Form</h3>
                                <p className="mt-2 text-stone-600 dark:text-stone-400">Fill out the details below and our export
                                    team will get back to you within 24 hours.</p>
                            </div>
                            {/* Form Inputs */}
                            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                                {/* Row 1 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-bold text-stone-700 dark:text-stone-300">Full Name</span>
                                        <input
                                            className="h-12 w-full rounded-lg border border-stone-300 bg-white px-4 text-stone-900 placeholder-stone-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-stone-700 dark:bg-stone-800 dark:text-white"
                                            placeholder="John Doe" type="text" />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-bold text-stone-700 dark:text-stone-300">Company
                                            Name</span>
                                        <input
                                            className="h-12 w-full rounded-lg border border-stone-300 bg-white px-4 text-stone-900 placeholder-stone-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-stone-700 dark:bg-stone-800 dark:text-white"
                                            placeholder="Spice Traders Ltd." type="text" />
                                    </label>
                                </div>
                                {/* Row 2 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-bold text-stone-700 dark:text-stone-300">Email
                                            Address</span>
                                        <input
                                            className="h-12 w-full rounded-lg border border-stone-300 bg-white px-4 text-stone-900 placeholder-stone-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-stone-700 dark:bg-stone-800 dark:text-white"
                                            placeholder="john@company.com" type="email" />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-bold text-stone-700 dark:text-stone-300">Phone
                                            Number</span>
                                        <div className="relative">
                                            <span
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 material-symbols-outlined text-[20px]">call</span>
                                            <input
                                                className="h-12 w-full rounded-lg border border-stone-300 bg-white pl-11 pr-4 text-stone-900 placeholder-stone-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-stone-700 dark:bg-stone-800 dark:text-white"
                                                placeholder="+1 (555) 000-0000" type="tel" />
                                        </div>
                                    </label>
                                </div>
                                {/* Row 3: Dropdowns */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-bold text-stone-700 dark:text-stone-300">Country /
                                            Region</span>
                                        <div className="relative">
                                            <select
                                                className="h-12 w-full appearance-none rounded-lg border border-stone-300 bg-white px-4 text-stone-900 focus:border-primary focus:ring-1 focus:ring-primary dark:border-stone-700 dark:bg-stone-800 dark:text-white">
                                                <option>Select Country</option>
                                                <option>United States</option>
                                                <option>United Kingdom</option>
                                                <option>UAE</option>
                                                <option>Australia</option>
                                                <option>Canada</option>
                                                <option>Germany</option>
                                            </select>
                                            <span
                                                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 material-symbols-outlined">expand_more</span>
                                        </div>
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-bold text-stone-700 dark:text-stone-300">Business
                                            Type</span>
                                        <div className="relative">
                                            <select
                                                className="h-12 w-full appearance-none rounded-lg border border-stone-300 bg-white px-4 text-stone-900 focus:border-primary focus:ring-1 focus:ring-primary dark:border-stone-700 dark:bg-stone-800 dark:text-white">
                                                <option>Select Type</option>
                                                <option>Retailer</option>
                                                <option>Distributor / Wholesaler</option>
                                                <option>HoReCa (Hotel, Restaurant, Cafe)</option>
                                                <option>Manufacturer</option>
                                            </select>
                                            <span
                                                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 material-symbols-outlined">expand_more</span>
                                        </div>
                                    </label>
                                </div>
                                {/* Row 4: Textarea */}
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-bold text-stone-700 dark:text-stone-300">Message /
                                        Requirements</span>
                                    <textarea
                                        className="min-h-[140px] w-full resize-y rounded-lg border border-stone-300 bg-white p-4 text-stone-900 placeholder-stone-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-stone-700 dark:bg-stone-800 dark:text-white"
                                        placeholder="Please specify product details, estimated quantities, and shipping terms..."></textarea>
                                </label>
                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-bold text-stone-900 shadow-md hover:bg-yellow-400 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                        <span>Send Enquiry</span>
                                        <span className="material-symbols-outlined text-[20px]">send</span>
                                    </button>
                                </div>
                            </form>
                            {/* Trust Signals */}
                            <div className="mt-8 border-t border-stone-200 dark:border-stone-800 pt-8">
                                <p className="mb-6 text-sm font-bold uppercase tracking-wider text-stone-500">Certified
                                    Excellence</p>
                                <div
                                    className="flex flex-wrap gap-8 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-4xl">verified_user</span>
                                        <span className="font-bold">ISO 9001</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-4xl">eco</span>
                                        <span className="font-bold">Organic</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-4xl">workspace_premium</span>
                                        <span className="font-bold">Premium Quality</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-4xl">local_shipping</span>
                                        <span className="font-bold">Global Export</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Column: Info & Visuals */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            {/* Info Card */}
                            <div
                                className="rounded-xl bg-white p-8 shadow-sm dark:bg-stone-850 dark:border dark:border-stone-800">
                                <h4 className="mb-6 text-xl font-bold text-stone-900 dark:text-stone-50">Global Headquarters
                                </h4>
                                <div className="flex flex-col gap-6">
                                    <div className="flex gap-4">
                                        <div
                                            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                                            <span className="material-symbols-outlined">location_on</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-stone-900 dark:text-stone-50">Registered Office</p>
                                            <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                                                12/45 Spice Market Road,<br />
                                                Mattancherry, Kochi,<br />
                                                Kerala 682002, India
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div
                                            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-stone-900 dark:text-stone-50">Export Sales</p>
                                            <a className="text-sm text-stone-600 hover:text-primary dark:text-stone-400"
                                                href="mailto:export@spicebrand.com">export@spicebrand.com</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div
                                            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                                            <span className="material-symbols-outlined">call</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-stone-900 dark:text-stone-50">Support Hotline</p>
                                            <p className="text-sm text-stone-600 dark:text-stone-400">+91 484 123 4567</p>
                                            <p className="text-xs text-stone-500 mt-1">Mon-Fri, 9am - 6pm IST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Image Card */}
                            <div className="relative overflow-hidden rounded-xl h-64 w-full shadow-sm group">
                                <img alt="Assortment of indian spices in bowls on dark wood"
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    data-alt="Assortment of indian spices in bowls on dark wood"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEv8Z_8uKo4C_EHFA17ImpTCdePJaWMJA3DC9f_N-yPWdjXvhl325WEPPOlLplnYF3Vug7JkdCIlvLkPA7JrAqWdsCu9JVw-1iwX8_REK81UqNkDJ1pn0-epAU_FpUJLRd-tj9zzPUnWqctoaBlkRyvbWILo5dW10EIMkyFQaeiJPVBn8JGbNrlaPvB-tLEB7Jdh_n8wA226deijNY75sMDk1TCHV4-Xtb9NLZPssQaZ2rq3oYyLzx-ABFpwpADWoNhek55hgHlqs" />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <p className="text-white font-medium">Sourcing the finest ingredients from the heart of
                                        India.</p>
                                </div>
                            </div>
                            {/* FAQ Accordion (Simplified) */}
                            <div className="rounded-xl bg-stone-100 p-6 dark:bg-stone-900">
                                <h4 className="mb-4 text-lg font-bold text-stone-900 dark:text-stone-50">Frequent Questions</h4>
                                <div className="flex flex-col gap-3">
                                    <details className="group">
                                        <summary
                                            className="flex cursor-pointer list-none items-center justify-between font-medium text-stone-700 dark:text-stone-300">
                                            <span>What is the MOQ for exports?</span>
                                            <span className="transition group-open:rotate-180">
                                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                            </span>
                                        </summary>
                                        <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                                            Minimum Order Quantity varies by product, but generally starts at 100kg for air
                                            cargo and 1 TEU for sea freight.
                                        </p>
                                    </details>
                                    <hr className="border-stone-200 dark:border-stone-800" />
                                    <details className="group">
                                        <summary
                                            className="flex cursor-pointer list-none items-center justify-between font-medium text-stone-700 dark:text-stone-300">
                                            <span>Do you offer Private Labeling?</span>
                                            <span className="transition group-open:rotate-180">
                                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                            </span>
                                        </summary>
                                        <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                                            Yes, we offer comprehensive white-label solutions including packaging design and
                                            custom blends.
                                        </p>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enquiry;
