export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: string[];
  offerings?: {
    heading: string;
    description: string;
  }[];
  hidden?: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  subject: string;
  message: string;
}
