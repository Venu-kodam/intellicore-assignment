"use client"
import Image from 'next/image'
import logo from '@/public/logo.svg'
import drop_down from '@/public/drop_down.svg'
import React, { useState, useEffect } from 'react'

const navItems = [
    {
        name: "Features",
        href: "#",
        subItems: [
            { name: "AI Job Match", href: "#" },
            { name: "Insider Connections", href: "#" },
            { name: "AI Copilot Orion", href: "#" },
            { name: "H1B Jobs", href: "#" }
        ]
    },
    {
        name: "AI Agent",
        href: "#"
    },
    {
        name: "Resume AI",
        href: "#"
    },
    {
        name: "About Us",
        href: "#"
    },
    {
        name: "Blog",
        href: "#"
    }
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className="fixed top-4 z-50 px-2 w-full sm:px-6 py-1">
            <div className={`max-w-7xl mx-auto flex items-center justify-between px-4 py-2 transition-all duration-300 ${isScrolled
                ? 'bg-[#f2f4f5] rounded-full shadow-sm'
                : 'bg-transparent'
                }`}>
                {/* Logo */}
                <div className="flex items-center">
                    <Image src={logo} alt="Logo" className='cursor-pointer w-full ' width={150} height={100} />
                </div>
                {/* Navigation Links */}
                {/* <div className="hidden md:flex space-x-8">
                    {navItems.map((item, index) => (
                        // <a href={item.href} key={index} className="transition-colors border-0 font-semibold text-sm">{item.name}</a>
                        <div key={index} className="group relative">
                            <a href={item.href} className="flex items-center gap-1 transition-colors border-0 font-semibold text-sm">
                                {item.name}
                                {item.subItems && <Image src={drop_down} alt='dropdown' className="w-4 h-4" />}
                            </a>
                            {item.subItems && (
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <a
                                            key={subIndex}
                                            href={subItem.href}
                                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                                        >
                                            {subItem.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div> */}
                <div className="hidden md:flex space-x-8 relative">
                    {navItems.map((item, index) => (
                        <div key={index} className="relative">
                            <button
                                onClick={() => handleDropdown(index)}
                                className="flex items-center gap-1 cursor-pointer font-semibold text-sm focus:outline-none"
                            >
                                {item.name}
                                {item.subItems && <Image src={drop_down} alt='drop-down' className={`w-4 h-4 transition-transform duration-300 ${openDropdown === index ? 'rotate-180' : ''}`} />}
                            </button>
                            {item.subItems && openDropdown === index && (
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <a
                                            key={subIndex}
                                            href={subItem.href}
                                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                                        >
                                            {subItem.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className='flex items-center gap-6 '>
                    <button className='text-sm font-bold cursor-pointer'>SIGN IN</button>
                    <button className="bg-black rounded-full hover:bg-white hover:text-black text-xs sm:text-sm cursor-pointer border border-white text-white px-2 sm:px-6 py-1 sm:py-2 transition-colors">
                        JOIN NOW
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
