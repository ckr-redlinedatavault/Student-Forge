"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Learn with Forge", href: "/learn" },
        { name: "Build with Forge", href: "/build" },
        { name: "Grow with Forge", href: "/grow" },
        { name: "Events", href: "/events" },
        { name: "Blog", href: "/blog" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${isScrolled
                ? "bg-white/80 backdrop-blur-md border-zinc-200 shadow-sm"
                : "bg-white border-transparent"
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16 md:h-20 transition-all duration-300">

                    {/* Logo Section - Box removed, free-floating */}
                    <Link href="/" className="flex items-center gap-3 group flex-shrink-0 z-50">
                        <Image
                            src="/sf-next-logo.png"
                            alt="Student Forge"
                            width={36}
                            height={36}
                            className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                            priority
                        />
                        <span className="text-xl font-bold tracking-tight text-forge-navy">
                            Student<span className="text-forge-orange">Forge</span>
                        </span>
                    </Link>

                    {/* Right-Aligned Container for Nav & CTAs */}
                    <div className="hidden xl:flex items-center ml-auto">

                        {/* Desktop Navigation */}
                        <nav className="mr-6">
                            <ul className="flex items-center">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            // Branded hover state
                                            className="block px-3 py-2 text-[13px] font-semibold text-forge-navy/70 hover:text-forge-navy hover:bg-forge-orange/10 transition-colors rounded-none"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* CTA Buttons (Desktop) */}
                        <div className="flex items-center gap-4 flex-shrink-0 border-l border-zinc-200 pl-6">
                            <Link
                                href="/student/login"
                                className="text-[13px] font-semibold text-forge-navy/70 hover:text-forge-navy transition-colors px-2"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/get-started"
                                // Branded primary button
                                className="inline-flex h-10 items-center justify-center bg-forge-navy px-6 text-[13px] font-bold text-white transition-all duration-200 hover:bg-forge-navy/90 hover:-translate-y-0.5 active:translate-y-0 shadow-sm rounded-none border border-forge-navy"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Actions */}
                    <div className="flex xl:hidden items-center gap-3">
                        <Link
                            href="/get-started"
                            className="inline-flex h-9 items-center justify-center bg-forge-navy px-4 text-[11px] font-black text-white hover:bg-forge-navy/90 transition-all rounded-full uppercase tracking-widest shadow-sm"
                        >
                            Get Started
                        </Link>
                        
                        {/* Mobile Menu Toggle Button - Standard 3 Equal Lines */}
                        <button
                            className="relative z-50 p-2 -mr-1 text-forge-navy hover:text-forge-navy/80 transition-colors rounded-none hover:bg-zinc-100"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span className={`h-[2px] w-6 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
                                <span className={`h-[2px] w-6 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                                <span className={`h-[2px] w-6 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
                className={`fixed inset-0 bg-white z-[60] transition-all duration-500 xl:hidden flex flex-col ${isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
                    }`}
            >
                <div className="flex flex-col h-full container mx-auto px-6 py-6">
                    {/* Mobile Header (For Close Button) */}
                    <div className="flex justify-between items-center h-16 mb-8">
                        <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                            <Image
                                src="/sf-next-logo.png"
                                alt="Student Forge"
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                            <span className="text-lg font-bold tracking-tight text-forge-navy">
                                Student<span className="text-forge-orange">Forge</span>
                            </span>
                        </Link>
                        <button 
                            className="p-2 text-forge-navy"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <div className="w-6 h-6 relative">
                                <span className="absolute inset-0 m-auto h-[2px] w-6 bg-current rotate-45"></span>
                                <span className="absolute inset-0 m-auto h-[2px] w-6 bg-current -rotate-45"></span>
                            </div>
                        </button>
                    </div>

                    <nav className="flex-1 overflow-y-auto pb-10">
                        <ul className="flex flex-col gap-1">
                            {navLinks.map((link, index) => (
                                <li
                                    key={link.name}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                    className={`transition-all duration-500 ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
                                >
                                    <Link
                                        href={link.href}
                                        className="block py-4 text-2xl font-bold text-forge-navy hover:text-forge-orange transition-all border-b border-zinc-50"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile CTA */}
                    <div className="grid grid-cols-1 gap-3 pt-6 border-t border-zinc-100">
                        <Link
                            href="/student/login"
                            className="w-full py-4 text-center text-sm font-bold text-forge-navy border border-forge-navy rounded-none"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Log in
                        </Link>
                        <Link
                            href="/get-started"
                            className="w-full py-4 text-center text-sm font-bold bg-forge-navy text-white rounded-none shadow-sm"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;