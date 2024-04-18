import React, { useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from "../components/BackgroundCircles"

const Dashboard = () => {
    const [text, count] = useTypewriter({
        words: [
            "< Hi, Welcome to SynthSense! />",
            "A startup innovating hospital-focused solutions.",
            "Crafting cutting-edge medical apps to deliver nurse efficiency and empower patients.",
        ],
        loop: true,
        delaySpeed: 1000,
    });

    return (
        <div className='bg-[#fff8e7] h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="/logo.jpg"
                alt="profile pic"
            />
            <div className='z-20'>
                <h2 className='font-sm uppercase text-black pb-2 tracking-[15px]'>
                    Health-Tech Startup
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3 text-black'>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className='pt-5'>
                    <button className='heroButton bg-black text-[#fff8e7]' onClick={() => { window.location.href = '#about'; }}>
                        About
                    </button>
                    {/*<button className='heroButton bg-[#2be6f0]' onClick={() => { window.location.href = '#experience'; }}>
                        Experience
                    </button>
                    <button className='heroButton bg-[#2be6f0]' onClick={() => { window.location.href = '#skills'; }}>
                        Skills
                    </button>*/}
                    <button className='heroButton bg-black text-[#fff8e7]' onClick={() => { window.location.href = '#projects'; }}>
                        Projects
                    </button>
                    <button className='heroButton bg-black text-[#fff8e7]' onClick={() => { window.location.href = '#contact'; }}>
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
