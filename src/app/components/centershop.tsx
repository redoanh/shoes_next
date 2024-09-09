import React from 'react';
import Link from 'next/link';

const CenterShop = () => {
    return (
        <div className=" p-10 sm:p-6 lg:pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-l mx-auto">

                {/* Image 1 */}
                <div className="relative bg-white overflow-hidden image-container">
                    <img
                        src="/asstes/images/a/lofer4.jpg" // Ensure the path is correct
                        alt="Shop Item 1"
                        className="w-full h-[300px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-gray-900 bg-opacity-50 p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600">The Best Loafer Shoes</h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2">Minimum 30% Off</p>
                        <Link href={`/`}>
                            <div className="bg-orange-500 text-white px-4 py-2 mt-4 text-sm sm:text-base rounded-md hover:bg-orange-600 transition-colors">Shop Now</div>
                        </Link>
                    </div>
                </div>

                {/* Image 2 */}
                <div className="relative bg-white overflow-hidden image-container">
                    <img
                        src="/asstes/images/a/lofer5.jpg" // Ensure the path is correct
                        alt="Shop Item 2"
                        className="w-full h-[300px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-gray-900 bg-opacity-50 p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600">Stylish Loafers</h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2">Up to 25% Off</p>
                        <Link href={`/`}>
                            <div className="bg-orange-500 text-white px-4 py-2 mt-4 text-sm sm:text-base rounded-md hover:bg-orange-600 transition-colors">Shop Now</div>
                        </Link>
                    </div>
                </div>

                {/* Image 3 */}
                <div className="relative bg-white overflow-hidden image-container">
                    <img
                        src="/asstes/images/a/lofer6.jpg" // Ensure the path is correct
                        alt="Shop Item 3"
                        className="w-full h-[300px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-gray-900 bg-opacity-50 p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600">Elegant Loafers</h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2">20% Off Sale</p>
                        <Link href={`/`}>
                            <div className="bg-orange-500 text-white px-4 py-2 mt-4 text-sm sm:text-base rounded-md hover:bg-orange-600 transition-colors">Shop Now</div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CenterShop;
