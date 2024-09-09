import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Container from './Container';

const categories = [
    { id: 1, title: 'Loffer', image: '/asstes/images/a/12.jfif' },
    { id: 2, title: 'Bag', image: '/asstes/images/a/lofer5.jpg' },
    { id: 3, title: 'Tools', image: '/asstes/images/a/lofer6.jpg' },
    { id: 4, title: 'Grocery', image: '/asstes/images/a/lofer7.jpg' },
];

const CategorySlider: React.FC = () => {
    return (
        <div className="mx-auto p-4 bg-[#ffa800]">
            <Container>
                <Swiper
                    spaceBetween={10} // Adds some space between slides
                    pagination={{ clickable: true }}
                    className="mySwiper"
                    slidesPerView={1}  // Default to 1 slide per view
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,  // Show 2 slides for small screens
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 3,  // Show 3 slides for medium screens
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 4,  // Show 4 slides for large screens
                        },
                        // when window width is >= 1280px (lg)
                        1280: {
                            slidesPerView: 1,  // Show 1 slide for larger screens
                        },
                    }}
                    style={{ width: '100%' }}
                >
                    {categories.map((category) => (
                        <SwiperSlide key={category.id} className="flex justify-center">
                            <div className="flex flex-col items-center p-4 group">
                                {/* Image */}
                                <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full p-1 border-2 border-white shadow-lg">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>

                                {/* Text */}
                                <div className="mt-2 text-center">
                                    <button
                                        className="text-white rounded-full text-sm md:text-lg font-bold bg-transparent px-4 py-2 md:px-6 md:py-3"
                                    >
                                        Hello New Bangladesh 2.0. {category.title}
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    );
};

export default CategorySlider;
