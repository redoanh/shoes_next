"use client";
import React from 'react';
import Container from '@/app/components/Container';
import Link from 'next/link';
import Slider from 'react-slick';  // Import the Slider component from react-slick

const Product = () => {
    // Slider settings
    const sliderSettings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Adjust as needed
        arrows: false
    };

    return (
        <div className='bg-[#faebe2]'>

            <Container className='p-4 sm:p-6 lg:p-6 lg:ml-72 '>
                {/* Slider Banner Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto">

                    {/* Main Banner Slider */}
                    <div className="lg:col-span-2 relative">
                        <Slider {...sliderSettings}>
                            {/* Slide 1 */}
                            <div className="relative">
                                <img
                                    src="/asstes/images/a/lofer4.jpg" // Update with actual image path
                                    alt="Main Banner 1"
                                    className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-gray-900 bg-opacity-30 p-4 sm:p-6">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600">The Best Loffer Shoes</h2>
                                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-2">Minimum 30% Off</p>
                                    <Link href={`/`}>
                                        <div className="bg-orange-500 text-white px-4 py-2 mt-4 text-sm sm:text-base cursor-pointer">
                                            Shop Now
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            {/* Slide 2 */}
                            <div className="relative">
                                <img
                                    src="/asstes/images/a/lofer2.jpg" // Update with actual image path
                                    alt="Main Banner 2"
                                    className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-gray-900 bg-opacity-30 p-4 sm:p-6">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600">Stylish New Arrivals</h2>
                                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-2">Get 20% Off Today</p>
                                    <Link href={`/`}>
                                        <div className="bg-orange-500 text-white px-4 py-2 mt-4 text-sm sm:text-base cursor-pointer">
                                            Explore Now
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            {/* Slide 3 */}
                            <div className="relative">
                                <img
                                    src="/asstes/images/a/lofer6.jpg" // Update with actual image path
                                    alt="Main Banner 3"
                                    className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-gray-900 bg-opacity-30 p-4 sm:p-6">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600">Exclusive Collections</h2>
                                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-2">Up to 40% Off</p>
                                    <Link href={`/`}>
                                        <div className="bg-orange-500 text-white px-4 py-2 mt-4 text-sm sm:text-base cursor-pointer">
                                            Shop Collection
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Slider>
                    </div>

                    {/* Side Offer Section */}
                    <div className="relative bg-white flex justify-center items-center text-center text-white">
                        <img
                            src="/asstes/images/a/lofer8.jpg"
                            alt="Side Offer"
                            className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-gray-900 bg-opacity-30 p-4 sm:p-6">
                            <p className="text-lg sm:text-xl font-semibold">Special Offer for you</p>
                            <p className="text-3xl sm:text-4xl font-bold">50% off</p>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        {/* Left Offer */}
                        <div className="bg-white p-4 text-center relative">
                            <img
                                src="/asstes/images/a/lofer5.jpg"
                                alt="VIVO Smartphone"
                                className="w-full h-[200px] sm:h-[275px] object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-white bg-opacity-20 p-2">
                                <p className="text-lg font-semibold text-orange-500">Bangla loffer</p>
                                <button className="bg-orange-500 text-white px-4 py-2 mt-4 text-sm sm:text-base">Shop Now</button>
                            </div>
                        </div>

                        {/* Right Offer */}
                        <div className="bg-gray-50 p-4 text-center relative">
                            <img
                                src="/asstes/images/a/lofer6.jpg"
                                alt="Hand Leather Bag"
                                className="w-full h-[200px] sm:h-[275px] object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-white bg-opacity-20 p-4">
                                <p className="text-lg font-semibold text-white">Leather loffer</p>
                                <button className="bg-orange-500 text-white px-4 py-2 mt-4 text-sm sm:text-base">Shop Now</button>
                            </div>
                        </div>
                    </div>

                    {/* Additional Bottom Section */}
                    <div className="bg-gray-50 p-4 sm:p-6 flex justify-center items-center text-center relative mt-4">
                        <img
                            src="/asstes/images/a/lofer7.jpg"
                            alt="Nikon Camera"
                            className="w-full h-[200px] sm:h-[275px] object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-white bg-opacity-20 p-4">
                            <p className="text-lg font-semibold text-[#fffb1c]">10% Off Gulisthan shoes</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Product;
