import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Play, Heart, Menu, ArrowDown } from 'lucide-react';

function App() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.getElementById('video-section');
      if (videoSection) {
        const rect = videoSection.getBoundingClientRect();
        setShowStickyBar(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Intuitive Interface",
      description: "Our user-friendly design ensures quick adoption and improved workflow efficiency.",
      icon: "🖥️"
    },
    {
      title: "Customizable Workflows",
      description: "Tailor the system to fit your specific medical specialty and practice needs.",
      icon: "🔧"
    },
    {
      title: "Seamless Integration",
      description: "Easily integrate with existing systems and third-party applications.",
      icon: "🔗"
    },
    {
      title: "Advanced Analytics",
      description: "Gain valuable insights into your practice with powerful reporting tools.",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-500">EHRfix</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Before/After</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Content Library</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Trusted Partners</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">FAQs</a></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white py-4 absolute w-full">
            <ul className="flex flex-col items-center space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Before/After</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Content Library</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Trusted Partners</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">FAQs</a></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20 md:py-32">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in-up">
                Let's fix your confusing EHR system.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in-up animation-delay-200">
                We'll help you streamline your EHR workflow, customize for different specialties, and create an engaging patient experience.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-400">
                <button className="bg-green-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition duration-300 transform hover:scale-105">
                  Work with us
                </button>
                <button className="bg-white text-gray-800 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition duration-300 flex items-center justify-center transform hover:scale-105">
                  <Play className="mr-2" size={20} /> Watch a Demo
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 animate-fade-in-up animation-delay-600">
              <div className="bg-white rounded-lg p-6 shadow-2xl transform hover:scale-105 transition duration-300">
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-lg font-semibold">EHRfix Interface</div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white h-8 rounded w-full animate-pulse"></div>
                    <div className="bg-white h-8 rounded w-3/4 animate-pulse"></div>
                  </div>
                </div>
                <div className="bg-green-100 rounded-lg p-4 mb-4 transform hover:scale-105 transition duration-300">
                  <p className="text-green-800">Wow, this new EHR system is so intuitive! 😃</p>
                </div>
                <div className="bg-green-100 rounded-lg p-4 transform hover:scale-105 transition duration-300">
                  <p className="text-green-800">I can focus on my patients instead of struggling with software! 🎉</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 ${
                    activeFeature === index ? 'border-2 border-green-400' : ''
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section id="video-section" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">See EHRfix in Action</h2>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center group cursor-pointer transition duration-300 transform hover:scale-105">
                  <Play size={64} className="text-gray-400 group-hover:text-green-400 transition duration-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center flex items-center justify-center">
              <Heart className="text-red-500 mr-2" size={32} /> from our customers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  role: "Chief of Medicine, City Hospital",
                  content: "EHRfix transformed our hospital's workflow. The intuitive interface and customizable features have significantly improved our efficiency and patient care.",
                  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                },
                {
                  name: "Mark Thompson",
                  role: "IT Director, Regional Health Network",
                  content: "Implementing EHRfix was seamless. Their team's support and the system's adaptability to our specific needs exceeded our expectations.",
                  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                },
                {
                  name: "Dr. Emily Chen",
                  role: "Private Practice Owner",
                  content: "As a small practice owner, I was worried about the transition. EHRfix made it painless and now I can focus more on my patients instead of paperwork.",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your EHR experience?</h2>
            <p className="text-xl text-gray-600 mb-8">Join thousands of satisfied healthcare professionals who have made the switch to EHRfix.</p>
            <button className="bg-green-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-500 transition duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">EHRfix</h3>
              <p className="text-gray-400">Transforming healthcare one click at a time.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            © 2023 EHRfix. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Sticky Bar */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-md transition-transform duration-300 ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Profile 1" className="w-10 h-10 rounded-full mr-2 object-cover" />
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Profile 2" className="w-10 h-10 rounded-full mr-4 object-cover" />
            <span className="font-semibold text-lg">Get started with an intro call</span>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <button className="bg-white text-gray-800 border border-gray-300 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition duration-300 transform hover:scale-105">
              View Pricing
            </button>
            <button className="bg-green-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-500 transition duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;