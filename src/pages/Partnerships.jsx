import React from 'react';
import { ArrowRight, Users, Globe, BadgeCheck, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Partnerships = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-96">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/500')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-6xl font-bold mb-4">
            Our <span className="text-red-600">Partnerships</span>
          </h1>
          <h2 className="text-3xl font-semibold text-red-500 mb-6">
            Collaborate & Grow
          </h2>
          <p className="text-xl max-w-3xl text-white">
            <span className="text-red-600 font-semibold">Together</span> We create scalable ecosystems that turn survey engagement into measurable revenue and digital growth.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        
        {/* Partnership Vision */}
        <div className="backdrop-blur-md bg-black bg-opacity-40 border border-red-900/30 rounded-xl p-8 mb-16 shadow-lg shadow-red-900/20">
          <h3 className="text-4xl font-bold text-white mb-6 text-center">Who We Partner With</h3>
          <p className="text-gray-300 text-lg text-center mb-8">
            We collaborate with a curated network of partners—agencies, offerwall platforms, affiliate publishers, and SaaS builders—to power intelligent survey flows, incentivized experiences, and monetization tools aligned with industry standards.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-black p-5 rounded-lg border border-red-900/20 text-center">
              <div className="flex justify-center mb-3">
                <Users className="w-12 h-12 text-red-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Agencies</h4>
              <p className="text-gray-400">Enhance your client offerings with data-driven survey solutions</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black p-5 rounded-lg border border-red-900/20 text-center">
              <div className="flex justify-center mb-3">
                <Globe className="w-12 h-12 text-red-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Offerwall Platforms</h4>
              <p className="text-gray-400">Deliver seamless, high-converting survey experiences</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black p-5 rounded-lg border border-red-900/20 text-center">
              <div className="flex justify-center mb-3">
                <BadgeCheck className="w-12 h-12 text-red-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Affiliate Publishers</h4>
              <p className="text-gray-400">Maximize traffic value with targeted survey engagement</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black p-5 rounded-lg border border-red-900/20 text-center">
              <div className="flex justify-center mb-3">
                <Award className="w-12 h-12 text-red-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">SaaS Builders</h4>
              <p className="text-gray-400">Embed our tools in your software ecosystem</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          <div className="md:w-1/2">
            <h3 className="text-4xl font-bold text-white mb-4">Boost Your Revenue</h3>
            <p className="text-gray-400 text-lg mb-6">
              If you're managing traffic and looking to increase revenue through smart surveys or embedded form systems, our partner ecosystem might be a fit.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <span className="bg-red-600 rounded-full p-1 mr-3">
                  <ArrowRight className="w-4 h-4" />
                </span>
                Track performance with detailed analytics
              </li>
              <li className="flex items-center text-gray-300">
                <span className="bg-red-600 rounded-full p-1 mr-3">
                  <ArrowRight className="w-4 h-4" />
                </span>
                Segment traffic for optimal conversions
              </li>
              <li className="flex items-center text-gray-300">
                <span className="bg-red-600 rounded-full p-1 mr-3">
                  <ArrowRight className="w-4 h-4" />
                </span>
                Automate offer delivery to maximize efficiency
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="backdrop-blur-lg bg-black bg-opacity-30 border border-red-900/40 rounded-xl p-6 shadow-xl shadow-red-900/10">
              <img 
                src="https://i.pinimg.com/1200x/88/6f/14/886f140b54cdf940ff059dbdb6775f1d.jpg" 
                alt="Partnership Benefits" 
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Integration Section */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 mb-16">
          <div className="md:w-1/2">
            <h3 className="text-4xl font-bold text-white mb-4">Custom Integrations</h3>
            <p className="text-gray-400 text-lg mb-6">
              Ask about integrations with Pepeleads and other custom solutions that help you track performance, segment traffic, and automate offer delivery.
            </p>
            <div className="backdrop-blur-md bg-red-950 bg-opacity-20 border border-red-800/30 rounded-lg p-4 mb-4">
              <h4 className="text-xl font-semibold text-red-400 mb-2">Pepeleads Integration</h4>
              <p className="text-gray-300">Seamless connectivity with the leading affiliate platform</p>
            </div>
            <div className="backdrop-blur-md bg-red-950 bg-opacity-20 border border-red-800/30 rounded-lg p-4">
              <h4 className="text-xl font-semibold text-red-400 mb-2">API Access</h4>
              <p className="text-gray-300">Custom endpoints for your specific business needs</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="backdrop-blur-lg bg-black bg-opacity-30 border border-red-900/40 rounded-xl p-6 shadow-xl shadow-red-900/10">
              <img 
                src="https://i.pinimg.com/1200x/34/6e/36/346e367abed9d42893fe2a50eb305e0d.jpg" 
                alt="Integration Solutions" 
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="backdrop-blur-md bg-gradient-to-r from-black to-red-950 bg-opacity-30 border border-red-900/20 rounded-xl p-10 mb-16 text-center">
          <p className="text-xl italic text-gray-300 mb-6">
            "Integrating their survey tools was a game-changer. Engagement improved, and our revenue jumped 43% in just three months."
          </p>
          <div className="font-semibold text-red-400">PepperAds</div>
          <div className="text-sm text-gray-400">CEO, Digital Affiliates Network</div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="backdrop-blur-md bg-black bg-opacity-50 border border-red-900/30 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
            <div className="text-gray-400">Tech & Traffic Partners</div>
          </div>
          <div className="backdrop-blur-md bg-black bg-opacity-50 border border-red-900/30 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">$2.5M+</div>
            <div className="text-gray-400">Partner Revenue Generated</div>
          </div>
          <div className="backdrop-blur-md bg-black bg-opacity-50 border border-red-900/30 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">100M+</div>
            <div className="text-gray-400">Surveys Completed</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="backdrop-blur-lg bg-gradient-to-br from-red-950 to-black bg-opacity-20 border border-red-900/40 rounded-xl p-10 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join a growing network of creators and publishers using surveys to unlock deeper insights and better monetization.
          </p>
          <button
              onClick={() => navigate('/login')}
              className="group flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors mx-auto"
            >
              Become a Partner Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
