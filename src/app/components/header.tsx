'use client';

import React from 'react';
import { FaAngleDown, FaApple, FaAndroid, FaWindows, FaDollarSign as FaUsd, FaEuroSign as FaEur, FaRupeeSign as FaInr } from 'react-icons/fa';
import Container from "@/app/components/Container";

const TopHeader = () => {
  return (
    <div className="py-2 hidden sm:block bg-primary text-tprimary mx-auto">
      {/* Content - Adjusting for lg screens */}
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-2 lg:space-y-0  ">

          {/* Left side content */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 text-sm space-y-2 sm:space-y-0 lg:justify-center">
            <div className="flex items-center space-x-4">
              <p className="text-xs sm:text-sm md:text-sm lg:text-md cursor-pointer text-center sm:text-left lg:text-center sm:tracking-normal">
                Free shipping on orders over $99
              </p>

              <div className="app-link flex items-center space-x-4">
                <h6 className="text-sm">Download App</h6>
                <ul className="flex space-x-3">
                  <li><a href="#"><FaApple className="text-white text-sm" /></a></li>
                  <li><a href="#"><FaAndroid className="text-white text-sm" /></a></li>
                  <li><a href="#"><FaWindows className="text-white text-sm" /></a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Center content */}
          <div className="hidden lg:flex lg:space-x-6 lg:items-center lg:ml-auto">
            <div className="top-menu-block flex items-center space-x-6">
              <ul className="flex space-x-4 whitespace-nowrap font-semibold">
                <li><a href="javascript:void(0)" className="text-white">Gift Cards</a></li>
                <li><a href="javascript:void(0)" className="text-white">Notifications</a></li>
                <li><a href="javascript:void(0)" className="text-white">Help & Contact</a></li>
                <li><a href="javascript:void(0)" className="text-white">Today's Deal</a></li>
                <li><a href="javascript:void(0)" className="text-white">Track Order</a></li>
                <li><a href="javascript:void(0)" className="text-white">Shipping</a></li>
                <li><a href="javascript:void(0)" className="text-white">Easy Returns</a></li>
              </ul>
            </div>
          </div>

          {/* Right side content */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 text-sm space-y-2 sm:space-y-0 lg:ml-8  lg:justify-center">
            <div className="language-currency-block flex items-center space-x-4">
              <div className="relative group">
                <span className="cursor-pointer text-md font-semibold flex items-center">
                  English <FaAngleDown className="ml-1" />
                </span>
                <ul className="absolute hidden group-hover:block mt-2 space-y-1 bg-white text-black list-none p-2 w-32 shadow-md">
                  <li><a href="javascript:void(0)" className="block py-1 px-2 hover:bg-gray-200">Hindi</a></li>
                  <li><a href="javascript:void(0)" className="block py-1 px-2 hover:bg-gray-200">English</a></li>
                  <li><a href="javascript:void(0)" className="block py-1 px-2 hover:bg-gray-200">Marathi</a></li>
                  <li><a href="javascript:void(0)" className="block py-1 px-2 hover:bg-gray-200">Spanish</a></li>
                </ul>
              </div>
              <div className="relative group">
                <span className="cursor-pointer text-md font-semibold flex items-center">
                  USD <FaAngleDown className="ml-1" />
                </span>
                <ul className="absolute hidden group-hover:block mt-2 space-y-1 bg-white text-black list-none p-2 w-32 shadow-md">
                  <li><a href="javascript:void(0)" className="block py-1 px-2 hover:bg-gray-200"><FaInr className="mr-2" /> INR</a></li>
                  <li><a href="javascript:void(0)" className="block py-1 px-2 hover:bg-gray-200"><FaUsd className="mr-2" /> USD</a></li>
                  <li><a href="javascript:void(0)" className="block py-1 px-2 hover:bg-gray-200"><FaEur className="mr-2" /> EUR</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
