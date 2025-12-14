import { MapPin, TrendingUp, Shield, Users, Building2, CheckCircle } from 'lucide-react';
import { Section } from '../common/Section';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';

export const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Sistem Informasi Geografis',
      description: 'Visualisasi data spasial dengan peta digital interaktif untuk memudahkan analisis sebaran perumahan dan kawasan permukiman'
    },
    {
      icon: TrendingUp,
      title: 'Dashboard Terintegrasi',
      description: 'Monitoring dan analisis data real-time dengan tampilan dashboard yang informatif dan mudah dipahami'
    },
    {
      icon: Shield,
      title: 'Keamanan Data',
      description: 'Sistem keamanan berlapis untuk menjaga kerahasiaan dan integritas data perumahan dan kawasan permukiman'
    },
    {
      icon: Users,
      title: 'Multi-level Access',
      description: 'Hak akses bertingkat untuk provinsi, kabupaten/kota, hingga tingkat desa/kelurahan'
    },
    {
      icon: Building2,
      title: 'Database Terintegrasi',
      description: 'Pengelolaan data terpusat dari berbagai sumber untuk mendukung pengambilan keputusan berbasis data'
    },
    {
      icon: CheckCircle,
      title: 'Validasi Data',
      description: 'Sistem validasi otomatis untuk memastikan akurasi dan konsistensi data yang diinput'
    }
  ];

  return (
    <Section id="features" className="bg-white">
      <SectionTitle 
        subtitle="Fitur-fitur unggulan yang memudahkan pengelolaan data perumahan dan kawasan permukiman"
      >
        Fitur Unggulan
      </SectionTitle>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  );
};