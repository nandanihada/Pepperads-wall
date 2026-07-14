import React from 'react';
import { ArrowRight } from 'lucide-react';
import useQueryParamsContent from '../hooks/useQueryParamsContent';
import { useNavigate } from 'react-router-dom';
import StepsComponent from '../Animationcards/stepcards';


const Hero = () => {
  const navigate = useNavigate();
  const { title, image, paragraph } = useQueryParamsContent();

  const handleStartSurvey = async () => {
    const targetUrl = 'https://survey.pepperwahl.com/create-survey';
    const newWindow = window.open(targetUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow) {
      window.location.href = targetUrl;
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
      <section className="hero-section pt-6 sm:pt-10 pb-10 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Image - shows first on mobile */}
            <div className="relative order-1 md:order-2">
              <img
                src={image || defaultImage}
                alt="Survey Dashboard"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute bottom-2 right-2 sm:-bottom-4 sm:-right-4 bg-[#E31B23] text-white p-2 sm:p-3 md:p-4 rounded-lg shadow-lg">
                <p className="font-semibold text-xs sm:text-sm md:text-base">✨ AI-Powered</p>
                <p className="text-[10px] sm:text-xs md:text-sm">Generate forms instantly</p>
              </div>
            </div>

            {/* Text Content - shows second on mobile */}
            <div className="order-2 md:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                {title ? (
                  <>
                    {title} <span className="text-[#E31B23]">🌟</span>
                  </>
                ) : (
                  defaultTitle
                )}
              </h1>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 md:mb-8">
                {paragraph || "Build smart surveys fast — whether you want to create from scratch, upload a PDF, or generate one with AI."}
              </p>
              <div className="flex flex-row gap-3 sm:gap-4">
                <button onClick={handleStartSurvey} className="btn-primary flex items-center justify-center text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3">
                  Start Creating <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={() => navigate('/contactUs')}
                  className="btn-secondary flex items-center justify-center text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3">
                  Try AI Form Builder <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
