import React from 'react';
import { motion } from 'framer-motion';
import { Book, Video, FileText, Users } from 'lucide-react';

const ResourceCenter = () => {
  const resources = [
    {
      icon: <Book className="w-8 h-8 text-[#E31B23]" />,
      title: "Micro-guides",
      description: "Step-by-step instructions for form creation and survey logic"
    },
    {
      icon: <Video className="w-8 h-8 text-[#E31B23]" />,
      title: "Video Tutorials",
      description: "Watch and learn with our detailed walkthroughs"
    },
    {
      icon: <FileText className="w-8 h-8 text-[#E31B23]" />,
      title: "Templates",
      description: "Ready-to-use templates for different industries"
    },
    {
      icon: <Users className="w-8 h-8 text-[#E31B23]" />,
      title: "Community Tips",
      description: "Learn from other users' success stories"
    }
  ];

  return (
    <div className="content-section">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">Resource Center</h1>
            <p className="section-subtitle">
              Your go-to space for learning, experimenting, and growing.
            </p>
            <div className="prose prose-invert">
              <p className="text-gray-400 mb-6">
                The Resource Center includes detailed micro-guides, walkthroughs, tutorials, 
                and expert tips on everything from form creation to advanced survey logic.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Resource Center"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#E31B23] text-white p-4 rounded-lg">
              <p className="font-semibold">📚 Learning Hub</p>
              <p className="text-sm">Updated weekly</p>
            </div>
          </motion.div>
        </div>

        {/* Resource Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card hover-scale"
            >
              <div className="mb-4">{resource.icon}</div>
              <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
              <p className="text-gray-400">{resource.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Community Showcases Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-4 text-[#E31B23]">Community Showcases</h2>
          <p className="text-gray-400 mb-6">
            Real-world examples of how creators, agencies, and marketers are using PepperAds to grow their audience and revenue.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-5 p-6 rounded-xl backdrop-blur-md border border-white border-opacity-10">
              <h4 className="text-white font-semibold mb-2">Agency X - Lead Gen Boost</h4>
              <p className="text-gray-400 text-sm">
                Increased qualified leads by 42% using Smart Routing in surveys.
              </p>
            </div>

            <div className="bg-white bg-opacity-5 p-6 rounded-xl backdrop-blur-md border border-white border-opacity-10">
              <h4 className="text-white font-semibold mb-2">Creator Y - Quiz Funnel Magic</h4>
              <p className="text-gray-400 text-sm">
                Used template-based quizzes to grow followers 3x in just one month.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResourceCenter;
