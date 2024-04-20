import React, { useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from "../components/BackgroundCircles"
import { Link } from "react-router-dom";
import { navigation } from "../constants";
import taxCutImage from "../assets/taxCut.jpg"

const Dashboard = () => {
    const [text, count] = useTypewriter({
        words: [
            "< Hey there! Welcome to TaxCut! />",
            "A product designed to help you minimize taxes and maximize recovery/aid!",
            "Empowers entrepreneurs to navigate the labyrinth of tax codes!",
        ],
        loop: true,
        delaySpeed: 1000,
    });

    return (
        <div className='bg-[#cff3ff] h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            {/* c2eefc */}
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src={taxCutImage}
                alt="profile pic"
            />
            <div className='z-20'>
                <h2 className='font-sm uppercase text-black pb-2 tracking-[15px]'>
                    A Way Around The Ordinary
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3 text-black'>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className='pt-5'>
                    <Link to='/customer' className='heroButton bg-black text-[#fff8e7]'>
                        Customer
                    </Link>
                    <Link to='/recovery' className='heroButton bg-black text-[#fff8e7]'>
                        Recovery
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
