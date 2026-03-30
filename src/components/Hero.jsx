import React from 'react';
import { ArrowRight } from 'lucide-react';
import useQueryParamsContent from '../hooks/useQueryParamsContent';
import { useNavigate } from 'react-router-dom';
import StepsComponent from '../Animationcards/stepcards';


const Hero = () => {
  const navigate = useNavigate();
  const { title, image, paragraph } = useQueryParamsContent();

  const handleStartSurvey = async () => {
    console.log("Start Creating button clicked!");

    // Redirect to https://pepperwahl.com/
    const targetUrl = 'https://pepperwahl.com/';
    console.log("Opening URL:", targetUrl);

    const newWindow = window.open(targetUrl, '_blank', 'noopener,noreferrer');

    if (!newWindow) {
      console.error("Popup blocked! Trying location.href instead");
      window.location.href = targetUrl;
    } else {
      console.log("Successfully opened new window");
    }
  };

  const defaultTitle = (
    <>
      Create Online Surveys, Forms & PDFs That
      <span className="text-[#E31B23]"> Work for You</span>
    </>
  );

  const defaultImage = "https://i.postimg.cc/mkTZMTHD/GW-Generated-Image-4-9-2025-3-10-32-PM.png";
  
  return (
    <>
      <section className="pt-10 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                {title ? (
                  <>
                    {title} <span className="text-[#E31B23]">🌟</span>
                  </>
                ) : (
                  defaultTitle
                )}
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                {paragraph || "Build smart surveys fast — whether you want to create from scratch, upload a PDF, or generate one with AI."}
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={handleStartSurvey} className="btn-primary flex items-center">
                  Start Creating <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => navigate('/contactUs')}
                  className="btn-secondary flex items-center">
                  Try AI Form Builder <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={image || defaultImage}
                alt="Survey Dashboard" 
                className="rounded-lg shadow-2xl pb-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#E31B23] text-white p-4 rounded-lg">
                <p className="font-semibold">✨ AI-Powered</p>
                <p className="text-sm">Generate forms instantly</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;