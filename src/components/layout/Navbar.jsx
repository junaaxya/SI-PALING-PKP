import React, { useState, useEffect } from 'react';
import { Home, Menu, X } from 'lucide-react';
import { Button } from '../common/Button';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';

export const Navbar = ({ currentPage = 'home' }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks =
        currentPage === 'home'
            ? [
                  { name: 'Beranda', href: '#home' },
                  { name: 'SiPaling PKP', href: '#about' },
                  { name: 'Fitur', href: '#features' },
                  { name: 'Kriteria', href: '#criteria' },
                  { name: 'Manfaat', href: '#benefits' },
                  { name: 'Tentang Kami', href: '#/about-us', isRoute: true },
              ]
            : [
                  { name: 'Beranda', href: '#', isExternal: true },
                  { name: 'Tentang Kami', href: '#/about-us', isRoute: true },
              ];

    const handleNavClick = (e, link) => {
        if (link.isExternal) {
            e.preventDefault();
            window.location.href = '/';
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            {/* Logo 1 */}
                            <img
                                src={logo2}
                                alt="Logo Kiri"
                                className="h-12 w-auto object-contain"
                            />

                            {/* Logo 2 */}
                            <img
                                src={logo1}
                                alt="Logo Kanan"
                                className="h-12 w-auto object-contain"
                            />
                        </div>

                        <div>
                            <h1
                                className={`text-xl font-bold ${
                                    isScrolled ? 'text-gray-800' : 'text-white'
                                }`}
                            >
                                {' '}
                                <span className="text-blue-900">SI</span>{' '}
                                <span className="text-yellow-400">PALING</span>{' '}
                                <span className="text-blue-900">PKP</span>{' '}
                            </h1>
                            <p
                                className={`text-xs ${
                                    isScrolled
                                        ? 'text-gray-600'
                                        : 'text-gray-200'
                                }`}
                            >
                                Kepulauan Bangka Belitung
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) =>
                                    link.isExternal && handleNavClick(e, link)
                                }
                                className={`font-medium transition-colors hover:text-blue-600 ${
                                    isScrolled ? 'text-gray-700' : 'text-white'
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button variant="primary" href="#signin">
                            Masuk
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden ${
                            isScrolled ? 'text-gray-800' : 'text-white'
                        }`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white shadow-lg rounded-b-lg pb-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    if (link.isExternal)
                                        handleNavClick(e, link);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="px-4 pt-2">
                            <Button
                                variant="primary"
                                href="#signin"
                                className="w-full justify-center"
                            >
                                Masuk
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
