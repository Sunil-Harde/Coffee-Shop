import React from "react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-300 py-6">
        <h1 className="bg-gray-500 text-gray-900 p-5 text-center mb-5 font-bold  text-4xl ">Contact Information's</h1>
            <div className="max-w-4xl mx-auto bg-gray-500 rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center text-brown-800 mb-4">
                    Contact Us
                </h2>
                <p className="text-center text-gray-100 mb-8">
                    We'd love to hear from you! Whether it's a question about our coffee
                    or feedback on your visit.
                </p>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">
                                Your Name
                            </label>
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brown-500"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">
                                Your Email
                            </label>
                            <input
                                type="email"
                                className="w-full p-3 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brown-500"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-white">
                            Message
                        </label>
                        <textarea
                            rows="5"
                            className="w-full p-3 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brown-500"
                            placeholder="Write your message here..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-brown-700 text-white py-3 rounded-xl font-semibold hover:bg-brown-800 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            <div className="max-w-4xl mx-auto mt-10">
                <iframe
                    title="Google Map"
                    className="w-full rounded-2xl shadow-lg h-64"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086043280748!2d-122.41941558468238!3d37.774929779759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809caaa5e2fd%3A0xfb35bbf2c0ff803!2sCoffee%20Shop!5e0!3m2!1sen!2sin!4v1672580900000!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
