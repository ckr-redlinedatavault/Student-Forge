"use client";

import React, { useState, useEffect, useRef } from "react";

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return <span ref={countRef}>{count}{suffix}</span>;
};

const ImpactStats = () => {
    return (
        <div className="relative z-30 -mt-8 sm:-mt-10 lg:-mt-12 container mx-auto px-6">
            <div className="w-full bg-forge-navy text-white rounded-none p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden border border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">

                    {/* Stat 1: Student Transformation */}
                    <div className="flex items-center gap-6 border-b md:border-b-0 md:border-r border-zinc-800 pb-8 md:pb-0 pr-0 md:pr-12">
                        <span className="text-4xl lg:text-5xl font-medium tracking-tight text-white min-w-[100px] lg:min-w-[110px]">
                            <CountUp end={94} suffix="%" />
                        </span>
                        <p className="text-xs lg:text-[13px] text-zinc-400 leading-relaxed max-w-[200px] lg:max-w-[220px] font-medium">
                            Student success rate in achieving personal and career transformation goals.
                        </p>
                    </div>

                    {/* Stat 2: Student Projects */}
                    <div className="flex items-center gap-6 border-b md:border-b-0 md:border-r border-zinc-800 pb-8 md:pb-0 pr-0 md:pr-12">
                        <span className="text-4xl lg:text-5xl font-medium tracking-tight text-white min-w-[110px]">
                            <CountUp end={850} suffix="+" />
                        </span>
                        <p className="text-xs lg:text-[13px] text-zinc-400 leading-relaxed max-w-[220px] font-medium">
                            Real-world student projects launched during the program annually.
                        </p>
                    </div>

                    {/* Stat 3: Student Satisfaction */}
                    <div className="flex items-center gap-6">
                        <span className="text-4xl lg:text-5xl font-medium tracking-tight text-white min-w-[110px]">
                            <CountUp end={98} suffix="%" />
                        </span>
                        <p className="text-xs lg:text-[13px] text-zinc-400 leading-relaxed max-w-[220px] font-medium">
                            of Students recommend Forge as the definitive place where building begins.
                        </p>
                    </div>
                </div>

                {/* Subtle numbering markers - Sharp Look */}
                <div className="hidden lg:flex absolute bottom-4 left-0 w-full justify-between items-center px-10 text-[9px] text-zinc-800 font-mono pointer-events-none">
                    <span>INDEX_KEY_[01]</span>
                    <div className="flex-1 border-t border-zinc-900/50 mx-4"></div>
                    <span>INDEX_KEY_[02]</span>
                    <div className="flex-1 border-t border-zinc-900/50 mx-4"></div>
                    <span>INDEX_KEY_[03]</span>
                </div>
            </div>
        </div>
    );
};

export default ImpactStats;
