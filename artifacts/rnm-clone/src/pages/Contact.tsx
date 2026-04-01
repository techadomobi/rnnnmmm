import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const offices = [
  {
    city: "New Delhi (Head Office)",
    address: "4/80, Janpath, New Delhi - 110001",
    phone: "+91-11-4319 2000",
    email: "rnm@rnm.in",
    hours: "Mon–Fri: 9:00 AM – 6:00 PM",
  },
  {
    city: "Gurugram",
    address: "Golf Course Road, Gurugram, Haryana - 122001",
    phone: "+91-124-4207 800",
    email: "gurugram@rnm.in",
    hours: "Mon–Fri: 9:00 AM – 6:00 PM",
  },
  {
    city: "Mumbai",
    address: "Bandra Kurla Complex, Mumbai - 400051",
    phone: "+91-22-6686 2000",
    email: "mumbai@rnm.in",
    hours: "Mon–Fri: 9:00 AM – 6:00 PM",
  },
  {
    city: "Bengaluru",
    address: "MG Road, Bengaluru - 560001",
    phone: "+91-80-4152 3000",
    email: "bengaluru@rnm.in",
    hours: "Mon–Fri: 9:00 AM – 6:00 PM",
  },
  {
    city: "Raipur",
    address: "Shankar Nagar, Raipur, Chhattisgarh - 492007",
    phone: "+91-771-4052 000",
    email: "raipur@rnm.in",
    hours: "Mon–Fri: 9:00 AM – 6:00 PM",
  },
  {
    city: "London, UK",
    address: "Aldgate, London, EC3N 1RE, United Kingdom",
    phone: "+44-20-7123 4567",
    email: "london@rnm.in",
    hours: "Mon–Fri: 9:00 AM – 5:30 PM (GMT)",
  },
];

const services = [
  "Audit & Business Advisory",
  "Taxation Services",
  "Transaction Advisory",
  "Corporate Finance",
  "Consultancy",
  "Corporate & Legal",
  "Other",
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
      <section className="bg-gradient-to-br from-gray-900 to-[#1a0808] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-[#c4793a] text-sm font-semibold uppercase tracking-widest mb-4">Contact Us</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5">
              Get In Touch With Our Experts
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Reach out to our team of professionals for any financial, taxation, or advisory enquiries. We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center" data-testid="contact-success">
                  <CheckCircle size={48} className="text-green-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">
                    Thank you for reaching out. One of our professionals will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" }); }}
                    className="mt-6 text-[#8B1A1A] text-sm font-medium hover:underline"
                    data-testid="button-send-another"
                  >
                    Send Another Message
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
                      placeholder="Please describe your requirements or query..."
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
                    Your information is kept strictly confidential and will not be shared with any third party.
                  </p>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <Phone size={18} className="text-[#8B1A1A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Phone</p>
                    <a href="tel:+911143192000" className="text-gray-600 text-sm hover:text-[#8B1A1A]" data-testid="contact-phone">+91-11-4319 2000</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail size={18} className="text-[#8B1A1A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Email</p>
                    <a href="mailto:rnm@rnm.in" className="text-gray-600 text-sm hover:text-[#8B1A1A]" data-testid="contact-email">rnm@rnm.in</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin size={18} className="text-[#8B1A1A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Head Office</p>
                    <p className="text-gray-600 text-sm">4/80, Janpath, New Delhi - 110001, India</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock size={18} className="text-[#8B1A1A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Office Hours</p>
                    <p className="text-gray-600 text-sm">Monday – Friday: 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Office locations */}
              <h3 className="font-semibold text-gray-900 mb-4">All Offices</h3>
              <div className="space-y-3">
                {offices.map((office, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg border border-gray-100 p-4 hover:border-[#8B1A1A]/30 transition-colors"
                    data-testid={`office-${i}`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{office.city}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{office.address}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <a href={`tel:${office.phone}`} className="text-xs text-[#8B1A1A] hover:underline flex items-center gap-1">
                        <Phone size={10} /> {office.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
