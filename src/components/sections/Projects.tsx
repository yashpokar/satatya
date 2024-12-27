import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowUpRight } from 'lucide-react';

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

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-white">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Discover our architectural innovations that push the boundaries of design"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/5]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{project.category}</span>
                    <span className="text-sm">{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-2 transition-transform">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-4 group-hover:translate-x-2 transition-transform delay-75">
                    {project.description}
                  </p>
                  <div className="flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform delay-100">
                    View Project
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}