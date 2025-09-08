import React from 'react';
import { Cpu, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Cpu className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold">VIKABot</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Leading AI hardware infrastructure solutions provider, delivering 
              comprehensive technology services from consultation to implementation 
              with industry-leading expertise.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>support@vikabot.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Serving clients globally</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>IT Hardware Solutions</li>
              <li>AI Testing Services</li>
              <li>System Integration</li>
              <li>Technical Support</li>
              <li>Recruitment Services</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3 text-gray-300">
              <li>NVIDIA Jetson Modules</li>
              <li>Intel NUC Systems</li>
              <li>Network Equipment</li>
              <li>Storage Solutions</li>
              <li>Custom Integration</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} VIKABot. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;