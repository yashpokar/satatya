import React from 'react';
import { Users, Lightbulb, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Satatya Architect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate architects dedicated to creating sustainable and innovative designs
            that transform spaces and enhance lives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gray-100 rounded-full">
              <Users className="h-8 w-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
            <p className="text-gray-600">Our team brings years of experience and creativity to every project</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gray-100 rounded-full">
              <Lightbulb className="h-8 w-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Innovative Design</h3>
            <p className="text-gray-600">We blend creativity with functionality to create unique spaces</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gray-100 rounded-full">
              <Award className="h-8 w-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Award Winning</h3>
            <p className="text-gray-600">Recognized for excellence in architectural design and innovation</p>
          </div>
        </div>
      </div>
    </section>
  );
}