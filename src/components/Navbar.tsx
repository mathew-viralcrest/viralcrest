"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
        name: "Service",
        href: "/services",
        dropdown: [
            {
                name: "Performance Marketing",
                href: "/services/performance-marketing",
            },
            { name: "Website Development", href: "/services/website-development" },
            {
                name: "Ecommerce Development",
                href: "/services/ecommerce-development",
            },
            { name: "AI Content Creation", href: "/services/ai-content-creation" },
            {
                name: "Social Media Marketing",
                href: "/services/social-media-marketing",
            },
            { name: "SEO Optimization", href: "/services/seo-optimization" },
            { name: "WhatsApp Automation", href: "/services/whatsapp-automation" },
            { name: "Branding & Design", href: "/services/branding-design" },
        ],
    },
    { name: "Blog", href: "#blog" }, // Keep hash link or move to page later
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="block">
                    <img src="/logo.png" alt="Viralcrest" className="h-10 w-auto" />
                </Link>

                {/* Desktop Navigation (Centered) */}
                <ul className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => (
                        <li key={link.name} className="relative group h-20 flex items-center">
                            <Link
                                href={link.href}
                                className="text-base font-medium text-slate-600 hover:text-[#5057e6] transition-colors flex items-center gap-1"
                            >
                                {link.name}
                                {link.dropdown && (
                                    <ChevronDown
                                        size={16}
                                        className="group-hover:rotate-180 transition-transform duration-300"
                                    />
                                )}
                            </Link>

                            {/* Dropdown Menu */}
                            {link.dropdown && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-xl rounded-xl border border-slate-100 p-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 transform origin-top">
                                    <div className="absolute -top-2 left-0 w-full h-2 bg-transparent" />
                                    {/* Bridge to prevent closing on gap */}
                                    <ul className="flex flex-col">
                                        {link.dropdown.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-[#5057e6] hover:bg-slate-50 rounded-lg transition-colors text-left"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* CTA & Mobile Menu Toggle */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-[#5057e6] bg-transparent border-2 border-[#5057e6]/30 rounded-full hover:bg-[#5057e6]/10 hover:border-[#5057e6]/50 transition-all gap-2"
                    >
                        <Phone size={18} />
                        Contact
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-slate-900 p-2 z-50 relative"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 transform transition-transform duration-300 md:hidden flex flex-col justify-start items-center overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <ul className="flex flex-col items-center gap-6 text-center p-6 pt-28 pb-12 w-full max-w-sm">
                    {navLinks.map((link) => (
                        <li key={link.name} className="w-full">
                            <Link
                                href={link.href}
                                className="text-2xl font-bold text-slate-800 hover:text-[#5057e6] transition-colors block py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                            {link.dropdown && (
                                <div className="mt-2 flex flex-col gap-3 pl-4 border-l-2 border-slate-100 items-center bg-slate-50/50 rounded-xl py-4 mx-4">
                                    {link.dropdown.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="text-base font-medium text-slate-500 hover:text-[#5057e6] transition-colors block py-1"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                    <li className="mt-4 w-full px-4">
                        <Link
                            href="/contact"
                            className="flex w-full items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#5057e6] rounded-full hover:bg-[#4349c2] transition-all shadow-lg shadow-indigo-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
