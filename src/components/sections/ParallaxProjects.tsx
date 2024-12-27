import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowUpRight } from 'lucide-react';
import { useParallax } from '../../hooks/useParallax';

const projects = [
  {
    title: "Ethereal Residences",
    category: "Residential",
    description: "Award-winning sustainable luxury homes",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80",
    year: "2023"
  },
  {
    title: "Nova Tech Hub",
    category: "Commercial",
    description: "Next-generation workspace design",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80",
    year: "2023"
  },
  {
    title: "Harmony Resort",
    category: "Hospitality",
    description: "Eco-conscious luxury retreat",
    image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?auto=format&fit=crop&q=80",
    year: "2022"
  }
];

export default function ParallaxProjects() {
  const scrollOffset = useParallax();

  return (
    <section id="projects" className="py-32 bg-white overflow-hidden">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Discover our architectural innovations that push the boundaries of design"
        />
        
        <div className="space-y-32">
          {projects.map((project, index) => {
            const offset = Math.min((scrollOffset - (index * 400)) * 0.5, 0);
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 items-center"
                style={{
                  transform: `translateY(${offset}px)`,
                  opacity: Math.max(1 - Math.abs(offset) / 1000, 0.2)
                }}
              >
                <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative group">
                    <div className="aspect-[4/3] overflow-hidden rounded-xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  </div>
                </div>
                
                <div className={`${isEven ? 'md:order-2' : 'md:order-1'} md:px-8`}>
                  <span className="text-sm font-medium text-gray-500 mb-2 block">
                    {project.category} • {project.year}
                  </span>
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <button className="group inline-flex items-center text-gray-900 font-semibold hover:text-gray-600 transition-colors">
                    View Project Details
                    <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}