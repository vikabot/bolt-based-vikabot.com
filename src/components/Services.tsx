import React from 'react';
import { Settings, TestTube2, UserCheck } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Settings className="h-16 w-16" />,
      title: "Complete IT Hardware Solutions",
      description: "End-to-end hardware lifecycle management",
      details: [
        "Client and Server Computer Solutions",
        "Storage System Integration",
        "Network Equipment Setup",
        "Installation and Commissioning",
        "Annual Maintenance Contracts (AMC)",
        "24/7 Technical Support"
      ]
    },
    {
      icon: <TestTube2 className="h-16 w-16" />,
      title: "AI Testing & Development Services",
      description: "Comprehensive testing and certification preparation",
      details: [
        "Mobile AI Application Testing",
        "Test Development Services",
        "Robotics/IoT AI Stack Consultation",
        "ASPICE Level Certification Prep",
        "Quality Assurance Protocols",
        "Performance Optimization"
      ]
    },
    {
      icon: <UserCheck className="h-16 w-16" />,
      title: "IT Recruitment Consultancy",
      description: "High-end IT niche profile recruitment",
      details: [
        "AI/ML Specialists",
        "Robotics Engineers",
        "Hardware Architects",
        "System Integration Experts",
        "DevOps Engineers",
        "Technical Leadership Roles"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Solutions & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology services designed to accelerate your 
            AI and hardware infrastructure initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group hover:shadow-xl transition-all duration-500 border border-gray-200 bg-gray-50 p-8"
            >
              <div className="text-black group-hover:text-gray-600 transition-colors duration-300 mb-8">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start space-x-3 text-gray-600">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-black text-white p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Infrastructure?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how our solutions can accelerate your AI and technology initiatives.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-black px-8 py-3 font-medium hover:bg-gray-200 transition-all duration-300"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;