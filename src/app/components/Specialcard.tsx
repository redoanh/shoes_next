import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { GrPowerCycle } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Container from "@/app/components/Container";
import { div } from "framer-motion/client";

interface ItemsProps {
    items: string;
}

const SpecialCard = ({ category }: any) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const slideToShow = [
        {
            id: 1,
            image: '/asstes/images/a/lofer4.jpg', // Fixed the path
            image2: '/asstes/images/a/lofer.jpg', // Fixed the path
            name: 'lofer',
            price: 70,
            discounted: 60,
            brand: 'zara',
            colors: 'white',
            size: 'small',
            category: 'organic'
        },
        {
            id: 2,
            image: '/asstes/images/a/lofer2.jpg', // Fixed the path
            image2: '/asstes/images/a/lofer5.jpg', // Fixed the path
            name: 'lofer',
            price: 70,
            discounted: 60,
            brand: 'zara',
            colors: 'white',
            size: 'small',
            category: 'organic'
        },
        {
            id: 3,
            image: '/asstes/images/a/lofer3.jpg', // Fixed the path
            image2: '/asstes/images/a/lofer6.jpg', // Fixed the path
            name: 'lofer',
            price: 70,
            discounted: 60,
            brand: 'zara',
            colors: 'white',
            size: 'small',
            category: 'organic'
        },
        {
            id: 4,
            image: '/asstes/images/a/lofer7.jpg', // Fixed the path
            image2: '/asstes/images/a/lofer2.jpg', // Fixed the path
            name: 'lofer',
            price: 70,
            discounted: 60,
            brand: 'zara',
            colors: 'white',
            size: 'small',
            category: 'organic'
        },
        {
            id: 5,
            image: '/asstes/images/a/lofer8.jpg', // Fixed the path
            image2: '/asstes/images/a/lofer7.jpg', // Fixed the path
            name: 'lofer',
            price: 70,
            discounted: 60,
            brand: 'zara',
            colors: 'white',
            size: 'small',
            category: 'organic'
        },
        {
            id: 6,
            image: '/asstes/images/a/lofer2.jpg', // Fixed the path
            image2: '/asstes/images/a/lofer3.jpg', // Fixed the path
            name: 'lofer',
            price: 70,
            discounted: 60,
            brand: 'zara',
            colors: 'white',
            size: 'small',
            category: 'organic'
        },
        // ... More items
    ]

    const filterCategory = slideToShow.filter((item: any) => {
        if (!category) {
            return true;
        }
        return item?.category?.toLowerCase() === category?.toLowerCase();
    });

    return (
        <div className=" p-10 bg-[#fff0f0] ">
            <Container>
                <div className="grid grid-cols-2 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 py-2">
                    {filterCategory.slice(0, 5).map((img, index) => (
                        <div
                            key={img.id}
                            className="relative group border border-gray-300"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onTouchStart={() => setHoveredIndex(index)}
                        >
                            <Link href="/product/1">
                                <div className="relative overflow-hidden w-full h-48"> {/* Ensure the container has a size */}
                                    {/* First Image */}
                                    <div className={`absolute inset-0 transition-opacity duration-1000 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                                        <Image
                                            src={img.image2}
                                            alt="product"
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>

                                    {/* Second Image */}
                                    <div className={`absolute inset-0 transition-opacity duration-1000 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                                        <Image
                                            src={img.image}
                                            alt="product"
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                </div>
                            </Link>

                            {/* Icon Section */}
                            <div
                                className={`flex justify-center space-x-2 mt-2 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                            >
                                <Link
                                    href="javascript:void(0)"
                                    aria-label="Add to Wishlist"
                                    className="bg-gray-50 border border-gray-300 hover:bg-green-600 text-gray-500 hover:text-white duration-300 p-2 rounded"
                                >
                                    <FaRegHeart />
                                </Link>
                                <Link
                                    href="javascript:void(0)"
                                    aria-label="Quick View"
                                    className="bg-gray-50 border border-gray-300 hover:bg-green-600 text-gray-500 hover:text-white duration-300 p-2 rounded"
                                >
                                    <IoEyeOutline />
                                </Link>
                                <Link
                                    href="javascript:void(0)"
                                    aria-label="User"
                                    className="bg-gray-50 border border-gray-300 hover:bg-green-600 text-gray-500 hover:text-white duration-300 p-2 rounded"
                                >
                                    <GrPowerCycle />
                                </Link>
                                <Link
                                    href="javascript:void(0)"
                                    aria-label="Add to Cart"
                                    className="bg-gray-50 border border-gray-300 hover:bg-green-600 text-gray-500 hover:text-white duration-300 p-2 rounded"
                                >
                                    <AiOutlineShoppingCart />
                                </Link>
                            </div>

                            {/* Product Details */}
                            <div className="product-detail text-center mt-4 bg-green-100 p-2 rounded">
                                <ul className="rating-star flex justify-center text-yellow-500 space-x-1">
                                    {Array(5)
                                        .fill("")
                                        .map((_, i) => (
                                            <li key={i}>
                                                <FaStar />
                                            </li>
                                        ))}
                                </ul>
                                <Link href="#" className="block mt-2 px-2">
                                    <h6 className="text-xs font-extrabold text-gray-600 truncate">
                                        {img.name}
                                    </h6>
                                </Link>
                                <div className="text-sm text-gray-500 mt-2 border-t border-gray-300 pt-2">
                                    <div className="grid grid-cols-2 gap-x-2">
                                        <div className="flex justify-between py-1 border-b border-gray-200">
                                            <span className="font-medium">Price:</span>
                                            <span className="text-right">${img.price}</span>
                                        </div>
                                        <div className="flex justify-between py-1 border-b border-gray-200">
                                            <span className="font-medium">Discounted:</span>
                                            <span className="text-right">${img.discounted}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default SpecialCard;
