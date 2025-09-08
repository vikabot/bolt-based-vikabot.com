import React from 'react';
import { Target, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About VIKABot
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading provider of AI hardware infrastructure solutions, delivering 
            comprehensive technology services from consultation to implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Target className="h-8 w-8 text-black flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To accelerate AI innovation through cutting-edge hardware solutions, 
                  comprehensive testing services, and expert consultation that bridges 
                  the gap between technology and practical implementation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Users className="h-8 w-8 text-black flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Our Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  With deep knowledge in AI hardware, robotics, IoT systems, and 
                  enterprise IT infrastructure, we provide end-to-end solutions 
                  tailored to your specific requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-black flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Our Commitment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Delivering excellence in every project through rigorous testing, 
                  industry-standard certifications, and ongoing support that ensures 
                  your technology investment delivers maximum value.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-black mb-6">Why Choose VIKABot?</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Complete hardware lifecycle management</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>ASPICE-level certification preparation</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Expert AI and robotics consulting</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>High-end IT talent recruitment</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>24/7 technical support and AMC</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;