import { Home, MapPin, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { Section } from '../common/Section';

export const Hero = () => {
    return (
        <Section
            id="home"
            className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Sistem Informasi Pendataan Lingkup Perumahan dan Kawasan
                        Permukiman
                    </h1>
                    <p className="text-xl mb-8 text-blue-100">
                        Platform terintegrasi untuk pengelolaan data perumahan
                        dan kawasan permukiman Provinsi Kepulauan Bangka
                        Belitung berbasis Sistem Informasi Geografis (SIG)
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button variant="secondary" href="#about">
                            Pelajari Lebih Lanjut
                            <ArrowRight size={20} />
                        </Button>
                        <Button variant="outline" href="#features">
                            Daftarkan Rumah Anda Sekarang
                        </Button>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="relative">
                        <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
                            <div className="grid grid-cols-2 gap-4 h-full">
                                <div className="bg-white/20 rounded-lg flex items-center justify-center">
                                    <Home size={64} />
                                </div>
                                <div className="bg-white/20 rounded-lg flex items-center justify-center">
                                    <MapPin size={64} />
                                </div>
                                <div className="bg-white/20 rounded-lg flex items-center justify-center">
                                    <TrendingUp size={64} />
                                </div>
                                <div className="bg-white/20 rounded-lg flex items-center justify-center">
                                    <Users size={64} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
