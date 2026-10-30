import { Link } from 'react-router-dom';
import { Award, Target, Heart, Shield, Star, TrendingUp, ArrowRight } from 'lucide-react';
import { CORE_VALUES } from '../lib/constants';
import SEO from '../components/SEO';
import Button from '../components/Button';

export default function About() {
  const valueIcons = [Shield, Heart, Award, TrendingUp, Star, Target];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about FidelityNet Global Services' mission, vision, and core values. We provide practical, client-focused professional services across Nigeria."
        path="/about"
      />
      <div className="bg-light min-h-screen">
      {/* Page Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.jpg"
            alt="About FidelityNet Global Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/50 to-navy/60" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-hero font-bold text-white mb-6">About FidelityNet Global Services</h1>
            <p className="text-subtitle text-gray-100">
              Committed to excellence through practical, client-focused professional services
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-section font-bold text-navy mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                FidelityNet Global Services provides a range of professional solutions across real estate and construction, and consulting and compliance. We aim to understand each client's requirements and provide practical services through clear communication, careful planning, and a professional approach.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team is dedicated to delivering quality service that addresses the unique needs of individuals, businesses, and organisations across Nigeria.
              </p>
            </div>
            <div>
              <img
                src="/images/why-choose-us.jpg"
                alt="Our professional team"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Strategy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/images/strategy-african.jpg"
                alt="Our strategy and business planning"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
            <div>
              <h2 className="text-section font-bold text-navy mb-6">Our Strategy</h2>
              <p className="text-lg text-gray-700 leading-relaxed font-bold">
                At FidelityNet Global Services, our strategy is guided by a deep commitment to delivering value to our customers, shareholders, and communities across Africa and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-soft p-12">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-navy mb-4">Our Mission</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our mission is to provide practical, client-focused professional services that help individuals, businesses, and organisations address their requirements with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-navy rounded-2xl shadow-elevated p-12">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Our vision is to build lasting client relationships through dependable service, continuous improvement, and a commitment to professional standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-subtitle text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {CORE_VALUES.map((value: string, index: number) => {
              const IconComponent = valueIcons[index % valueIcons.length];
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-gold group-hover:text-navy transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{value}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-section font-bold mb-4">Work With Us</h2>
          <p className="text-subtitle text-gray-200 mb-10 max-w-2xl mx-auto">
            Ready to experience professional service tailored to your needs? Get in touch with us today.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}
