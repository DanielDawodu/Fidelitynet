export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  subject: string;
  message: string;
}
