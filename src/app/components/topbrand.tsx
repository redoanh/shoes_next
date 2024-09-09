import React from 'react';
import Link from 'next/link';
import Container from '@/app/components/Container';

const TopBrand = () => {
    return (
        <div className="bg-white h-16 flex items-center justify-center px-4 ">
            <Container>
                <div className="brand-panel-contain">
                    <ul className="flex flex-wrap space-x-4 text-gray-600 justify-center">
                        <li className="flex-shrink-0">
                            <Link href="/" passHref>
                                <span className="hover:no-underline text-orange-600 font-bold">Top Brand</span>
                            </Link>
                        </li>
                        <li className="flex-shrink-0">
                            <span>:</span>
                        </li>
                        <li className="flex-shrink-0">
                            <Link href="/" passHref>
                                <span className=" no-underline hover:no-underline">aerie</span>
                            </Link>
                        </li>
                        <li className="flex-shrink-0">
                            <Link href="/" passHref>
                                <span className=" no-underline hover:no-underline">baci lingrie</span>
                            </Link>
                        </li>
                        <li className="flex-shrink-0">
                            <Link href="/" passHref>
                                <span className=" no-underline hover:no-underline">gerbe</span>
                            </Link>
                        </li>
                        <li className="flex-shrink-0">
                            <Link href="/" passHref>
                                <span className="no-underline hover:no-underline">jolidon</span>
                            </Link>
                        </li>
                        <li className="flex-shrink-0">
                            <Link href="/" passHref>
                                <span className="no-underline hover:no-underline">oysho</span>
                            </Link>
                        </li>
                        <li className="flex-shrink-0">
                            <Link href="/" passHref>
                                <span className="no-underline hover:no-underline">ultimo</span>
                            </Link>
                        </li>
                        <li className="flex-shrink-0">
                            <Link href="/" passHref>
                                <span className="no-underline hover:no-underline">vassarette</span>
                            </Link>
                        </li>
                        <li className="flex-shrink-0">
                            <Link href="/" passHref>
                                <span className="no-underline hover:no-underline">wonderbra</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default TopBrand;
