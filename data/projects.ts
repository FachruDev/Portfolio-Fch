import { Project } from '../utils/types';

export const projects: Project[] = [
  {
    id: 'proj-1',
    type: 'project',
    title: { en: 'E-commerce Platform', id: 'Platform E-commerce' },
    description: { en: 'A modern e-commerce site with a clean UI.', id: 'Situs e-commerce modern dengan UI yang bersih.' },
    longDescription: { en: 'Developed a full-featured e-commerce platform using React, Redux, and Node.js. Integrated Stripe for payments and implemented a custom CMS for product management.', id: 'Mengembangkan platform e-commerce berfitur lengkap menggunakan React, Redux, dan Node.js. Mengintegrasikan Stripe untuk pembayaran dan mengimplementasikan CMS kustom untuk manajemen produk.'},
    image: 'https://picsum.photos/seed/proj1/800/600',
    date: '2023-10-15',
    tags: ['React', 'Node.js', 'E-commerce', 'Stripe'],
    url: '#',
    githubUrl: '#',
    role: { en: 'Full-Stack Developer', id: 'Pengembang Full-Stack' },
    galleryImages: [
      'https://picsum.photos/seed/proj1-gallery1/800/600',
      'https://picsum.photos/seed/proj1-gallery2/800/600',
      'https://picsum.photos/seed/proj1-gallery3/800/600',
    ]
  },
  {
    id: 'proj-2',
    type: 'project',
    title: { en: 'Data Visualization Dashboard', id: 'Dasbor Visualisasi Data' },
    description: { en: 'An interactive dashboard for visualizing complex data.', id: 'Dasbor interaktif untuk memvisualisasikan data kompleks.' },
    longDescription: { en: 'Built with D3.js and React, this dashboard provides interactive charts and graphs to help users understand complex datasets. Features real-time data updates via WebSockets.', id: 'Dibuat dengan D3.js dan React, dasbor ini menyediakan bagan dan grafik interaktif untuk membantu pengguna memahami kumpulan data yang kompleks. Menampilkan pembaruan data real-time melalui WebSockets.'},
    image: 'https://picsum.photos/seed/proj2/800/600',
    date: '2023-05-20',
    tags: ['React', 'D3.js', 'Data Viz', 'WebSockets'],
    url: '#',
    githubUrl: '#',
    role: { en: 'Data Visualization Specialist', id: 'Spesialis Visualisasi Data' },
    galleryImages: [
      'https://picsum.photos/seed/proj2-gallery1/800/600',
      'https://picsum.photos/seed/proj2-gallery2/800/600',
    ]
  },
  {
    id: 'proj-3',
    type: 'project',
    title: { en: 'Personal Blog Platform', id: 'Platform Blog Pribadi' },
    description: { en: 'A performant, statically-generated blog.', id: 'Blog yang dibuat secara statis dan berkinerja tinggi.' },
    longDescription: { en: 'Created a personal blog using Next.js for static site generation (SSG) and Tailwind CSS for styling. Features markdown-based content, syntax highlighting, and a clean, minimalist design.', id: 'Membuat blog pribadi menggunakan Next.js untuk pembuatan situs statis (SSG) dan Tailwind CSS untuk styling. Menampilkan konten berbasis markdown, penyorotan sintaks, dan desain yang bersih dan minimalis.'},
    image: 'https://picsum.photos/seed/proj3/800/600',
    date: '2024-01-10',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'SSG'],
    url: '#',
    githubUrl: '#',
    role: { en: 'Frontend Developer', id: 'Pengembang Frontend' },
    galleryImages: [
      'https://picsum.photos/seed/proj3-gallery1/800/600',
      'https://picsum.photos/seed/proj3-gallery2/800/600',
      'https://picsum.photos/seed/proj3-gallery3/800/600',
      'https://picsum.photos/seed/proj3-gallery4/800/600',
    ]
  },
  {
    id: 'proj-4',
    type: 'project',
    title: { en: 'Task Management App', id: 'Aplikasi Manajemen Tugas' },
    description: { en: 'A simple and intuitive task manager.', id: 'Manajer tugas yang sederhana dan intuitif.' },
    longDescription: { en: 'Developed a Kanban-style task management application with drag-and-drop functionality using React and the React-beautiful-dnd library. State is managed with Zustand for simplicity.', id: 'Mengembangkan aplikasi manajemen tugas gaya Kanban dengan fungsionalitas seret dan lepas menggunakan React dan pustaka react-beautiful-dnd. State dikelola dengan Zustand untuk kesederhanaan.'},
    image: 'https://picsum.photos/seed/proj4/800/600',
    date: '2023-12-01',
    tags: ['React', 'Zustand', 'Web App', 'UI/UX'],
    url: '#',
    githubUrl: '#',
    role: { en: 'UI/UX Designer & Developer', id: 'Desainer & Pengembang UI/UX' },
    galleryImages: []
  },
];