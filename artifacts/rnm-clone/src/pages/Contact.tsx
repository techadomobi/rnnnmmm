import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Calendar, MessageSquare, Users, Globe, ArrowRight, ChevronRight, Linkedin, Twitter, Facebook } from "lucide-react";

const offices = [
  {
    city: "New Delhi (Head Office)",
    address: "4/80, Janpath, Connaught Place, New Delhi - 110001",
    phone: "+91-11-4319 2000",
    email: "rnm@rnm.in",
    hours: "Mon–Fri: 9:00 AM – 6:00 PM IST",
    landmarks: "Near Janpath Market, Walking distance from Barakhamba Road Metro Station",
  },
  {
    city: "Gurugram",
    address: "Golf Course Road, DLF Phase IV, Gurugram, Haryana - 122001",
    phone: "+91-124-4207 800",
    email: "gurugram@rnm.in",
    hours: "Mon–Fri: 9:00 AM – 6:00 PM IST",
    landmarks: "Near Galleria Market, Adjacent to DLF Corporate Center",
  },
  {
    city: "Mumbai",
    address: "Bandra Kurla Complex, Plot No. C-25, Mumbai - 400051",
    phone: "+91-22-6686 2000",
    email: "mumbai@rnm.in",
    hours: "Mon–Fri: 9:00 AM – 6:00 PM IST",
    landmarks: "Near BKC Metro Station, Next to ICICI Towers",
  },
  {
    city: "Bengaluru",
    address: "MG Road, Prestige Towers, Bengaluru - 560001",
    phone: "+91-80-4152 3000",
    email: "bengaluru@rnm.in",
    hours: "Mon–Fri: 9:00 AM – 6:00 PM IST",
    landmarks: "Near Trinity Metro Station, Opposite to UB City",
  },
  {
    city: "Raipur",
    address: "Shankar Nagar, Main Road, Raipur, Chhattisgarh - 492007",
    phone: "+91-771-4052 000",
    email: "raipur@rnm.in",
    hours: "Mon–Fri: 9:00 AM – 6:00 PM IST",
    landmarks: "Near Shankar Nagar Square, Above HDFC Bank",
  },
  {
    city: "London, UK",
    address: "Aldgate, 120 Aldgate High Street, London, EC3N 1RE, United Kingdom",
    phone: "+44-20-7123 4567",
    email: "london@rnm.in",
    hours: "Mon–Fri: 9:00 AM – 5:30 PM GMT",
    landmarks: "Near Aldgate East Station, Close to Tower of London",
  },
];

const services = [
  "Audit & Business Advisory",
  "Taxation Services",
  "Transaction Advisory",
  "Corporate Finance",
  "Consultancy & CFO Services",
  "Corporate & Legal",
  "International Tax",
  "Transfer Pricing",
  "ESOP Advisory",
  "Other",
];

const contactReasons = [
  {
    icon: MessageSquare,
    title: "General Enquiry",
    desc: "Have a question about our services or want to learn more about RNM?"
  },
  {
    icon: Calendar,
    title: "Schedule a Meeting",
    desc: "Book a consultation with one of our experts at your convenience."
  },
  {
    icon: Users,
    title: "Partner With Us",
    desc: "Interested in partnership opportunities or referrals?"
  },
  {
    icon: Globe,
    title: "International Queries",
    desc: "Need assistance with cross-border transactions or global expansion?"
  },
];

