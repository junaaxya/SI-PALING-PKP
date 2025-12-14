import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Section } from '../components/common/Section';
import { SectionTitle } from '../components/common/SectionTitle';
import { Target, Eye, Award, Users, Building2, Briefcase, Mail, Phone, MapPin } from 'lucide-react';

export const AboutUsPage = () => {
  const visionMission = {
    vision: "Menjadi sistem informasi perumahan dan kawasan permukiman terpercaya yang mendukung pembangunan berkelanjutan di Provinsi Kepulauan Bangka Belitung",
    missions: [
      "Menyediakan data perumahan dan kawasan permukiman yang akurat, terintegrasi, dan mudah diakses",
      "Mendukung perencanaan pembangunan berbasis data dan evidence-based policy",
      "Meningkatkan transparansi dan akuntabilitas pengelolaan data perumahan",
      "Memfasilitasi koordinasi antar stakeholder dalam pembangunan perumahan dan permukiman"
    ]
  };

  const teamMembers = [
    {
      name: "CV. Panda Karya",
      role: "Konsultan Perencana",
      description: "Research and Engineering Consultant"
    },
    {
      name: "Dinas PUPRPKP",
      role: "Pengguna Layanan",
      description: "Dinas Pekerjaan Umum, Penataan Ruang dan Perumahan Rakyat Kawasan Permukiman Provinsi Kepulauan Bangka Belitung"
    }
  ];

  const projectInfo = {
    name: "Pembuatan Aplikasi Berbasis Web (Sistem Informasi dan Komunikasi Bidang Perumahan dan Kawasan Permukiman)",
    contract: "600/776/SPK-PABW/CKPP/2025",
    date: "28 Agustus 2025",
    duration: "60 Hari Kalender",
    location: "Provinsi Kepulauan Bangka Belitung"
  };

  return (
    <div className="font-sans">
      <Navbar currentPage="about" />
      
      {/* Hero Section */}
      <Section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Tentang Kami</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Mengenal lebih dekat tim dan proyek di balik Sistem Informasi Pendataan Lingkup Perumahan dan Kawasan Permukiman
          </p>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                <Eye size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Visi</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {visionMission.vision}
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                <Target size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Misi</h2>
            </div>
            <ul className="space-y-4">
              {visionMission.missions.map((mission, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Project Information */}
      <Section className="bg-gray-50">
        <SectionTitle subtitle="Detail proyek pengembangan sistem informasi">
          Informasi Proyek
        </SectionTitle>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Building2 className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Nama Proyek</h3>
                  <p className="text-gray-600">{projectInfo.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Briefcase className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Nomor Kontrak</h3>
                  <p className="text-gray-600">{projectInfo.contract}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Lokasi</h3>
                  <p className="text-gray-600">{projectInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-2">Tanggal Kontrak</h3>
                <p className="text-2xl font-bold text-blue-600">{projectInfo.date}</p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-2">Durasi Pelaksanaan</h3>
                <p className="text-2xl font-bold text-green-600">{projectInfo.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-white">
        <SectionTitle subtitle="Tim yang terlibat dalam pengembangan sistem">
          Tim Kami
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Users size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-semibold">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Output/Deliverables */}
      <Section className="bg-gradient-to-br from-blue-50 to-white">
        <SectionTitle subtitle="Hasil yang dihasilkan dari proyek ini">
          Output Proyek
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Building2,
              title: "Aplikasi Web Terintegrasi",
              description: "Sistem informasi berbasis web dengan dukungan SIG yang fungsional dan user-friendly"
            },
            {
              icon: Award,
              title: "Laporan Komprehensif",
              description: "Laporan Pendahuluan dan Laporan Akhir yang lengkap dan terstruktur"
            },
            {
              icon: Users,
              title: "Manual Book",
              description: "Panduan penggunaan aplikasi untuk pengguna dan administrator"
            },
            {
              icon: MapPin,
              title: "Database Terintegrasi",
              description: "Basis data perumahan dan kawasan permukiman yang terorganisir"
            },
            {
              icon: Target,
              title: "Alih Pengetahuan",
              description: "Pelatihan dan transfer knowledge kepada tim teknis"
            },
            {
              icon: Briefcase,
              title: "File Digital",
              description: "Seluruh dokumen dan data dalam format digital yang terorganisir"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <item.icon size={40} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Information */}
      <Section className="bg-white">
        <SectionTitle subtitle="Hubungi kami untuk informasi lebih lanjut">
          Kontak
        </SectionTitle>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 md:p-12 rounded-2xl shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">CV. Panda Karya</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Alamat</p>
                      <p className="text-blue-100">JL. Tampuk Pinangpura, Kecamatan Gerunggang, Kota Pangkalpinang</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Dinas PUPRPKP</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Instansi</p>
                      <p className="text-blue-100">Dinas Pekerjaan Umum, Penataan Ruang dan Perumahan Rakyat Kawasan Permukiman</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Lokasi</p>
                      <p className="text-blue-100">Provinsi Kepulauan Bangka Belitung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};