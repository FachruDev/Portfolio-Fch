import { Certificate } from '../utils/types';

export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    type: 'certificate',
    title: { en: 'React - The Complete Guide', id: 'React - Panduan Lengkap' },
    description: { en: 'In-depth course on React, from basics to advanced topics.', id: 'Kursus mendalam tentang React, dari dasar hingga topik lanjutan.' },
    longDescription: { en: 'Completed a comprehensive course covering hooks, Redux, React Router, and performance optimization.', id: 'Menyelesaikan kursus komprehensif yang mencakup hooks, Redux, React Router, dan optimisasi performa.'},
    image: 'https://picsum.photos/seed/cert1/800/600',
    date: '2022-12-01',
    issuer: 'Udemy',
    tags: ['React', 'Frontend'],
    pdfUrl: '/certs/react-complete-guide.pdf',
    credentialId: 'UC-1234-ABCD-5678',
    credentialUrl: '#',
    validUntil: { en: 'Does not expire', id: 'Tidak ada kedaluwarsa' }
  },
  {
    id: 'cert-2',
    type: 'certificate',
    title: { en: 'Advanced TypeScript', id: 'TypeScript Tingkat Lanjut' },
    description: { en: 'Mastering TypeScript for large-scale applications.', id: 'Menguasai TypeScript untuk aplikasi skala besar.' },
    longDescription: { en: 'This course covered advanced TypeScript features like generics, decorators, and module resolution, preparing me to build robust and scalable applications.', id: 'Kursus ini mencakup fitur TypeScript tingkat lanjut seperti generics, decorators, dan resolusi modul, mempersiapkan saya untuk membangun aplikasi yang kuat dan dapat diskalakan.'},
    image: 'https://picsum.photos/seed/cert2/800/600',
    date: '2023-03-10',
    issuer: 'Frontend Masters',
    tags: ['TypeScript', 'Development'],
    pdfUrl: '/certs/advanced-typescript.pdf',
    credentialId: 'FM-TS-9876',
    credentialUrl: '#',
    validUntil: { en: 'Does not expire', id: 'Tidak ada kedaluwarsa' }
  },
  {
    id: 'cert-3',
    type: 'certificate',
    title: { en: 'UI/UX Design Specialization', id: 'Spesialisasi Desain UI/UX' },
    description: { en: 'Comprehensive program on UI/UX principles and practices.', id: 'Program komprehensif tentang prinsip dan praktik UI/UX.' },
    longDescription: { en: 'Learned the full design process from user research to prototyping and user testing. Completed a capstone project to design a mobile application from scratch.', id: 'Mempelajari proses desain lengkap mulai dari riset pengguna hingga prototipe dan pengujian pengguna. Menyelesaikan proyek capstone untuk merancang aplikasi seluler dari awal.'},
    image: 'https://picsum.photos/seed/cert3/800/600',
    date: '2023-08-11',
    issuer: 'Coursera',
    tags: ['UI/UX', 'Design', 'Figma'],
    pdfUrl: '/certs/ui-ux-design.pdf',
    credentialId: 'COURSERA-UIUX-5555',
    credentialUrl: '#',
    validUntil: { en: 'Does not expire', id: 'Tidak ada kedaluwarsa' }
  },
  {
    id: 'cert-4',
    type: 'certificate',
    title: { en: 'Node.js, Express, MongoDB & More', id: 'Node.js, Express, MongoDB & Lainnya' },
    description: { en: 'Backend development course focusing on the MERN stack.', id: 'Kursus pengembangan backend dengan fokus pada MERN stack.' },
    longDescription: { en: 'Built several full-stack applications, learning about APIs, database integration with MongoDB, and authentication strategies. This course provided a solid foundation in backend development.', id: 'Membangun beberapa aplikasi full-stack, belajar tentang API, integrasi basis data dengan MongoDB, dan strategi otentikasi. Kursus ini memberikan fondasi yang kokoh dalam pengembangan backend.'},
    image: 'https://picsum.photos/seed/cert4/800/600',
    date: '2023-11-25',
    issuer: 'Udemy',
    tags: ['Node.js', 'Backend', 'MongoDB'],
    pdfUrl: '/certs/nodejs-express-mongodb.pdf',
    credentialId: 'UC-NODE-XYZ-1122',
    credentialUrl: '#',
    validUntil: { en: 'Does not expire', id: 'Tidak ada kedaluwarsa' }
  },
];