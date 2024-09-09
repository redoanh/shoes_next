import React from 'react';
import { Input, Button } from 'antd';
import { MdOutlineAttachEmail } from "react-icons/md";

const NewsletterBanner = () => {
    return (
        <div className="relative bg-primary p-8 flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("/asstes/images/a/subscribe2.png")' }}
            >
                {/* Overlay to ensure text is readable */}
                <div className="absolute inset-0  opacity-40"></div>
            </div>

            {/* Content on top of the background */}
            <div className="relative z-10 w-full max-w-screen-xl px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                {/* Left Side: Text and Icon */}
                <div className="flex flex-col md:flex-row items-center space-x-4 md:space-x-8">
                    <MdOutlineAttachEmail className='text-white h-16 w-16 md:h-20 md:w-20' />
                    <div className="text-white text-lg md:text-xl font-bold text-center md:text-left">
                        <span>Sale Up To 20% Off For</span>
                        <br />
                        <span className="text-xl md:text-2xl">JOIN OUR NEWSLETTER</span>
                    </div>
                </div>

                {/* Right Side: Email Input and Subscribe Button */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    <Input
                        placeholder="Enter Your Email"
                        className="w-full md:w-64"
                        style={{ height: '40px', borderRadius: '0px' }}
                    />
                    <Button
                        type="primary"
                        style={{ height: '40px', borderRadius: '0px', background: 'rgb(132, 135, 133)', color: '#fff' }}
                    >
                        SUBSCRIBE
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NewsletterBanner;
