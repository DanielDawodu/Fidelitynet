import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, CONTACT_LINKS } from '../lib/constants';
import type { ContactFormData } from '../types';
import SEO from '../components/SEO';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceCategory: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT || '';

      if (!formEndpoint) {
        setStatus('error');
        setErrorMessage('Contact form delivery is not yet configured. Please contact us directly via phone or email.');
        return;
      }

      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          serviceCategory: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage('Failed to submit form. Please try again or contact us directly.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An error occurred. Please contact us directly via phone or email.');
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with FidelityNet Global Services. Contact us via phone, WhatsApp, or email for professional consulting, real estate, construction, training, and business support services in Nigeria."
        path="/contact"
      />
      <div className="bg-light min-h-screen">
      {/* Page Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/contact-hero.jpg"
            alt="Contact FidelityNet Global Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <h1 className="text-hero font-bold text-white mb-6">Contact Us</h1>
          <p className="text-subtitle text-gray-200 max-w-3xl">
            Get in touch with {COMPANY_INFO.name}. We're here to help with your professional service needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-section font-bold text-navy mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2 text-lg">Phone</h3>
                    <a
                      href={CONTACT_LINKS.phone}
                      className="text-gray-700 hover:text-royal transition-colors text-lg"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2 text-lg">WhatsApp</h3>
                    <a
                      href={CONTACT_LINKS.whatsapp}
                      className="text-gray-700 hover:text-royal transition-colors text-lg"
                      aria-label="Chat on WhatsApp"
                    >
                      {COMPANY_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2 text-lg">Email</h3>
                    <a
                      href={CONTACT_LINKS.email}
                      className="text-gray-700 hover:text-royal transition-colors text-lg break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2 text-lg">Service Areas</h3>
                    <p className="text-gray-700 text-lg">
                      Serving clients across Nigeria, including Ijebu-Ode, Ibadan, Lagos, and other locations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-elevated">
              <h2 className="text-section font-bold text-navy mb-8">Send Us a Message</h2>

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-green-800">Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-800">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all"
                    placeholder="09063703851"
                  />
                </div>

                <div>
                  <label htmlFor="serviceCategory" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Category
                  </label>
                  <select
                    id="serviceCategory"
                    name="serviceCategory"
                    value={formData.serviceCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service category</option>
                    <option value="compliance-advisory">Compliance Advisory</option>
                    <option value="real-estate-management">Real Estate Management</option>
                    <option value="study-abroad">Study Abroad and Visa Services</option>
                    <option value="hr-management">Human Resources Management</option>
                    <option value="business-services">Business and Corporate Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all resize-y"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  disabled={status === 'submitting'}
                  icon={<Send className="w-5 h-5" />}
                  className="w-full"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
