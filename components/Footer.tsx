"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Instagram, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-zinc-100 border-t border-zinc-300 pt-16 pb-8">
            <div className="container mx-auto px-6">
                {/* Balanced 3-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    
                    {/* Brand & Mission */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold tracking-tight text-forge-navy">
                            Student<span className="text-forge-orange">Forge</span>
                        </Link>
                        <p className="text-[15px] font-bold text-forge-navy/50 leading-relaxed max-w-xs uppercase tracking-tight">
                            A high-performance ecosystem engineering the next generation of technical leaders.
                        </p>
                    </div>

                    {/* Direct Headquarters Links */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <span className="text-[9px] font-black text-forge-navy/20 uppercase tracking-[0.2em] block mb-1">Base // Hyderabad</span>
                                <p className="text-[13px] font-bold text-forge-navy/70 leading-relaxed">
                                    HF2R+CCV, Devender Colony, Kompally,<br />Hyderabad, Telangana 500100
                                </p>
                            </div>
                            <div>
                                <span className="text-[9px] font-black text-forge-navy/20 uppercase tracking-[0.2em] block mb-1">Node // Khammam</span>
                                <p className="text-[13px] font-bold text-forge-navy/70 leading-relaxed">
                                    H.no 10-11-860/5, Near Khammam New Bus Stand,<br />Bypass Road, Raparthi Nagar, Khammam, Telangana 507003
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Inquiry & Call to Action */}
                    <div className="flex flex-col lg:items-end justify-between">
                        <div className="space-y-1 lg:text-right">
                            <span className="text-[9px] font-black text-forge-navy/20 uppercase tracking-[0.2em] block mb-1">Direct Inquiries</span>
                            <p className="text-[18px] font-bold text-forge-orange">info@studentforge.in</p>
                            <p className="text-[18px] font-bold text-forge-navy">+91 6304218064</p>
                        </div>
                        <div className="mt-8">
                             <Link href="/login" className="inline-flex text-[10px] font-black px-5 py-2 border border-zinc-300 text-forge-navy/40 hover:text-forge-navy hover:border-forge-navy hover:bg-white transition-all rounded-full uppercase tracking-widest">
                                Admin Access
                            </Link>
                        </div>
                    </div>
                </div>

                {/* High-Impact Slogan Highlight */}
                <div className="py-10 border-t border-zinc-300/50 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-forge-orange/5 blur-3xl rounded-full scale-150 opacity-50"></div>
                    <p className="relative text-[16px] md:text-[20px] font-black tracking-[0.3em] text-forge-navy uppercase">
                        Learn. <span className="text-forge-orange">Build.</span> Succeed.
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-300 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[12px] font-bold text-forge-navy uppercase tracking-widest">
                        &copy; 2026 Student Forge
                    </div>
                    
                    <div className="flex items-center gap-8">
                        <Link href="/contact" className="flex items-center gap-2 group">
                             <MessageCircle className="w-4 h-4 text-forge-orange" />
                             <span className="text-[11px] font-bold text-forge-navy hover:text-forge-orange transition-colors uppercase tracking-widest">Chat with us</span>
                        </Link>
                        <div className="h-4 w-px bg-zinc-300"></div>
                        <div className="flex items-center gap-6">
                            <Link href="https://www.linkedin.com/company/student-forge/" target="_blank" rel="noopener noreferrer" className="text-forge-navy/40 hover:text-forge-orange transition-colors p-1">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.instagram.com/studentforge?igsh=MW12eTRsbTJteTI4Zw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-forge-navy/40 hover:text-forge-orange transition-colors p-1">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.youtube.com/@studentforge" target="_blank" rel="noopener noreferrer" className="text-forge-navy/40 hover:text-forge-orange transition-colors p-1">
                                <Youtube className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
