import { Link } from 'react-router-dom';
import { MessageCircle, Scale, Building2, Briefcase, ArrowRight } from 'lucide-react';
import { CONTACT_LINKS, VISIBLE_SERVICES } from '../lib/constants';
import SEO from '../components/SEO';
import seoPages from '../lib/seo-pages.json';
import Button from '../components/Button';

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Building2,
  Briefcase,
};

const serviceImages: Record<string, string> = {
  'compliance-advisory': '/images/consulting-african.jpg',
  'real-estate-management': '/images/construction-african.jpg',
  'business-services': '/images/business-african.jpg',
};

export default function Services() {
  return (
    <>
      <SEO {...seoPages.services} />
      <div className="bg-light min-h-screen">
      {/* Page Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/services-hero.jpg"
            alt="Professional services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/50 to-navy/60" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-hero font-bold text-white mb-6">Our Services</h1>
            <p className="text-subtitle text-gray-100">
              Comprehensive professional solutions tailored to meet your specific needs across multiple service areas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {VISIBLE_SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const imageUrl = serviceImages[service.id];
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24 ${
                  index === VISIBLE_SERVICES.length - 1 ? '' : 'lg:mb-24'
                }`}
              >
                <div className={isEven ? 'order-1' : 'order-2'}>
                  <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                    <img
                      src={imageUrl}
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>
                <div className={isEven ? 'order-2' : 'order-1'}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center">
                      {IconComponent && <IconComponent className="w-7 h-7 text-gold" />}
                    </div>
                    <h2 className="text-3xl font-bold text-navy">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>

                  {/* Display offerings if they exist */}
                  {service.offerings && service.offerings.length > 0 && (
                    <div className="mb-8 space-y-6">
                      {service.offerings.map((offering, offeringIndex) => (
                        <div key={offeringIndex} className="bg-white p-6 rounded-xl border border-gray-200 shadow-soft">
                          <h3 className="text-xl font-bold text-navy mb-3">{offering.heading}</h3>
                          <p className="text-gray-700">{offering.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {service.items.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <span className="text-gold mt-1 flex-shrink-0">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                      Enquire About This Service
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-section font-bold mb-4">Need Help Choosing the Right Service?</h2>
          <p className="text-subtitle text-gray-200 mb-10 max-w-2xl mx-auto">
            Our team is ready to help you find the perfect solution for your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button variant="gold" size="lg">
                Contact Us
              </Button>
            </Link>
            <a href={CONTACT_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg">
                Request a Consultation
              </Button>
            </a>
            <a href={CONTACT_LINKS.whatsapp}>
              <Button variant="secondary" size="lg" icon={<MessageCircle className="w-5 h-5" />}>
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
