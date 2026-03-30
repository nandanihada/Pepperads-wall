import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookOpenText, HelpCircle, Mail, DollarSign } from 'lucide-react';

const ResourcesHub = () => {
  const navigate = useNavigate();

  const cards = [
    {
      icon: <BookOpenText className="w-10 h-10 text-red-500" />,
      title: "Blog",
      desc: "Fresh takes, success stories, and expert breakdowns.",
      link: "/blog",
    },
    {
      icon: <HelpCircle className="w-10 h-10 text-red-500" />,
      title: "Help & Support",
      desc: "FAQs, walkthroughs, and real-time chat to support you.",
      link: "/helpsupport",
    },
    {
      icon: <Mail className="w-10 h-10 text-red-500" />,
      title: "Contact Us",
      desc: "Need help, feedback or partnership? Reach out to us.",
      link: "/contactus",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-red-500" />,
      title: "Survey Monetization",
      desc: "Turn your traffic into revenue with smart flows.",
      link: "/monetization",
    },
  ];

  return (
    <div className="bg-black text-white font-sans min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1617049032829-ffd5f6b3c16c?auto=format&fit=crop&w=1500&q=80"
          alt="Resources"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold mb-4"
          >
            All Things{" "}
            <span className="text-red-600 relative inline-block">
              Resources
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-red-600 rounded-full animate-pulse"></span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl max-w-2xl text-gray-300"
          >
            From blog posts to help docs — everything you need to grow with PepperAds.
          </motion.p>
        </div>
      </div>

      {/* Cards Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {cards.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            onClick={() => navigate(item.link)}
            className="bg-white bg-opacity-5 backdrop-blur-md border border-white/10 hover:border-red-600 rounded-2xl p-6 shadow-xl hover:shadow-red-600/30 transition-all duration-300 cursor-pointer"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-white hover:text-red-500 mb-2 transition-all duration-300">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Mini Resource Center Preview */}
      <div className="mt-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Inside the Learning Hub</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#111] p-6 rounded-xl border border-white/10 backdrop-blur-md">
            <BookOpenText className="w-8 h-8 text-red-500 mb-2" />
            <h3 className="text-xl font-semibold text-white mb-1">Micro-guides</h3>
            <p className="text-gray-400 text-sm">Step-by-step help with forms, logic & more.</p>
          </div>

          <div className="bg-[#111] p-6 rounded-xl border border-white/10 backdrop-blur-md">
            <Mail className="w-8 h-8 text-red-500 mb-2" />
            <h3 className="text-xl font-semibold text-white mb-1">Video Tutorials</h3>
            <p className="text-gray-400 text-sm">Detailed walkthroughs for visual learners.</p>
          </div>

          <div className="bg-[#111] p-6 rounded-xl border border-white/10 backdrop-blur-md">
            <HelpCircle className="w-8 h-8 text-red-500 mb-2" />
            <h3 className="text-xl font-semibold text-white mb-1">Templates</h3>
            <p className="text-gray-400 text-sm">Plug & play forms for various industries.</p>
          </div>

          <div className="bg-[#111] p-6 rounded-xl border border-white/10 backdrop-blur-md">
            <DollarSign className="w-8 h-8 text-red-500 mb-2" />
            <h3 className="text-xl font-semibold text-white mb-1">Community Tips</h3>
            <p className="text-gray-400 text-sm">Strategies from real users who grew with us.</p>
          </div>
        </div>

        {/* CTA to Resource Center */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/resource-center')}
            className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Explore Full Resource Center →
          </button>
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#7f0008] py-16 text-center px-6 mt-20"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Ready to explore more?
        </h2>
        <button
          onClick={() => navigate('/resource-center')}
          className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-md hover:bg-yellow-300 transition"
        >
          Go to Full Resource Center
        </button>
      </motion.div>
    </div>
  );
};

export default ResourcesHub;
