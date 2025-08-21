import { Experience } from '../utils/types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: { en: 'Senior Frontend Developer', id: 'Pengembang Frontend Senior' },
    company: { en: 'Innovate Solutions Inc.', id: 'PT Solusi Inovasi' },
    location: { en: 'San Francisco, CA', id: 'San Francisco, CA' },
    dateRange: { en: 'Jan 2022 - Present', id: 'Jan 2022 - Sekarang' },
    description: {
      en: [
        'Lead the development of a new client-facing dashboard using React, TypeScript, and Redux, improving user engagement by 25%.',
        'Architected and implemented a component library that is now used across five different products, reducing development time by 40%.',
        'Mentored junior developers and conducted code reviews to ensure high-quality code and adherence to best practices.',
      ],
      id: [
        'Memimpin pengembangan dasbor baru yang menghadap klien menggunakan React, TypeScript, dan Redux, meningkatkan keterlibatan pengguna sebesar 25%.',
        'Merancang dan mengimplementasikan pustaka komponen yang sekarang digunakan di lima produk berbeda, mengurangi waktu pengembangan sebesar 40%.',
        'Membimbing pengembang junior dan melakukan tinjauan kode untuk memastikan kode berkualitas tinggi dan kepatuhan pada praktik terbaik.',
      ],
    },
  },
  {
    id: 'exp-2',
    title: { en: 'Frontend Developer', id: 'Pengembang Frontend' },
    company: { en: 'Creative Agency LLC', id: 'LLC Agensi Kreatif' },
    location: { en: 'Remote', id: 'Remote' },
    dateRange: { en: 'Jun 2020 - Dec 2021', id: 'Jun 2020 - Des 2021' },
    description: {
      en: [
        'Developed and maintained responsive websites for various clients using HTML, CSS, JavaScript, and React.',
        'Collaborated with designers to translate Figma mockups into pixel-perfect, interactive web pages.',
        'Improved website performance and loading times by optimizing images, code, and using lazy loading techniques.',
      ],
      id: [
        'Mengembangkan dan memelihara situs web responsif untuk berbagai klien menggunakan HTML, CSS, JavaScript, dan React.',
        'Berkolaborasi dengan desainer untuk menerjemahkan mockup Figma menjadi halaman web interaktif yang sempurna piksel.',
        'Meningkatkan kinerja dan waktu muat situs web dengan mengoptimalkan gambar, kode, dan menggunakan teknik lazy loading.',
      ],
    },
  },
];