import React from 'react';
import { Cpu, Server, Network, HardDrive, Zap, Monitor } from 'lucide-react';

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
      description: "Complete range of AI computing modules for edge applications",
      features: ["Jetson Orin Nano", "Jetson Orin NX", "Jetson AGX Orin", "Jetson Xavier NX", "Development Kits", "Custom Carrier Boards"]
    },
    {
      icon: <Server className="h-12 w-12" />,
      title: "Intel NUC Systems",
      description: "Compact, powerful computing solutions for edge deployment",
      features: ["Intel NUC 13 Pro", "NUC Mini PCs", "Industrial NUC Variants", "Custom Configurations"]
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "RISC-V Development Boards",
      description: "Open-source processor architecture development platforms",
      features: ["RISC-V SoC Boards", "Development Kits", "Custom RISC-V Solutions", "Open Hardware Platforms"]
    },
    {
      icon: <Monitor className="h-12 w-12" />,
      title: "NVIDIA DGX-Spark",
      description: "High-performance AI workstations and servers",
      features: ["DGX Workstations", "AI Training Systems", "GPU Clusters", "Enterprise AI Infrastructure"]
    }
  ];

  const additionalProducts: Product[] = [
    {
      icon: <Cpu className="h-12 w-12" />,
      title: "Custom ARM Modules",
      description: "Specialized ARM-based computing solutions",
      features: ["Custom ARM SoCs", "Embedded Modules", "IoT Processors", "Edge Computing Units"]
    },
    {
      icon: <Server className="h-12 w-12" />,
      title: "Tyan Enterprise Systems",
      description: "Professional rack and tower server solutions",
      features: ["Rack Mount Servers", "Tower Systems", "Workstations", "Storage Servers", "GPU Servers"]
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
              className="bg-white p-6 hover:shadow-lg transition-all duration-300 group border border-gray-200"
            >
              <div className="text-black group-hover:text-gray-600 transition-colors duration-300 mb-6">
                {product.icon}
              </div>
              
              <h3 className="text-lg font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
                {product.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {product.description}
              </p>
              
              <ul className="space-y-2">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">Additional Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalProducts.map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 hover:shadow-lg transition-all duration-300 group border border-gray-200"
              >
                <div className="text-black group-hover:text-gray-600 transition-colors duration-300 mb-6">
                  {product.icon}
                </div>
                
                <h3 className="text-lg font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {product.description}
                </p>
                
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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