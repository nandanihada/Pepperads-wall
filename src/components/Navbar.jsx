import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeAllDropdowns = () => {
    setFeaturesOpen(false);
    setHowItWorksOpen(false);
    setResourcesOpen(false);
  };

  return (
    <nav className="bg-black py-3 sm:py-4 fixed w-full top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center gap-2 mr-8 lg:mr-12">
          <a href="/" className="flex items-center">
            <img
              src="/favicon.png"
              alt="Pepperwahl Logo"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
            <span className="text-xl sm:text-2xl md:text-[28px] font-bold ml-2 tracking-tight whitespace-nowrap">
              <span className="text-[#E31B23]">Pepper</span><span className="text-white">wahl</span>
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 hover:text-[#E31B23] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {/* Features Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setFeaturesOpen(!featuresOpen);
                setHowItWorksOpen(false);
                setResourcesOpen(false);
              }}
              className="text-white hover:text-[#E31B23] text-base lg:text-lg transition-colors flex items-center"
            >
              Features <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {featuresOpen && (
              <div className="absolute top-full left-0 mt-1 bg-[#121212] border border-gray-800 rounded-md shadow-xl py-2 min-w-[200px]">
                <a href="/features" className="block px-4 py-2 text-white hover:bg-[#1A1A1A]">
                  All Features
                </a>
                <a href="/features/examples" className="block px-4 py-2 text-white hover:bg-[#1A1A1A]">
                  Customer Examples
                </a>
              </div>
            )}
          </div>

          {/* How It Works Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setHowItWorksOpen(!howItWorksOpen);
                setFeaturesOpen(false);
                setResourcesOpen(false);
              }}
              className="text-white hover:text-[#E31B23] text-base lg:text-lg transition-colors flex items-center"
            >
              How It Works <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {howItWorksOpen && (
              <div className="absolute top-full left-0 mt-1 bg-[#121212] border border-gray-800 rounded-md shadow-xl py-2 min-w-[200px]">
                <a href="/processoverview" className="block px-4 py-2 text-white hover:bg-[#1A1A1A]">
                  Process Overview
                </a>
                <a href="/pdf-demo" className="block px-4 py-2 text-white hover:bg-[#1A1A1A]">
                  PDF Demo
                </a>
                <a href="/ai-promo" className="block px-4 py-2 text-white hover:bg-[#1A1A1A]">
                  AI Form Builder
                </a>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setResourcesOpen(!resourcesOpen);
                setFeaturesOpen(false);
                setHowItWorksOpen(false);
              }}
              className="text-white hover:text-[#E31B23] text-base lg:text-lg transition-colors flex items-center"
            >
              Resources <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {resourcesOpen && (
              <div className="absolute top-full left-0 mt-1 bg-[#121212] border border-gray-800 rounded-md shadow-xl py-2 min-w-[200px]">
                <a href="/resources" className="block px-4 py-2 text-white hover:bg-[#1A1A1A]">
                  Micro-Guides
                </a>
                <a href="/resources/active-features" className="block px-4 py-2 text-white hover:bg-[#1A1A1A]">
                  Active Features vs In Development
                </a>
              </div>
            )}
          </div>

          {/* Help Centre */}
          <a href="/help-centre" className="text-white hover:text-[#E31B23] text-base lg:text-lg transition-colors">
            Help Centre
          </a>
          <Link to="/pricing" className="text-white hover:text-[#E31B23] text-base lg:text-lg transition-colors">
            Pricing
          </Link>
          <Link to="/refer-and-earn" className="text-white hover:text-[#E31B23] text-base lg:text-lg transition-colors font-medium">
            Refer & Earn
          </Link>

          <a href="https://survey.pepperwahl.com/login" target="_blank" rel="noopener noreferrer">
            <button className="bg-white hover:bg-gray-100 text-[#E31B23] font-bold px-4 lg:px-5 py-2 rounded-md text-base lg:text-lg transition">
              Sign In
            </button>
          </a>

          <a href="https://survey.pepperwahl.com/create-survey" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#E31B23] hover:bg-red-700 text-white px-4 lg:px-5 py-2 rounded-md text-base lg:text-lg transition">
              Get Started
            </button>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-gray-800 px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
          {/* Features */}
          <div>
            <button
              onClick={() => {
                setFeaturesOpen(!featuresOpen);
                setHowItWorksOpen(false);
                setResourcesOpen(false);
              }}
              className="w-full text-left text-white hover:text-[#E31B23] py-2 text-base flex items-center justify-between"
            >
              Features <ChevronDown className={`h-4 w-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
            </button>
            {featuresOpen && (
              <div className="pl-4 space-y-1 pb-2">
                <a href="/features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-[#E31B23]">
                  All Features
                </a>
                <a href="/features/examples" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-[#E31B23]">
                  Customer Examples
                </a>
              </div>
            )}
          </div>

          {/* How It Works */}
          <div>
            <button
              onClick={() => {
                setHowItWorksOpen(!howItWorksOpen);
                setFeaturesOpen(false);
                setResourcesOpen(false);
              }}
              className="w-full text-left text-white hover:text-[#E31B23] py-2 text-base flex items-center justify-between"
            >
              How It Works <ChevronDown className={`h-4 w-4 transition-transform ${howItWorksOpen ? 'rotate-180' : ''}`} />
            </button>
            {howItWorksOpen && (
              <div className="pl-4 space-y-1 pb-2">
                <a href="/processoverview" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-[#E31B23]">
                  Process Overview
                </a>
                <a href="/pdf-demo" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-[#E31B23]">
                  PDF Demo
                </a>
                <a href="/ai-promo" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-[#E31B23]">
                  AI Form Builder
                </a>
              </div>
            )}
          </div>

          {/* Resources */}
          <div>
            <button
              onClick={() => {
                setResourcesOpen(!resourcesOpen);
                setFeaturesOpen(false);
                setHowItWorksOpen(false);
              }}
              className="w-full text-left text-white hover:text-[#E31B23] py-2 text-base flex items-center justify-between"
            >
              Resources <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            {resourcesOpen && (
              <div className="pl-4 space-y-1 pb-2">
                <a href="/resources" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-[#E31B23]">
                  Micro-Guides
                </a>
                <a href="/resources/active-features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-[#E31B23]">
                  Active Features vs In Development
                </a>
              </div>
            )}
          </div>

          {/* Direct Links */}
          <a href="/help-centre" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-[#E31B23] py-2 text-base">
            Help Centre
          </a>
          <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-[#E31B23] py-2 text-base">
            Pricing
          </Link>
          <Link to="/refer-and-earn" onClick={() => setMobileMenuOpen(false)} className="block text-[#E31B23] hover:text-red-400 py-2 text-base font-semibold">
            Refer & Earn
          </Link>

          {/* CTA Buttons */}
          <div className="pt-3 space-y-2">
            <a href="https://survey.pepperwahl.com/login" target="_blank" rel="noopener noreferrer" className="block">
              <button className="w-full bg-white hover:bg-gray-100 text-[#E31B23] font-bold px-5 py-3 rounded-md text-base transition">
                Sign In
              </button>
            </a>
            <a href="https://survey.pepperwahl.com/create-survey" target="_blank" rel="noopener noreferrer" className="block">
              <button className="w-full bg-[#E31B23] hover:bg-red-700 text-white px-5 py-3 rounded-md text-base font-medium transition">
                Get Started
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
