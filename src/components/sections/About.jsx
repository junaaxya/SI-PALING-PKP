import { Section } from '../common/Section';
import { SectionTitle } from '../common/SectionTitle';

export const About = () => {
    return (
        <Section id="about" className="bg-gray-50">
            <SectionTitle subtitle="Mengenal lebih dekat tentang sistem informasi perumahan dan kawasan permukiman">
                Tentang <span className="text-blue-900">SI</span>{' '}
                <span className="text-yellow-400">PALING</span>{' '}
                <span className="text-blue-900">PKP</span>{' '}
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Latar Belakang
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Perumahan dan permukiman merupakan salah satu kebutuhan
                        dasar manusia yang memiliki peranan sangat penting dalam
                        upaya peningkatan kualitas hidup serta pemerataan
                        kesejahteraan rakyat.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Untuk menghasilkan kebijakan dan strategi yang baik,
                        diperlukan dukungan data dan basis data yang akurat
                        serta akuntabel. Oleh karena itu, Pemerintah Provinsi
                        Kepulauan Bangka Belitung mengembangkan sistem layanan
                        informasi bidang perumahan dan kawasan permukiman
                        berbasis web.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Melalui aplikasi ini, diharapkan dapat terwujud
                        perencanaan pembangunan yang berkualitas serta
                        pengendalian pembangunan yang efektif, melalui
                        pengelolaan data pembangunan yang terintegrasi.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
                        <div className="text-4xl font-bold mb-2">7</div>
                        <div className="text-sm">Kabupaten/Kota</div>
                    </div>
                    <div className="bg-blue-700 text-white p-6 rounded-xl text-center">
                        <div className="text-4xl font-bold mb-2">1.5M+</div>
                        <div className="text-sm">Penduduk</div>
                    </div>
                    <div className="bg-blue-800 text-white p-6 rounded-xl text-center">
                        <div className="text-4xl font-bold mb-2">100%</div>
                        <div className="text-sm">Terintegrasi</div>
                    </div>
                    <div className="bg-blue-900 text-white p-6 rounded-xl text-center">
                        <div className="text-4xl font-bold mb-2">24/7</div>
                        <div className="text-sm">Akses Data</div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
