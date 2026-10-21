import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, CONTACT_LINKS } from '../lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/logo.png"
                alt={COMPANY_INFO.name}
                className="w-12 h-12 object-contain rounded-xl shadow-soft"
              />
              <div>
                <h3 className="font-bold text-base leading-tight">{COMPANY_INFO.name}</h3>
                <p className="text-xs text-gold font-medium tracking-wide">
                  {COMPANY_INFO.tagline}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Professional solutions for compliance, real estate, construction, training and business support.
            </p>
            <div className="flex space-x-4">
              <a
                href={CONTACT_LINKS.whatsapp}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_LINKS.email}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-gold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-gold transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gold mr-0 group-hover:mr-2 transition-all duration-300" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-gray-300 hover:text-gold transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gold mr-0 group-hover:mr-2 transition-all duration-300" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-300 hover:text-gold transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gold mr-0 group-hover:mr-2 transition-all duration-300" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-300 hover:text-gold transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gold mr-0 group-hover:mr-2 transition-all duration-300" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-gold text-sm uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li key="compliance-advisory">Compliance Advisory</li>
              <li key="real-estate-management">Real Estate Management</li>
              <li key="study-abroad">Study Abroad & Visa Services</li>
              <li key="hr-management">Human Resources Management</li>
              <li key="business-services">Business Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-gold text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href={CONTACT_LINKS.phone}
                    className="text-sm text-gray-300 hover:text-gold transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <a
                    href={CONTACT_LINKS.whatsapp}
                    className="block text-sm text-gray-400 hover:text-gold transition-colors"
                    aria-label="WhatsApp"
                  >
                    WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <a
                  href={CONTACT_LINKS.email}
                  className="text-sm text-gray-300 hover:text-gold transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">
                  Serving clients across Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
