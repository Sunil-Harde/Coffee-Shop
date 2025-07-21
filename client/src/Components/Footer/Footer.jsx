import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300  py-10">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Coffee</h2>
                    <p className="text-sm text-gray-300">
                        Brewing happiness since 2023. A cozy place for coffee lovers to
                        relax, connect, and sip slowly.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <a href="/" className="hover:text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-white">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/menu" className="hover:text-white">
                                Menu
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-white">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Opening Hours */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Opening Hours</h3>
                    <ul className="text-gray-300 space-y-1">
                        <li>Mon - Fri: 8am - 10pm</li>
                        <li>Saturday: 9am - 11pm</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
                    <div className="flex gap-4 text-2xl">
                        <a href="#" className="hover:text-yellow-400">
                            <FaFacebook />
                        </a>
                        <a href="#" className="hover:text-yellow-400">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-yellow-400">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="text-center mt-10 text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Designed by Maxgen.
            </div>
        </footer>
    );
};

export default Footer;
