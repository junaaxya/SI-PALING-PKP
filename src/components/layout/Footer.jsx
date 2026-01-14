import React from 'react';
// Import logo dari folder assets (pastikan nama file sesuai)
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Bagian Info & Logo */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-4 mb-4">
                            {/* Container 2 Logo */}
                            <div className="flex items-center gap-2">
                                <img
                                    src={logo2}
                                    alt="Logo Kanan"
                                    className="h-12 w-auto object-contain"
                                />
                                <img
                                    src={logo1}
                                    alt="Logo Kiri"
                                    className="h-12 w-auto object-contain"
                                />
                            </div>

                            {/* Teks Judul */}
                            <div>
                                {/* PERUBAHAN DISINI */}
                                <h3 className="text-xl font-bold">
                                    <span className="text-blue-400">SI</span>{' '}
                                    <span className="text-yellow-400">
                                        PALING
                                    </span>{' '}
                                    <span className="text-blue-400">PKP</span>{' '}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Kepulauan Bangka Belitung
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-400 leading-relaxed">
                            Sistem Informasi Pendataan Lingkup Perumahan dan
                            Kawasan Permukiman Provinsi Kepulauan Bangka
                            Belitung
                        </p>
                    </div>

                    {/* Tautan Cepat */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Tautan Cepat
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#home"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Beranda
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    SiPaling PKP
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#features"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Fitur
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#criteria"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Kriteria
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#/about-us"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Tentang Kami
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Kontak</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Dinas PUPRPKP</li>
                            <li>Provinsi Kepulauan Bangka Belitung</li>
                            <li>Pangkalpinang</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>
                        &copy; 2025 SI PALING PKP - Provinsi Kepulauan Bangka
                        Belitung. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
