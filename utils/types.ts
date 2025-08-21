export interface ContentItem {
  id: string;
  title: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  longDescription?: {
    en: string;
    id: string;
  };
  image: string;
  date: string;
  tags: string[];
  url?: string;
}

export interface Project extends ContentItem {
    type: 'project';
    githubUrl?: string;
    galleryImages?: string[];
    role?: {
        en: string;
        id: string;
    };
}

export interface Certificate extends ContentItem {
    type: 'certificate';
    issuer: string;
    pdfUrl?: string;
    credentialId?: string;
    credentialUrl?: string;
    validUntil?: {
        en: string;
        id: string;
    };
}

export interface Article extends ContentItem {
    type: 'article';
    readingTime: number; // in minutes
    category: {
        en: string;
        id: string;
    };
}

export interface Experience {
  id: string;
  title: {
    en: string;
    id: string;
  };
  company: {
    en: string;
    id: string;
  };
  location: {
    en: string;
    id: string;
  };
  dateRange: {
    en: string;
    id: string;
  };
  description: {
    en: string[];
    id: string[];
  };
}


export type PortfolioItem = Project | Certificate | Article;