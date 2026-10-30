import type { Service } from '../types';

export const COMPANY_INFO = {
  name: 'FidelityNet Global Services',
  tagline: 'Professional Solutions. Trusted Service.',
  domain: 'https://fidellitynetglobalservices.online',
  phone: '09063703851',
  whatsapp: '09063703851',
  email: 'info@fidellitynetglobalservices.online',
  internationalPhone: '+2349063703851',
} as const;

export const CONTACT_LINKS = {
  phone: `tel:+2349063703851`,
  whatsapp: `https://wa.me/2349063703851`,
  email: `mailto:info@fidellitynetglobalservices.online`,
} as const;

export const SERVICES: Service[] = [
  {
    id: 'compliance-advisory',
    title: 'Compliance Advisory',
    description: 'Comprehensive compliance advisory, risk assessment, and regulatory support services.',
    icon: 'Scale',
    items: [
      'Compliance advisory',
      'Risk assessment and audits',
      'Policy and procedure development',
      'Financial services compliance support',
      'Regulatory support and reporting assistance',
      'Corporate governance compliance',
      'Governance solutions',
      'Business and organisational policy support',
    ],
  },
  {
    id: 'real-estate-management',
    title: 'Real Estate Management',
    description: 'Practical property and construction solutions, from project planning to maintenance.',
    icon: 'Building2',
    items: [
      'Building construction',
      'Renovation and refurbishment',
      'Property maintenance and repairs',
      'Construction consultancy',
      'Project planning and coordination',
      'Cost estimates and materials coordination',
      'General contracting and related construction services',
      'Real estate management',
      'Property acquisition support',
      'Lease management',
      'Property-related regulatory guidance',
    ],
    offerings: [
      {
        heading: 'Building Construction',
        description: 'Construction solutions tailored to project requirements, specifications and budgets.',
      },
      {
        heading: 'Renovation and Refurbishment',
        description: 'Improving and updating residential and commercial spaces to meet clients\' needs.',
      },
      {
        heading: 'Property Maintenance',
        description: 'Maintenance and repair services designed to help keep properties functional, safe and presentable.',
      },
      {
        heading: 'Construction Consultancy',
        description: 'Practical support with project planning, cost estimates, materials coordination and construction-related decisions, according to the agreed scope of work.',
      },
      {
        heading: 'General Contracting and Related Services',
        description: 'Additional construction-related services based on project requirements and the company\'s capabilities.',
      },
    ],
  },
  {
    id: 'business-services',
    title: 'Business and Corporate Services',
    description: 'Comprehensive business support services for corporate needs.',
    icon: 'Briefcase',
    items: [
      'Franchising and retail-related business support',
      'Corporate services',
      'Technology-related contracts',
      'Related business support services',
    ],
  },
] as const;

// Major services for homepage showcase
export const MAJOR_SERVICES: Service[] = [
  {
    id: 'real-estate-management',
    title: 'Real Estate Management',
    description: 'Practical property and construction solutions, from project planning to maintenance.',
    icon: 'Building2',
    items: [
      'Building construction',
      'Renovation and refurbishment',
      'Property maintenance and repairs',
      'Construction consultancy',
      'Project planning and coordination',
      'Cost estimates and materials coordination',
      'General contracting and related construction services',
      'Real estate management',
      'Property acquisition support',
      'Lease management',
      'Property-related regulatory guidance',
    ],
    offerings: [
      {
        heading: 'Building Construction',
        description: 'Construction solutions tailored to project requirements, specifications and budgets.',
      },
      {
        heading: 'Renovation and Refurbishment',
        description: 'Improving and updating residential and commercial spaces to meet clients\' needs.',
      },
      {
        heading: 'Property Maintenance',
        description: 'Maintenance and repair services designed to help keep properties functional, safe and presentable.',
      },
      {
        heading: 'Construction Consultancy',
        description: 'Practical support with project planning, cost estimates, materials coordination and construction-related decisions, according to the agreed scope of work.',
      },
      {
        heading: 'General Contracting and Related Services',
        description: 'Additional construction-related services based on project requirements and the company\'s capabilities.',
      },
    ],
  },
  {
    id: 'compliance-advisory',
    title: 'Compliance Advisory',
    description: 'Comprehensive compliance advisory, risk assessment, and regulatory support services.',
    icon: 'Scale',
    items: [
      'Compliance advisory',
      'Risk assessment and audits',
      'Policy and procedure development',
      'Financial services compliance support',
      'Regulatory support and reporting assistance',
      'Corporate governance compliance',
      'Governance solutions',
      'Business and organisational policy support',
    ],
  },
  {
    id: 'business-services',
    title: 'Business and Corporate Services',
    description: 'Comprehensive business support services for corporate needs.',
    icon: 'Briefcase',
    items: [
      'Franchising and retail-related business support',
      'Corporate services',
      'Technology-related contracts',
      'Related business support services',
    ],
  },
] as const;

export const CORE_VALUES = [
  'Integrity',
  'Client focus',
  'Professionalism',
  'Transparency',
  'Quality-conscious service',
  'Continuous improvement',
] as const;

export const WHY_CHOOSE_US = [
  'Client-focused service',
  'Practical planning',
  'Quality-conscious approach',
  'Clear communication',
  'Commitment to professional service',
] as const;

export const HOW_WE_WORK = [
  'Consultation',
  'Requirements assessment',
  'Proposal and planning',
  'Service delivery and progress communication',
  'Completion and follow-up where applicable',
] as const;
