import React from 'react';
import { Cpu, Server, Network, HardDrive } from 'lucide-react';

interface Product {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const Products: React.FC = () => {
  const products: Product[] = [
    {
      icon: <Cpu className="h-12 w-12" />,
      title: "NVIDIA Jetson Modules",
      description: "Latest AI computing modules for edge applications",
      features: ["Jetson Orin Series", "Jetson Xavier NX", "Development Kits", "Custom Carriers"]
    },
    {
      icon: <Server className="h-12 w-12" />,
      title: "Intel NUC Systems",
      description: "Compact computing solutions for various applications",
      features: ["NUC Pro Series", "NUC Extreme", "Industrial Models", "Custom Configurations"]
    },
    {
      icon: <Network className="h-12 w-12" />,
      title: "Network Equipment",
      description: "Enterprise-grade networking infrastructure",
      features: ["Managed Switches", "Wireless Solutions", "Security Appliances", "Network Monitoring"]
    },
    {
      icon: <HardDrive className="h-12 w-12" />,
      title: "Storage Solutions",
      description: "High-performance storage for data-intensive applications",
      features: ["NVMe Arrays", "Network Storage", "Backup Systems", "Cloud Integration"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge hardware solutions designed for AI, robotics, and 
            enterprise applications with complete integration support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-8 hover:shadow-lg transition-all duration-300 group border border-gray-200"
            >
              <div className="text-black group-hover:text-gray-600 transition-colors duration-300 mb-6">
                {product.icon}
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
                {product.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <ul className="space-y-2">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Need a custom solution? We provide complete system integration 
            from specification to deployment.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-all duration-300"
          >
            Request Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;