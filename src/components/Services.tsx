import React from 'react';
import { PenTool, Home, Building, TreePine } from 'lucide-react';

const services = [
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Architectural Design",
    description: "Custom architectural solutions tailored to your needs and vision"
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Residential Projects",
    description: "Beautiful and functional homes that reflect your lifestyle"
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "Commercial Projects",
    description: "Innovative workspace designs that inspire productivity"
  },
  {
    icon: <TreePine className="h-8 w-8" />,
    title: "Landscape Design",
    description: "Harmonious integration of architecture with natural surroundings"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive architectural solutions for every need</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-gray-900 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}