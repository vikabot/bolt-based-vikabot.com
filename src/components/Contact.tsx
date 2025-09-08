import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, you would send this data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create mailto link
      const subject = encodeURIComponent(`${formData.subject} - ${formData.company}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
      );
      
      window.location.href = `mailto:support@vikabot.com?subject=${subject}&body=${body}`;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your AI hardware infrastructure needs? 
            Contact us for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-black mb-1">Email</h4>
                    <p className="text-gray-600">support@vikabot.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-black mb-1">Phone</h4>
                    <p className="text-gray-600">Available upon request</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-black mb-1">Location</h4>
                    <p className="text-gray-600">Serving clients globally</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-bold text-black mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
                <p className="text-sm mt-4">Emergency support available 24/7 for AMC customers</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
                >
                  <option value="">Select a subject</option>
                  <option value="Hardware Solutions">Hardware Solutions</option>
                  <option value="AI Testing Services">AI Testing Services</option>
                  <option value="Recruitment Services">Recruitment Services</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200 resize-vertical"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-3 px-6 font-medium hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;