import React from 'react';

const Overview = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
          alt="Overview background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black">
          <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl font-bold mb-6 tracking-tight">
              Platform <span className="text-red-600">Overview</span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl leading-relaxed">
              The complete solution for <span className="text-red-500">smart data collection</span> and audience engagement
            </p>
          </div>
        </div>
      </div>

      {/* Featured Image Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto"> {/* Reduced container width */}
          {/* Medium Feature Image with hover effect */}
          <div className="relative rounded-lg overflow-hidden mb-12 transition-all duration-500 group hover:shadow-xl hover:shadow-red-900/30">
            <img
              src="https://i.postimg.cc/XqFtYfwh/Chat-GPT-Image-Apr-11-2025-12-13-40-PM.png"
              alt="PepperAds platform dashboard"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>




          {/* Enhanced Content Section */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              Transform Your <span className="text-red-600">Data Workflow</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              PepperAds revolutionizes how you create forms, analyze responses, and manage documents. 
              Our no-code platform empowers businesses, researchers, and educators to focus on insights, 
              not implementation.
            </p>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-red-600">Why Choose PepperAds?</h3>
              <ul className="space-y-4 text-lg text-gray-300 text-left max-w-2xl mx-auto">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✓</span>
                  <span>Intuitive drag-and-drop form builder with 100+ templates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✓</span>
                  <span>AI-powered analytics and response processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✓</span>
                  <span>Seamless PDF generation and document management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✓</span>
                  <span>Enterprise-grade security with simple pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;