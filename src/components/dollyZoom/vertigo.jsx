import React, { useState } from 'react';

const Hitchcock = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='hitchcock-container'>
            <div 
                className='ui'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={`box fore-box ${isHovered ? 'on' : ''}`}>
                    <div className='img fore'></div>
                </div>
                <div className={`box bg-box ${isHovered ? 'on' : ''}`}>
                    <div className='img bg'></div>
                </div>
            </div>
        </div>
    );
}

export default Hitchcock;


/*

<div class="flex flex-col rounded-2xl w-64 bg-[#1b1b1b] shadow-xl">
    <figure class="flex justify-center items-center rounded-2xl">
        <img src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png" alt="Card Preview" class="rounded-t-2xl">
    </figure>
    <div class="flex flex-col p-8">
        <div class="text-2xl font-bold  text-center text-[#f3e704] pb-6">About Us</div>
        <div class="font-bold text-lg  text-center text-[#ffffff]"></div>
        <div class="flex justify-end pt-6">
            <button class="bg-[#f3e704] text-[#1b1b1b] w-full font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Try it out!</button>
        </div>
    </div>
</div>


*/