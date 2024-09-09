'use client'
import React, { useState } from 'react'

export default function ProductCat({ handleCategoryChange, active }: any) {

    return (
        <section className='bg-[#fae0e0] mt-8 mb-8'>
            <div className="flex justify-center items-center h-12 lg:h-24 p-2">
                <div className="flex justify-center items-center uppercase lg:font-bold font-semibold text-sm lg:text-base gap-1 lg:gap-3">
                    <div className={`text-primary py-4 lg:py-8 lg:px-4 md:px-2 px-0.5 text-center lg:border-t-4 borger-t-2 cursor-pointer ${active === '' ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary'}`} onClick={() => handleCategoryChange('')}>FASHION</div>
                    <div className={`text-primary py-2 lg:py-8  lg:px-4 md:px-2 px-0.5 text-center lg:border-t-4 borger-t-2 cursor-pointer ${active === 'organic' ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary'}`} onClick={() => handleCategoryChange('organic')}>ELECTRONIC</div>
                    <div className={`text-primary py-2 lg:py-8  lg:px-4 md:px-2 px-0.5 text-center lg:border-t-4 borger-t-2  cursor-pointer ${active === 'vegetables' ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary'}`} onClick={() => handleCategoryChange('vegetables')}>FOOTWARE</div>
                    <div className={`text-primary py-2 lg:py-8  lg:px-4 md:px-2 px-0.5 text-center lg:border-t-4 borger-t-2  cursor-pointer ${active === 'fish' ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary'}`} onClick={() => handleCategoryChange('fish')}>SPORTS</div>
                    <div className={`text-primary py-2 lg:py-8  lg:px-4 md:px-2 px-0.5 text-center lg:border-t-4 borger-t-2  cursor-pointer ${active === 'fruits' ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary'}`} onClick={() => handleCategoryChange('fruits')}>TOYS</div>
                    <div className={`text-primary py-4 lg:py-12  lg:px-4 md:px-2 px-0.5 text-center lg:border-t-4 borger-t-2  cursor-pointer ${active === 'fruits' ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary'}`} onClick={() => handleCategoryChange('fruits')}>BOOKS</div>
                </div>
            </div>
        </section>
    )
}
