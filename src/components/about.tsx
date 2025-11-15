import React from 'react';

// --- Data for Website Types ---
const websiteTypes = [
  { title: "E-commerce Store", description: "Sell products online with secure payment integration, inventory management, and a seamless shopping experience.", emoji: "🛒" },
  { title: "Service Portfolio", description: "Showcase your professional work, skills, and client testimonials to build authority and attract new leads.", emoji: "💼" },
  { title: "Informational Blog", description: "Establish thought leadership and engage your audience with high-quality content, SEO optimization, and easy sharing.", emoji: "✍️" },
  { title: "Landing Page/Lead Gen", description: "Design a focused page with a clear Call-to-Action to capture visitor data and convert leads effectively.", emoji: "🎯" },
];

// --- Data for Core Values (already hardcoded in the list, but structured here for context) ---
const coreValues = [
  "Clarity & Transparency",
  "Tailored, Custom Design",
  "Future-Proof Technology",
  "Exceptional Post-Launch Support",
];

const About = () => {
    // Function to scroll to an element with id="contact"
    const scrollToContact = () => {
        // This function is for demonstration; ensure an element with id="contact" exists 
        // in your full application's layout (e.g., in a footer or contact section component).
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    // A simple Checkmark SVG to replace the text "✔" for better styling
    const CheckIcon = ({ colorClass }) => (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 flex-shrink-0 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    );

    return (
        <div className="min-h-screen font-sans bg-white text-gray-800">
            {/* Tailwind Container class for responsive padding and centering */}
            <style >{`
                .container {
                    width: 100%;
                    padding-right: 1rem;
                    padding-left: 1rem;
                    margin-right: auto;
                    margin-left: auto;
                }
                @media (min-width: 640px) { .container { max-width: 640px; } }
                @media (min-width: 768px) { .container { max-width: 768px; } }
                @media (min-width: 1024px) { .container { max-width: 1024px; } }
                @media (min-width: 1280px) { .container { max-width: 1280px; } }
            `}</style>
            
            <main>
                {/* 1. Hero Section - Our Mission */}
                <section className="py-20 md:py-32 bg-gray-50">
                    <div className="container px-4 mx-auto text-center max-w-5xl">
                        <p className="text-sm font-medium uppercase text-blue-600 mb-2">Our Story & Mission</p>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                            Building the <span className="text-blue-600">Digital Future</span> of Your Business
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-3xl mx-auto">
                            At **WebnBot (powered by Techkl.de)**, we don't just build websites—we craft custom digital tools designed to drive your success, starting from just $50.
                        </p>
                        <button 
                            onClick={scrollToContact}
                            className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Get a Free Quote Now
                        </button>
                    </div>
                </section>

                <hr className="my-10 border-t border-gray-200" />

                {/* 2. Core Value Proposition */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Why Choose WebnBot?
                                </h2>
                                <p className="text-lg text-gray-500 mb-8">
                                    We combine affordability with high-end, responsive design. Our focus is on delivering a solution that is not only visually stunning but also technically robust and aligned with your specific business goals.
                                </p>
                                <ul className="space-y-4">
                                    {coreValues.map((value, index) => (
                                        <li key={index} className="flex items-start space-x-3">
                                            {/* Used CheckIcon component for better styling */}
                                            <CheckIcon colorClass="text-blue-600" />
                                            <span className="text-lg font-medium">{value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="hidden md:block">
                                {/* Placeholder for Design Illustration */}
                                <div className="h-96 w-full bg-blue-100 rounded-xl flex items-center justify-center text-blue-500 font-semibold shadow-inner">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="my-10 border-t border-gray-200" />

                {/* 3. Custom Solutions (Website Purpose) */}
                <section className="py-16 md:py-24 bg-gray-50">
                    <div className="container px-4 mx-auto">
                        <div className="text-center space-y-4 mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold">
                                A Website for Every <span className="text-blue-600">Purpose</span>
                            </h2>
                            <p className="text-xl text-gray-500">
                                We tailor our development to meet your specific niche and objectives.
                            </p>
                        </div>
                        
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {websiteTypes.map((type, index) => (
                                <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
                                    <div className="text-4xl mb-2">{type.emoji}</div>
                                    <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                                    <p className="text-gray-500 text-sm">{type.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <hr className="my-10 border-t border-gray-200" />

                {/* 4. The Bot Integration Feature */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                            <div className="hidden md:block">
                                {/* Placeholder for Chatbot Illustration */}
                                <div className="h-96 w-full bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 font-semibold shadow-inner">
                                    
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Automate & Engage with Our Custom <span className="text-yellow-600 font-extrabold">Bot Integration</span>
                                </h2>
                                <p className="text-lg text-gray-500 mb-6">
                                    Maximize efficiency and never miss a lead. Every WebnBot site comes with the option to integrate a custom chatbot designed to handle instant customer queries, collect contact information, and guide users.
                                </p>
                                <ul className="space-y-3 text-lg">
                                    <li className="flex items-center space-x-2">
                                        <CheckIcon colorClass="text-yellow-600" />
                                        <span>**24/7 Support:** Answer common questions instantly.</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckIcon colorClass="text-yellow-600" />
                                        <span>**Lead Qualification:** Filter and categorize potential clients.</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckIcon colorClass="text-yellow-600" />
                                        <span>**Custom Flow:** Tailored conversation paths for your service.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* A dummy contact section for the scroll button to work */}
            <section id="contact" className="py-12 bg-gray-50 text-center">
                <h2 className="text-3xl font-bold text-blue-600">Contact Us</h2>
                <p className="text-gray-500">Scroll target for the "Get a Free Quote Now" button.</p>
            </section>
        </div>
    );
};

export default About;