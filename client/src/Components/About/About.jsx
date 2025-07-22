import React from "react";

const About = () => {
    return (
        <div className="bg-gray-900 text-gray-300 min-h-screen py-12 px-4">
        <h1 className="bg-gray-200 text-gray-900 p-5 mb-9 text-center text-4xl font-bold">About</h1>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Image */}
                <div className="md:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                        alt="Coffee Shop"
                        className="rounded-2xl h-full w-full shadow-lg"
                    />
                </div>

                {/* Content */}
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold text-brown-800 mb-4">
                        About Our Coffee
                    </h2>
                    <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                        At{" "}
                        <span className="font-semibold text-brown-700">Shauuu Coffee</span>,
                        every sip tells a story. What started as a small family dream in a
                        quiet town has grown into a cozy space where people gather, laugh,
                        and enjoy carefully crafted coffee blends from around the world.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        We believe in quality, community, and comfort. From ethically
                        sourced beans to handcrafted brews, everything we serve is made with
                        love and attention. Whether you're here for a quick espresso or to
                        relax with friends, you'll always feel at home.
                    </p>
                </div>
            </div>

            {/* Values Section */}
            <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-gray-400 text-white rounded-xl shadow p-6 hover:scale-105 transition">
                    <h3 className="text-xl font-semibold text-brown-700 mb-2">
                        Fresh Ingredients
                    </h3>
                    <p className="text-gray-600">
                        Only the best locally sourced coffee beans and ingredients.
                    </p>
                </div>
                <div className="bg-gray-400 text-white rounded-xl shadow p-6 hover:scale-105 transition">
                    <h3 className="text-xl font-semibold text-brown-700 mb-2">
                        Cozy Vibes
                    </h3>
                    <p className="text-gray-600">
                        Designed for comfort—perfect for reading, working, or meeting
                        friends.
                    </p>
                </div>
                <div className="bg-gray-400 text-white rounded-xl shadow p-6 hover:scale-105 transition">
                    <h3 className="text-xl font-semibold text-brown-700 mb-2">
                        Eco-Friendly
                    </h3>
                    <p className="text-gray-600">
                        Committed to sustainable practices and reducing waste.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
