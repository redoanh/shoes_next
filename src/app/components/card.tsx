"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import Container from "@/components/Container";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { GrPowerCycle } from "react-icons/gr";
import Container from "@/app/components/Container";
interface ItemsProps {
    items: string;
}

const ProductCard = ({ category }: any) => {
    const [slidesToShow, setSlidesToShow] = useState<number>(5);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleTouch = () => {
        setHoveredIndex(hoveredIndex !== null ? null : hoveredIndex);
    };

    const slideToShow = [
        {
            id: 1,
            image: '/asstes/images/a/lofer2.jpg',
            image2: '/asstes/images/a/lofer2.jpg',
            name: 'Best Loffer',
            price: 70,
            discounted: 60,
            brand: 'zara',
            colors: 'white',
            size: 'small',
            category: 'organic'
        },
        {
            id: 2,
            image: '/asstes/images/a/lofer2.jpg',
            image2: '/asstes/images/a/lofer2.jpg',
            name: 'Best Loffer',
            price: 72,
            discounted: 65,
            brand: 'nike',
            colors: 'brown',
            size: 'large',
            category: 'vegetables'
        },
        {
            id: 3,
            image: '/asstes/images/a/lofer2.jpg',
            image2: '/asstes/images/a/lofer2.jpg',
            name: 'Best Loffer',
            price: 75,
            discounted: 68,
            brand: 'adidas',
            colors: 'red',
            size: 'medium',
            category: 'fish'
        },
        {
            id: 4,
            image: '/asstes/images/a/lofer2.jpg',
            image2: '/asstes/images/a/lofer2.jpg',
            name: 'Best Loffer',
            price: 80,
            discounted: 70,
            brand: 'lotto',
            colors: 'teal',
            size: 'xl',
            category: 'fruits'
        },
        {
            id: 5,
            image: '/asstes/images/a/lofer2.jpg',
            image2: '/asstes/images/a/lofer2.jpg',
            name: 'Best Loffer',
            price: 83,
            discounted: 75,
            brand: 'puma',
            colors: 'pink',
            size: 'xxl',
            category: 'fruits'
        },
        {
            id: 6,
            image: '/asstes/images/a/lofer2.jpg',
            image2: '/asstes/images/a/lofer2.jpg',
            name: 'Best Loffer',
            price: 75,
            discounted: 70,
            brand: 'nike',
            colors: 'white',
            size: 'medium',
            category: 'organic'
        },
    ]

    const filterCategory = slideToShow.filter((item: any) => {
        if (!category) {
            return true;
        }
        return item?.category?.toLowerCase() === category?.toLowerCase();
    })

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 py-2">
            {/* <Container></Container> */}
            {filterCategory.slice(0, 5).map((img, index) => (
                <div
                    key={index}
                    className="relative group w-full bg-white"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onTouchStart={() => setHoveredIndex(index)}
                >
                    <Link href="/product/1">
                        <div className="relative overflow-hidden w-full">
                            {/* First Image */}
                            <Image
                                src={img.image2}
                                alt="product"
                                width={300}
                                height={300}
                                className={`w-full h-full object-contain transition-opacity duration-1000 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                                    }`}
                            />

                            {/* Second Image */}
                            <Image
                                src={img.image}
                                alt="product"
                                width={300}
                                height={300}
                                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                        </div>
                    </Link>

                    {/* Icon Section */}
                    <div
                        className={`absolute bottom-32 right-0 flex flex-col space-y-2 transition-opacity duration-300 group-hover:opacity-100 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-300 divide-y">
                            <Link
                                href="javascript:void(0)"
                                aria-label="Add to Wishlist"
                                className="hover:bg-green-600 text-gray-500 hover:text-white duration-300 px-4 py-4"
                            >
                                <FaRegHeart />
                            </Link>
                            <Link
                                href="javascript:void(0)"
                                aria-label="Quick View"
                                className="hover:bg-green-600 text-gray-500 hover:text-white duration-300 px-4 py-4"
                            >
                                <IoEyeOutline />
                            </Link>
                            <Link
                                href="javascript:void(0)"
                                aria-label="User"
                                className="hover:bg-green-600 text-gray-500 hover:text-white duration-300 px-4 py-4"
                            >
                                <GrPowerCycle />
                            </Link>
                        </div>
                    </div>

                    <div className="product-detail text-center mt-4 bg-white">
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
                        <span className="detail-price block text-xs text-red-500 font-bold mt-1 mb-3">
                            $ {img.price}.00
                            <span className="line-through text-gray-500 ml-2">
                                $ {img.discounted}.00
                            </span>
                        </span>
                    </div>
                    <button className="py-2 w-full bottom-0 flex items-center justify-center text-lg font-semibold bg-yellow-400 text-tsecondary hover:bg-primary hover:text-tprimary duration-300 rounded-sm truncate">
                        <Link href={`/cart`}>Add to Cart</Link>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;

