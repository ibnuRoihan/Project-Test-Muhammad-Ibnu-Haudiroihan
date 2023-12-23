import React, { useState, useEffect } from "react";

export const Banner = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="bg-gray-500 h-96 w-full relative bg-center z-0" style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}>
                <div >
                    <svg className="absolute bottom-0 w-full h-24 fill-white" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="0,100 100,0 100,100" />
                    </svg>
                    <img  className="w-full h-full object-cover absolute mix-blend-overlay" src="https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="py-28 text-center font-bold text-gray-900" >
                    <h1 className="text-7xl ">IDEAS</h1>
                    <p>Where all our great things begin</p>
                </div>
            </div>

        </>
    )
}