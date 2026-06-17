export interface Destination {
  id: string;
  name: string;
  overview: string;
  image: string;
  bestTime: string;
  attractions: string[];
  activities: string[];
  tips: string[];
  region: 'Cultural' | 'Hill Country' | 'Coast' | 'Wildlife' | 'Ancient Cities';
}

export interface Tour {
  id: string;
  name: string;
  type: 'multi-day' | 'experience';
  category: string;
  duration: string;
  destinations: string[];
  highlights: string[];
  includes: string[];
  isPopular?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  category: 'Adventure' | 'Wildlife' | 'Cultural' | 'Nature' | 'Wellness';
  description: string;
  image: string;
  activities: string[];
  highlights: string[];
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  country: string;
  travelDates: string;
  guests: number;
  tourType: string;
  destinations: string[];
  message: string;
  createdAt: string;
  status: 'Pending Review' | 'Custom Itinerary Drafted' | 'Confirmed';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
