import { CheckCircle } from 'lucide-react';
import { Section } from '../common/Section';
import { SectionTitle } from '../common/SectionTitle';

export const Benefits = () => {
  const benefits = [
    {
      title: 'Bagi Pemerintah',
      items: [
        'Perencanaan pembangunan berbasis data akurat',
        'Monitoring dan evaluasi program yang efektif',
        'Pengambilan keputusan yang tepat sasaran',
        'Koordinasi antar instansi yang lebih baik'
      ],
      // Gunakan class lengkap, jangan dinamis string
      colorClasses: 'from-blue-50 to-white border-blue-200 hover:border-blue-400',
      titleColor: 'text-blue-700',
      iconColor: 'text-blue-500'
    },
    {
      title: 'Bagi Masyarakat',
      items: [
        'Transparansi data perumahan dan permukiman',
        'Kemudahan akses informasi program bantuan',
        'Partisipasi dalam pendataan perumahan',
        'Peningkatan kualitas hunian yang lebih baik'
      ],
      colorClasses: 'from-green-50 to-white border-green-200 hover:border-green-400',
      titleColor: 'text-green-700',
      iconColor: 'text-green-500'
    },
    {
      title: 'Bagi Pengembang',
      items: [
        'Data potensi pengembangan perumahan',
        'Informasi kebutuhan infrastruktur',
        'Koordinasi pembangunan dengan pemerintah',
        'Perencanaan investasi yang lebih akurat'
      ],
      colorClasses: 'from-purple-50 to-white border-purple-200 hover:border-purple-400',
      titleColor: 'text-purple-700',
      iconColor: 'text-purple-500'
    }
  ];

  return (
    <Section id="benefits" className="bg-white">
      <SectionTitle 
        subtitle="Manfaat nyata dari implementasi sistem informasi perumahan dan kawasan permukiman"
      >
        Manfaat Sistem
      </SectionTitle>
      
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-br ${benefit.colorClasses} rounded-xl p-8 border-2 transition-all duration-300`}
          >
            <h3 className={`text-2xl font-bold ${benefit.titleColor} mb-6`}>
              {benefit.title}
            </h3>
            <ul className="space-y-4">
              {benefit.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle 
                    size={20}
                    className={`${benefit.iconColor} mt-1 flex-shrink-0`}
                  />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};