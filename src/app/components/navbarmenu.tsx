"use client";
import React, { useState } from 'react';
import { Input, Dropdown, Menu } from 'antd';
import { SearchOutlined, DownOutlined, GiftOutlined } from '@ant-design/icons';
import Container from '@/app/components/Container';
import { TfiGift } from "react-icons/tfi";
import { FaPhoneVolume } from "react-icons/fa";

const HomePage = () => {
    const [isMoreCategoriesVisible, setMoreCategoriesVisible] = useState(false);

    const toggleMoreCategories = () => {
        setMoreCategoriesVisible(prev => !prev);
    };

    // Create menu items for the "Shop by Category" dropdown
    const shopByCategoryMenu = (
        <Menu>
            <Menu.Item key="1" className="category-item">
                <img src="../assets/images/layout-1/nav-img/01.png" className="category-icon" />
                <span>Western Wear</span>
            </Menu.Item>
            <Menu.Item key="2" className="category-item">
                <img src="../assets/images/layout-1/nav-img/02.png" className="category-icon" />
                <span>TV, Appliances</span>
            </Menu.Item>
            <Menu.Item key="3" className="category-item">
                <img src="../assets/images/layout-1/nav-img/03.png" className="category-icon" />
                <span>Pets Products</span>
            </Menu.Item>
            <Menu.Item key="4" className="category-item">
                <img src="../assets/images/layout-1/nav-img/04.png" className="category-icon" />
                <span>Car, Motorbike</span>
            </Menu.Item>
            <Menu.Item key="5" className="category-item">
                <img src="../assets/images/layout-1/nav-img/05.png" className="category-icon" />
                <span>Industrial Products</span>
            </Menu.Item>
            <Menu.Item key="6" className="category-item">
                <img src="../assets/images/layout-1/nav-img/06.png" className="category-icon" />
                <span>Beauty, Health Products</span>
            </Menu.Item>
            <Menu.Item key="7" className="category-item">
                <img src="../assets/images/layout-1/nav-img/07.png" className="category-icon" />
                <span>Grocery Products</span>
            </Menu.Item>
            <Menu.Item key="8" className="category-item">
                <img src="../assets/images/layout-1/nav-img/08.png" className="category-icon" />
                <span>Sports</span>
            </Menu.Item>
            <Menu.Item key="9" className="category-item">
                <img src="../assets/images/layout-1/nav-img/09.png" className="category-icon" />
                <span>Bags, Luggage</span>
            </Menu.Item>
            <Menu.Item key="10" className="category-item">
                <img src="../assets/images/layout-1/nav-img/10.png" className="category-icon" />
                <span>Movies, Music</span>
            </Menu.Item>
            <Menu.Item key="11" className="category-item">
                <img src="../assets/images/layout-1/nav-img/11.png" className="category-icon" />
                <span>Video Games</span>
            </Menu.Item>
            {isMoreCategoriesVisible && (
                <Menu.Item key="12" className="category-item">
                    <img src="../assets/images/layout-1/nav-img/12.png" className="category-icon" />
                    <span>Toys, Baby Products</span>
                </Menu.Item>
            )}
            <Menu.Item key="more" className="more-categories">
                <span onClick={toggleMoreCategories}>
                    More Categories <DownOutlined className={`transition-transform ${isMoreCategoriesVisible ? 'rotate-180' : ''}`} />
                </span>
            </Menu.Item>
        </Menu>
    );

    // Create menu items for the "All Categories" dropdown
    const allCategoriesMenu = (
        <Menu>
            <Menu.Item key="1">
                <a href="#">Category 1</a>
            </Menu.Item>
            <Menu.Item key="2">
                <a href="#">Category 2</a>
            </Menu.Item>
            <Menu.Item key="3">
                <a href="#">Category 3</a>
            </Menu.Item>
            {/* Add more categories here if needed */}
        </Menu>
    );

    return (
        <div className="bg-primary text-tprimary mx-auto">
            <Container>
                {/* Header - Hidden on mobile */}
                <div className="hidden md:flex flex-col md:flex-row justify-between items-center bg-[#ff6000] text-white">
                    {/* Shop by Category with Dropdown */}
                    <Dropdown overlay={shopByCategoryMenu} trigger={['click']} className="cursor-pointer">
                        <div className="flex items-center bg-[#444444] px-10 py-6">
                            <DownOutlined className={`text-white mr-2 transition-transform duration-300`} />
                            <span className="font-bold">SHOP BY CATEGORY</span>
                        </div>
                    </Dropdown>

                    {/* Search Bar */}
                    <div className="flex flex-grow md:mx-4 bg-white items-center">
                        <SearchOutlined className="text-gray-500 pl-4" />
                        <Input
                            placeholder="Search a Product"
                            className="w-full px-4 py-2 border-none outline-none text-gray-700"
                        />
                        <div className="px-8 py-2 border-l text-gray-400 cursor-pointer hidden md:block">
                            <Dropdown overlay={allCategoriesMenu} trigger={['click']} className="cursor-pointer">
                                <div className="flex">
                                    <DownOutlined className="mr-6" />
                                    <span className="flex font-semibold">ALL CATEGORIES</span>
                                </div>
                            </Dropdown>
                        </div>
                    </div>

                    {/* Call Us */}
                    <div className="flex items-center text-white mr-10 md:space-x-6 mt-2 md:mt-0">
                        <FaPhoneVolume className='text-3xl font-bold' />
                        <span>CALL US</span>
                        <span className="font-bold">123-456-76890</span>
                    </div>

                    {/* Gift Box */}
                    <div className="flex items-center bg-yellow-500 ml-0 md:ml-4 px-4 md:px-8 md:py-3 cursor-pointer md:mt-0">
                        <TfiGift className="text-white mr-4 text-4xl font-bold" />
                        <span>
                            <span className="text-sm md:text-base">GIFT BOX</span>
                            <span className="ml-2 font-bold hidden md:block text-sm md:text-base">Festival Offer</span>
                        </span>
                    </div>
                </div>

                {/* Main Content */}
            </Container>
        </div>
    );
};

export default HomePage;