const faqs = [
  {
    question: "How quickly can I expect a response?",
    answer: "We typically respond to all enquiries within 24 business hours. For urgent matters, you can call our main office directly."
  },
  {
    question: "Do you offer free initial consultations?",
    answer: "Yes, we offer a complimentary initial consultation to understand your requirements and discuss how we can help. This helps us tailor our services to your specific needs."
  },
  {
    question: "Can I visit your office in person?",
    answer: "Absolutely! We welcome clients to our offices. Please schedule an appointment in advance to ensure the right team members are available to meet with you."
  },
  {
    question: "Do you serve clients outside India?",
    answer: "Yes, through our London office and our membership in Geneva Group International (GGI), we serve clients globally and can assist with cross-border transactions and international tax matters."
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-[#1a0808] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium tracking-wider uppercase mb-6">
              <Mail size={12} className="text-[#c4793a]" />
              Get In Touch
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Our<br />
              <span className="text-[#c4793a]">Expert Team</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Reach out to our team of 200+ professionals for any financial, taxation, or advisory enquiries. We're here to help you navigate complex business challenges with expert guidance tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactReasons.map((reason, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#8B1A1A]/30 hover:shadow-md transition-all"
                data-testid={`contact-reason-${i}`}
              >
                <div className="w-12 h-12 bg-[#8B1A1A]/10 rounded-lg flex items-center justify-center mb-4">
                  <reason.icon size={22} className="text-[#8B1A1A]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center" data-testid="contact-success">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-500 text-sm max-w-md">
                    Thank you for reaching out. One of our professionals will contact you within 24 business hours to discuss your requirements.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" }); }}
                    className="mt-6 text-[#8B1A1A] text-sm font-medium hover:underline flex items-center gap-2"
                    data-testid="button-send-another"
                  >
                    Send Another Message <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#8B1A1A] focus:ring-1 focus:ring-[#8B1A1A] transition-colors"
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#8B1A1A] focus:ring-1 focus:ring-[#8B1A1A] transition-colors"
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#8B1A1A] focus:ring-1 focus:ring-[#8B1A1A] transition-colors"
                        data-testid="input-phone"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="company">Company / Organisation</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#8B1A1A] focus:ring-1 focus:ring-[#8B1A1A] transition-colors"
                        data-testid="input-company"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="service">Service Enquiry</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#8B1A1A] focus:ring-1 focus:ring-[#8B1A1A] transition-colors bg-white"
                      data-testid="select-service"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please describe your requirements or query in detail. The more information you provide, the better we can assist you."
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#8B1A1A] focus:ring-1 focus:ring-[#8B1A1A] transition-colors resize-none"
                      data-testid="input-message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#8B1A1A] text-white font-semibold py-3 rounded-lg hover:bg-[#7a1515] transition-colors"
                    data-testid="button-submit-contact"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Your information is kept strictly confidential and will not be shared with any third party. By submitting, you agree to our Privacy Policy.
                  </p>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-[#8B1A1A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-[#8B1A1A]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Phone</p>
                    <a href="tel:+911143192000" className="text-gray-600 text-sm hover:text-[#8B1A1A] block" data-testid="contact-phone">+91-11-4319 2000</a>
                    <p className="text-xs text-gray-400 mt-1">Mon-Fri, 9 AM - 6 PM IST</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-[#8B1A1A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[#8B1A1A]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Email</p>
                    <a href="mailto:rnm@rnm.in" className="text-gray-600 text-sm hover:text-[#8B1A1A] block" data-testid="contact-email">rnm@rnm.in</a>
                    <p className="text-xs text-gray-400 mt-1">Response within 24 hours</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-[#8B1A1A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#8B1A1A]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Head Office</p>
                    <p className="text-gray-600 text-sm">4/80, Janpath, Connaught Place</p>
                    <p className="text-gray-600 text-sm">New Delhi - 110001, India</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-[#8B1A1A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-[#8B1A1A]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Office Hours</p>
                    <p className="text-gray-600 text-sm">Monday – Friday: 9:00 AM – 6:00 PM IST</p>
                    <p className="text-gray-600 text-sm">Saturday – Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Office locations */}
              <h3 className="font-semibold text-gray-900 mb-4">All Office Locations</h3>
              <div className="space-y-3">
                {offices.map((office, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg border border-gray-100 p-4 hover:border-[#8B1A1A]/30 hover:shadow-md transition-all"
                    data-testid={`office-${i}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-sm">{office.city}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{office.address}</p>
                        <p className="text-xs text-gray-400 mt-1">{office.landmarks}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t border-gray-50">
                      <a href={`tel:${office.phone}`} className="text-xs text-[#8B1A1A] hover:underline flex items-center gap-1">
                        <Phone size={10} /> {office.phone}
                      </a>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock size={10} /> {office.hours}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-[#8B1A1A] hover:text-white transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-[#8B1A1A] hover:text-white transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-[#8B1A1A] hover:text-white transition-colors"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Find quick answers to common questions about contacting us and our services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-gray-50 rounded-xl border border-gray-100 group"
                data-testid={`contact-faq-${i}`}
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-5 pb-5 pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#8B1A1A] to-[#6b1010] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Expert Advice?
          </h2>
          <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
            Don't let financial and regulatory challenges hold you back. Our team of 200+ professionals is ready to help you achieve your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+911143192000"
              className="inline-flex items-center gap-2 bg-white text-[#8B1A1A] font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors"
            >
              <Phone size={16} />
              Call Us Now
            </a>
            <a
              href="mailto:rnm@rnm.in"
              className="inline-flex items-center gap-2 border border-white/50 text-white font-medium px-6 py-3 rounded hover:bg-white/10 transition-colors"
            >
              <Mail size={16} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}