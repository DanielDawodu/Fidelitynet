import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle, CheckCircle2, Scale, Building2, Users } from 'lucide-react';
import { COMPANY_INFO, CONTACT_LINKS, MAJOR_SERVICES, WHY_CHOOSE_US, HOW_WE_WORK } from '../lib/constants';
import SEO from '../components/SEO';
import Button from '../components/Button';
import HeroCarousel from '../components/HeroCarousel';

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Building2,
  Users,
};

const serviceImages: Record<string, string> = {
  'compliance-advisory': '/images/consulting.jpg',
  'real-estate-management': '/images/construction.jpg',
  'hr-management': '/images/training.jpg',
};

const carouselSlides = [
  {
    image: '/images/carousel-compliance.jpg',
    alt: 'Professional compliance advisory meeting',
  },
  {
    image: '/images/carousel-realestate.jpg',
    alt: 'Modern real estate and property management',
  },
  {
    image: '/images/carousel-hr.jpg',
    alt: 'Human resources management and team consultation',
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Professional Solutions in Nigeria"
        description="Explore FidelityNet Global Services for real estate management, compliance advisory, human resources management, building construction and property maintenance in Nigeria."
        path="/"
      />
      <div className="bg-light">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Carousel */}
        <HeroCarousel slides={carouselSlides} />

        {/* Lighter Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/50 to-navy/60" />

        {/* Content */}
        <div className="relative container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold font-semibold text-sm md:text-base uppercase tracking-widest mb-4 animate-slide-up">
              {COMPANY_INFO.name}
            </p>
            <h1 className="text-hero font-bold text-white mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {COMPANY_INFO.tagline}
            </h1>
            <p className="text-subtitle text-gray-100 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Practical solutions for compliance, real estate, construction, training and business support.
            </p>
            <p className="text-base text-gray-200 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {COMPANY_INFO.name} works with individuals, businesses, property owners and organisations to understand their requirements and provide practical, professional services tailored to their needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/services">
                <Button variant="gold" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Explore Our Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
            <a
              href={CONTACT_LINKS.whatsapp}
              className="inline-flex items-center justify-center space-x-2 mt-8 text-gold hover:text-yellow-400 transition-colors animate-slide-up"
              style={{ animationDelay: '0.5s' }}
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="font-medium">Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview - 3 Major Services Only */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section font-bold text-navy mb-4">Our Services</h2>
            <p className="text-subtitle text-gray-600 max-w-2xl mx-auto">
              Comprehensive professional solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {MAJOR_SERVICES.map((service) => {
              const IconComponent = iconMap[service.icon];
              const imageUrl = serviceImages[service.id];
              return (
                <Link
                  key={service.id}
                  to={`/services#${service.id}`}
                  className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 bg-white"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                        {IconComponent && <IconComponent className="w-5 h-5 text-navy" />}
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-sm text-gray-200 mb-4 line-clamp-2">{service.description}</p>
                    <span className="inline-flex items-center text-gold font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                      Explore Service
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center">
            <Link to="/services">
              <Button variant="gold" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-section font-bold text-navy mb-6">Why Choose Us</h2>
              <p className="text-subtitle text-gray-600 mb-10">
                We are committed to delivering excellence in every service we provide
              </p>
              <div className="space-y-6">
                {WHY_CHOOSE_US.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
                    </div>
                    <p className="text-lg text-gray-700 font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/images/why-choose-us.jpg"
                alt="Professional team at work"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section font-bold text-navy mb-4">How We Work</h2>
            <p className="text-subtitle text-gray-600 max-w-2xl mx-auto">
              A simple, transparent process designed for your success
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {HOW_WE_WORK.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mb-4 shadow-soft relative z-10">
                      <span className="text-2xl font-bold text-gold">{index + 1}</span>
                    </div>
                    {index < HOW_WE_WORK.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-navy/20 -translate-x-1/2" />
                    )}
                    <h3 className="font-semibold text-navy mb-2 text-sm uppercase tracking-wide">
                      Step {index + 1}
                    </h3>
                    <p className="text-sm text-gray-600">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/cta-bg.jpg"
            alt="Modern office building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-section font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-subtitle text-gray-200 mb-10 max-w-2xl mx-auto">
            Let's discuss your project or business requirements and find the right solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button variant="gold" size="lg">
                Request a Consultation
              </Button>
            </Link>
            <a href={CONTACT_LINKS.phone}>
              <Button variant="secondary" size="lg" icon={<Phone className="w-5 h-5" />}>
                Call {COMPANY_INFO.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
