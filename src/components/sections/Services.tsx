import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { PenTool, Building, TreePine, Ruler, Users, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Architectural Design",
    description: "Innovative solutions that blend aesthetics with functionality"
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Urban Planning",
    description: "Creating sustainable and livable urban environments"
  },
  {
    icon: <TreePine className="h-6 w-6" />,
    title: "Landscape Integration",
    description: "Harmonious fusion of architecture and natural surroundings"
  },
  {
    icon: <Ruler className="h-6 w-6" />,
    title: "Interior Design",
    description: "Thoughtfully crafted spaces that inspire and delight"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Project Management",
    description: "Seamless execution from concept to completion"
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Sustainable Design",
    description: "Eco-conscious solutions for a better tomorrow"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-gray-50">
      <Container>
        <SectionHeading
          title="Our Expertise"
          subtitle="Comprehensive architectural solutions tailored to your vision"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}