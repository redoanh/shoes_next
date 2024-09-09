"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "HOME",
    link: "/",
    children: [
      {
        label: "Todo list",
        link: "http://redoan.intels.co/",
      },
      {
        label: "Calendar",
        link: "#",
      },
      {
        label: "Reminders",
        link: "#",
      },
      {
        label: "Planning",
        link: "#",
      },
    ]
  },
  {
    label: "SHOP",
    link: "/shopping",
    children: [
      {
        label: "History",
        link: "#"
      },
      {
        label: "Our Team",
        link: "#"
      },
      {
        label: "Blog",
        link: "#"
      }
    ]
  },
  {
    label: "PRODUCTS",
    link: "/product/1",
    children: [
      {
        label: "History",
        link: "#"
      },
      {
        label: "Our Team",
        link: "#"
      }
    ]
  },
  {
    label: "PAGES",
    link: "#",
    children: [
      {
        label: "Cart List",
        link: "/cart"
      },
      {
        label: "Wish List",
        link: "/wishlist"
      },
      {
        label: "Order History",
        link: "/orderhistory"
      },
      {
        label: "Order Success ",
        link: "/ordersuccess"
      }
    ]
  },
  {
    label: "BLOG",
    link: "#",
    children: [
      {
        label: "History",
        link: "#"
      },
      {
        label: "Our Team",
        link: "#"
      }
    ]
  }
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State for sidebar
  const [isCartOpen, setCartOpen] = useState(false); // State for cart bottom bar
  const [isMounted, setIsMounted] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function openSideMenu() {
    setSideMenuOpen(true);
  }

  function closeSideMenu() {
    setSideMenuOpen(false);
  }

  function toggleSidebar() {
    setSidebarOpen(!isSidebarOpen);
  }

  function toggleCart() {
    setCartOpen(!isCartOpen);
  }

  return (
    <div className={`bg-white sticky top-0 z-20 ${isSticky ? 'shadow-md' : ''}`}>
      <div className={`transition-all duration-300 ${isSticky ? 'py-2 px-4 sm:px-0 h-16' : 'py-6 px-4 sm:px-0 h-24'}`}>
        <div className="mx-auto flex lg:w-[60%] sm:w-[60%] md:w-[60%] items-center justify-between text-sm">
          {/* Left side */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link href={`/`}>
              <Image
                src="/asstes/images/logo/logo.png"
                width={450}
                height={300}
                alt="logo"
                className="cursor-pointer w-32 lg:w-52"
              />
            </Link>
          </div>

          {/* Middle section for menu */}
          <div className="hidden md:flex w-full justify-center">
            <div className="flex gap-4 transition-all">
              {navItems.map((d, i) => (
                <Link
                  key={i}
                  href={d.link ?? '#'}
                  className="relative group px-2 py-3 transition-all"
                >
                  <p className="flex cursor-pointer items-center gap-2 text-base text-black font-semibold group-hover:text-[#ff9558]">
                    <span>{d.label}</span>
                    {d.children && (
                      <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                    )}
                  </p>

                  {/* Dropdown */}
                  {isMounted && d.children && (
                    <div className="absolute z-10 left-0 top-12 hidden w-auto flex-col gap-1 border-4 bg-white py-3 shadow-sm transition-all group-hover:flex">
                      {d.children.map((ch, i) => (
                        <Link
                          key={i}
                          href={ch.link ?? '#'}
                          className="flex cursor-pointer items-center py-1 pl-4 pr-8 text-black hover:text-black"
                        >
                          {ch.iconImage && (
                            <Image
                              src={ch.iconImage}
                              width={150}
                              height={50}
                              alt="item-icon"
                            />
                          )}
                          <span className="whitespace-nowrap pl-3">
                            {ch.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center">
              <button className="cursor-pointer text-gray-400 px-3 py-3 rounded-full text-base">
                <IoPersonOutline className="text-3xl font-bold" />
              </button>
              <button
                onClick={toggleSidebar} // Toggle sidebar
                className="cursor-pointer text-gray-400 px-3 py-3 rounded-full text-base"
              >
                <CiHeart className="text-3xl font-bold" />
              </button>
              <button
                onClick={toggleCart} // Toggle cart bottom bar
                className="cursor-pointer bg-primary text-tprimary px-3 py-3 text-base"
              >
                <FaCartPlus className="text-3xl font-bold" />
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <FiMenu
              onClick={openSideMenu}
              className="cursor-pointer text-black text-4xl md:hidden"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMounted && isSideMenuOpen && (
        <MobileNav closeSideMenu={closeSideMenu} />
      )}

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed z-20 right-0 top-0 w-64 h-full bg-white shadow-lg p-4 transition-transform duration-300 ease-in-out">
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-2xl"
          >
            <AiOutlineClose />
          </button>
          <div className="flex flex-col gap-4">
            <p>Sidebar content goes here.</p>
            {/* Add more content as needed */}
          </div>
        </div>
      )}

      {/* Cart Bottom Bar */}
      {isCartOpen && (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 transition-transform duration-300 ease-in-out transform translate-y-0">
          <button
            onClick={toggleCart}
            className="absolute top-4 right-4 text-2xl"
          >
            <AiOutlineClose />
          </button>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">Cart</h2>
            {/* Cart Items */}
            <div>
              <p>Item 1 - $10</p>
              <p>Item 2 - $20</p>
              {/* Add more cart items here */}
            </div>
            <div className="mt-4">
              <p className="font-bold">Total: $30</p>
              <button className="mt-2 w-full bg-primary text-white py-2 rounded">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeSideMenu();
    }, 1000);
  };

  return (
    <div
      className={`fixed z-10 left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden transition-opacity duration-500 ease-in-out ${isMounted ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className={`h-full w-[60%] bg-white px-4 py-4 transition-transform duration-500 ease-in-out transform ${isMounted ? "translate-x-0" : "translate-x-full"}`}
      >
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={handleCloseMenu}
            className="cursor-pointer text-4xl text-black transition-transform duration-500"
          />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {isMounted &&
            navItems.map((d, i) => (
              <SingleNavItem
                key={i}
                label={d.label}
                iconImage={d.iconImage}
                link={d.link}
                closeSideMenu={handleCloseMenu}
              >
                {d.children}
              </SingleNavItem>
            ))}
        </div>
      </div>
    </div>
  );
}

type SingleNavItemProps = {
  label: string;
  link?: string;
  iconImage?: string;
  closeSideMenu: () => void;
  children?: NavItem[];
};

function SingleNavItem({ label, link, iconImage, closeSideMenu, children }: SingleNavItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Link href={link ?? "#"}>
        <span
          onClick={() => closeSideMenu()}
          className="flex items-center py-2 text-black hover:text-black"
        >
          {iconImage && <Image src={iconImage} width={30} height={30} alt={label} />}
          <span className="ml-2">{label}</span>
        </span>
      </Link>
      {children && (
        <div className="ml-4 flex flex-col">
          {children.map((child, index) => (
            <SingleNavItem
              key={index}
              label={child.label}
              link={child.link}
              iconImage={child.iconImage}
              closeSideMenu={closeSideMenu}
            // children={child.children}
            />
          ))}
        </div>
      )}
    </div>
  );
}
