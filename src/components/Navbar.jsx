import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext'; 
const Navbar = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const { user } = useAuth();

const handleLogout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem('userEmail');
    alert('Logged out successfully!');
  } catch (error) {
    console.error('Logout error:', error);
    alert('Failed to logout. Try again.');
  }
};

  
  return (
    <nav className="bg-black py-1 fixed w-full top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Section - Reduced height */}
        {/* Logo Section */}
<div className="flex items-center gap-2">
  <a href="/" className="flex items-center">
    
    {/* Logo Image */}
    <img 
      src="https://i.postimg.cc/prvQWTcs/Copilot-20260323-145712.png" 
      alt="Pepperwahl" 
      className="h-36 md:h-22 w-auto object-contain"
    />

    {/* Logo Text */}
    <span className="text-white text-[24px] font-semibold ml-2">
      <span className="font-bold text-red-500"></span>
      <span className="font-medium"></span>
    </span>

  </a>
</div>
        
        {/* Navigation Links - With dropdowns */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Features Dropdown */}
          <div className="relative">
            <button 
              onClick={() => {
                setFeaturesOpen(!featuresOpen);
                setHowItWorksOpen(false);
                setResourcesOpen(false);
              }}
              className="text-white hover:text-[#E31B23] text-lg transition-colors flex items-center"
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
              className="text-white hover:text-[#E31B23] text-lg transition-colors flex items-center"
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
              className="text-white hover:text-[#E31B23] text-lg transition-colors flex items-center"
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
          
          {/* Help Centre - No dropdown */}
          <a href="/help-centre" className="text-white hover:text-[#E31B23] text-lg transition-colors">
            Help Centre
          </a>
          <Link to="/pricing" className="text-white hover:text-[#E31B23] text-lg transition-colors">
             Pricing
          </Link>
          
          <Link to="/login">
  <button className="bg-[#E31B23] hover:bg-red-700 text-white px-5 py-2 rounded-md text-lg transition">
    Get Started
  </button>
</Link>
{user && (
  <button
    onClick={handleLogout}
    className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-md text-lg transition"
  >
    Logout
  </button>
)}

        </div>

        {/* Mobile menu button could go here */}
      </div>
      
    </nav>
  );
};

export default Navbar;