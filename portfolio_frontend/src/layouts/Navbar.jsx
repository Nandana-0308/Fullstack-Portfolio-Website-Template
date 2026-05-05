import React, { useState, useEffect } from 'react'
import { APP_DATA } from '../constants/appData';
import Button from '../components/Button'
import { Menu, X } from 'lucide-react';
import ThemeToggle from "../components/ThemeToggle";

const navLinks = [
    { ref: "/", label: "about" },
    { ref: "/skills", label: "skills" },
    { ref: "/projects", label: "projects" },
    { ref: "/contact", label: "contact" },
    // { ref: "/achivments", label: "achivments" },
]

//Accept props here
const Navbar = ({ theme, setTheme }) => {

    // Scroll logic
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-50
                transition-all duration-500
                ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
            `}
        >
            <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">

                {/* Logo */}
                <a href="#" className="text-[var(--color-color6)] text-lg font-semibold tracking-wide">
                    <img src={APP_DATA.logo} alt="" className="
                                                                h-10 w-auto
                                                                object-contain
                                                                transition-transform duration-300
                                                                hover:scale-105
                                                                "/>
                </a>

                {/* Nav Links */}
                <div className={`hidden sm:flex
                    items-center gap-2 
                    rounded-full px-3 py-2
                    ${theme == 'light' ? 'bg-black/5' : 'bg-white/5'} backdrop-blur-x
                    border border-white/10`}>
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.ref}
                            className="
                                px-4 py-2 text-sm text-[var(--color-color6)] rounded-full
                                transition-all duration-300
                                hover:bg-black/10
                                hover:text-[var(--color-primary)]
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[var(--color-primary)]
                                hover:scale-105
                                hover:shadow-[0_0_10px_#00C2FF]
                            "
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop Right Section */}
                <div className="hidden sm:flex items-center gap-4">
                    <Button buttonName="Contact Me" size='sm' />

                    {/* ✅ Theme Toggle */}
                    <ThemeToggle theme={theme} setTheme={setTheme} />
                </div>

                {/* Mobile Section */}
                <div className="sm:hidden flex items-center gap-3">

                    {/* ✅ Theme Toggle (Mobile) */}
                    <ThemeToggle theme={theme} setTheme={setTheme} />

                    {/* Menu Button */}
                    <button
                        className="p-2 text-[var(--color-color6)] relative w-8 h-8 cursor-pointer"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    >
                        {/* Menu Icon */}
                        <span
                            className={`
                                absolute inset-0 flex items-center justify-center
                                transition-all duration-300
                                ${isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}
                            `}
                        >
                            <Menu size="25" />
                        </span>

                        {/* Close Icon */}
                        <span
                            className={`
                                absolute inset-0 flex items-center justify-center
                                transition-all duration-300
                                ${isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}
                            `}
                        >
                            <X size="25" />
                        </span>
                    </button>
                </div>

            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className='sm:hidden glass animate-fade-in'>
                    <div className='container mx-auto px-5 py-5 flex flex-col gap-2'>
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.ref}
                                className="
                                    px-4 py-2 text-sm text-[var(--color-color6)] rounded-full
                                    transition-all duration-300
                                    hover:bg-white/10
                                    hover:text-[var(--color-primary)]
                                    focus:ring-1
                                    focus:ring-[var(--color-primary)]
                                    hover:scale-105
                                    hover:shadow-[0_0_10px_#00C2FF]
                                "
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className='px-5 py-2'>
                        <Button buttonName="Contact Me" size='sm' />
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar;