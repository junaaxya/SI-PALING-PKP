import { Shield, Home, Lightbulb, Route, CheckCircle } from 'lucide-react';
import { Section } from '../common/Section';
import { SectionTitle } from '../common/SectionTitle';

export const Criteria = () => {
  const criteriaList = [
    {
      icon: Shield,
      title: 'Keselamatan Bangunan',
      items: [
        'Struktur bangunan kokoh (pondasi, kolom, balok)',
        'Dinding sebagai penyekat dengan udara luar',
        'Atap kuat melindungi dari panas dan hujan',
        'Lantai memutus penyebaran penyakit dari tanah'
      ]
    },
    {
      icon: Home,
      title: 'Kecukupan Luas',
      items: [
        'Luas minimum 7,2 - 12 m² per orang',
        'Ruang gerak yang cukup untuk beraktivitas',
        'Sesuai standar pelayanan minimal (SPM)',
        'Memenuhi kebutuhan rumah tangga'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Kesehatan Penghuni',
      items: [
        'Penghawaan dan pencahayaan alami yang baik',
        'Akses air bersih dan sanitasi layak',
        'Sistem pengelolaan sampah yang memadai',
        'Material bangunan yang aman bagi kesehatan'
      ]
    },
    {
      icon: Route,
      title: 'Infrastruktur Pendukung',
      items: [
        'Akses jalan dan transportasi',
        'Jaringan listrik dan air bersih',
        'Sarana pendidikan dan kesehatan',
        'Fasilitas umum dan sosial'
      ]
    }
  ];

  return (
    <Section id="criteria" className="bg-gradient-to-br from-blue-50 to-white">
      <SectionTitle 
        subtitle="Standar dan kriteria rumah layak huni berdasarkan Kementerian PUPR"
      >
        Kriteria Rumah Layak Huni
      </SectionTitle>
      
      <div className="grid md:grid-cols-2 gap-8">
        {criteriaList.map((criteria, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="text-blue-600 mt-1">
                <criteria.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{criteria.title}</h3>
            </div>
            <ul className="space-y-3">
              {criteria.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle 
                    size={20}
                    className="text-green-500 mt-1 flex-shrink-0" 
                  />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
