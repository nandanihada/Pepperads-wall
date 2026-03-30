import React from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BuildSurveyGuidePage from './BuildSurveyGuidePage';
import AIFormCreatorGuidePage from './AIFormCreatorGuidePage';
import AllTemplates from './AllTemplates';
import { animationVariants, hoverEffects as utilityHoverEffects } from '../utils/animations';

// Enhanced custom hook with better timing control
const useScrollAnimation = (options = {}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px 0px",
    amount: 0.3,
    ...options
  });
  return [ref, isInView];
};

// Enhanced animation variants with sequenced timing
const fadeSlideUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.8, 
    ease: [0.16, 1, 0.3, 1],
    delay: 0.1
  },
  viewport: { once: true, amount: 0.3 },
};

const fadeZoom = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.7,
    delay: 0.2
  },
  viewport: { once: true, amount: 0.3 },
};

const staggerList = {
  initial: {},
  whileInView: { 
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    } 
  },
  viewport: { once: true, amount: 0.3 },
};

const listItem = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { 
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1]
  },
};

// Enhanced hover effect variants with better timing
const hoverEffects = {
  textContainer: {
    scale: 1.02,
    transition: { 
      duration: 0.3, 
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.05
    }
  },

  heroSection: {
    scale: 1.01,
    filter: "brightness(1.1)",
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      delay: 0.1
    }
  },

  bulletPoint: {
    x: 10,
    color: "#ffffff",
    transition: { 
      duration: 0.3, 
      ease: "easeOut",
      delay: 0.05
    }
  },

  bulletIcon: {
    scale: 1.3,
    color: "#ff4444",
    rotate: 360,
    transition: { 
      duration: 0.4, 
      ease: "easeOut",
      delay: 0.05
    }
  },

  imageContainer: {
    scale: 1.05,
    y: -10,
    boxShadow: "0 25px 80px rgba(255, 68, 68, 0.4)",
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.1
    }
  },

  ctaButton: {
    scale: 1.1,
    y: -5,
    boxShadow: "0 15px 40px rgba(255, 196, 0, 0.5)",
    backgroundColor: "#ffd700",
    transition: { 
      duration: 0.3, 
      ease: "easeOut",
      delay: 0.05
    }
  },

  ctaSection: {
    scale: 1.02,
    boxShadow: "inset 0 0 100px rgba(255, 68, 68, 0.3)",
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      delay: 0.1
    }
  },

  whyChooseCard: {
    scale: 1.03,
    y: -8,
    boxShadow: "0 20px 60px rgba(255, 68, 68, 0.2), 0 0 40px rgba(255, 68, 68, 0.1)",
    borderColor: "#ff4444",
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.1
    }
  }
};

// Particle background component
const ParticleBackground = ({ count = 20 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-red-500/10 to-pink-500/10"
          style={{
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'blur(40px)'
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.3, 0.1],
            transition: {
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }
          }}
        />
      ))}
    </div>
  );
};

const Landing1 = () => {
  // Enhanced scroll-triggered animations with sequenced timing
  const [navRef, navInView] = useScrollAnimation({ margin: "0px" });
  const [heroRef, heroInView] = useScrollAnimation({ margin: "-100px" });
  const [descriptionRef, descriptionInView] = useScrollAnimation({ amount: 0.3 });
  const [imageRef, imageInView] = useScrollAnimation({ margin: "-150px" });
  const [aiGuideRef, aiGuideInView] = useScrollAnimation({ margin: "-100px" });
  const [templatesRef, templatesInView] = useScrollAnimation({ margin: "-100px" });
  const [ctaRef, ctaInView] = useScrollAnimation({ amount: 0.8 });

  return (
    <motion.div
      className="bg-black min-h-screen text-white overflow-x-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Particle background */}
      <ParticleBackground count={15} />

      {/* Navbar with sequenced fade down entrance */}
      <motion.div
        ref={navRef}
        variants={animationVariants.fadeInDown}
        initial="hidden"
        animate={navInView ? "visible" : "hidden"}
        transition={{ 
          duration: 0.8,
          delay: 0.2
        }}
      >
        <Navbar />
      </motion.div>

      {/* Hero Section with enhanced cinematic entrance */}
      <motion.div
        ref={heroRef}
        variants={{
          hidden: { opacity: 0, y: 50, scale: 0.98 },
          visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3
            }
          }
        }}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        whileHover={hoverEffects.heroSection}
        className="cursor-pointer relative z-10"
      >
        <Hero />
      </motion.div>

      {/* Main Description Section with sequenced animations */}
      <motion.div
        ref={descriptionRef}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.4
            }
          }
        }}
        initial="hidden"
        animate={descriptionInView ? "visible" : "hidden"}
        className="text-center max-w-4xl mx-auto my-24 px-4 relative z-10"
        whileHover={hoverEffects.textContainer}
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }}
          className="text-4xl md:text-5xl font-bold mb-8 leading-tight cursor-pointer overflow-hidden"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <motion.span className="block">Transform Your</motion.span>{" "}
          <motion.span
            className="text-red-600 inline-block"
            whileHover={{
              color: "#ff4444",
              textShadow: "0 0 20px rgba(255, 68, 68, 0.8)",
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
          >
            Data Workflow
          </motion.span>
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2
              }
            }
          }}
          className="text-xl text-gray-300 mb-12 leading-relaxed cursor-pointer"
          whileHover={{
            color: "#ffffff",
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          PepperAds revolutionizes how you create forms, analyze responses, and manage documents.
          Our no-code platform empowers businesses, researchers, and educators to focus on insights,
          not implementation.
        </motion.p>

        {/* Why Choose PepperAds Card with sequenced animations */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4
              }
            }
          }}
          className="bg-gray-900 p-8 rounded-lg border border-gray-800 shadow-lg cursor-pointer relative overflow-hidden"
          whileHover={hoverEffects.whyChooseCard}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.5
                }
              }
            }}
            className="text-2xl font-bold mb-6 text-red-600 relative z-10"
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 15px rgba(255, 68, 68, 0.6)",
              transition: { duration: 0.3 }
            }}
          >
            Why Choose PepperAds?
          </motion.h3>

          <motion.ul 
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.6
                }
              }
            }}
            className="space-y-5 text-lg text-gray-300 text-left max-w-2xl mx-auto relative z-10"
          >
            {[
              "Intuitive drag-and-drop form builder with 100+ templates",
              "AI-powered analytics and response processing",
              "Seamless PDF generation and document management",
              "Enterprise-grade security with simple pricing",
            ].map((point, idx) => (
              <motion.li
                className="flex items-start cursor-pointer group relative"
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }
                }}
                whileHover={hoverEffects.bulletPoint}
              >
                <motion.span
                  className="text-red-500 mr-3 inline-block"
                  whileHover={hoverEffects.bulletIcon}
                >
                  ✓
                </motion.span>
                <motion.span
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {point}
                </motion.span>

                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-8 h-0.5 bg-red-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "calc(100% - 2rem)" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Enhanced Image Block with sequenced animations */}
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2
          }
        }}
        viewport={{ once: true, margin: "-150px" }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="relative rounded-lg overflow-hidden mb-12 cursor-pointer group"
            whileHover={hoverEffects.imageContainer}
          >
            {/* Layered image effects */}
            <motion.img
              src="https://i.postimg.cc/XqFtYfwh/Chat-GPT-Image-Apr-11-2025-12-13-40-PM.png"
              alt="PepperAds platform dashboard"
              className="w-full h-auto object-cover transition-all duration-700"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.8,
                  delay: 0.4
                }
              }}
              whileHover={{
                scale: 1.1,
                filter: "brightness(1.2) contrast(1.1)",
                transition: { duration: 0.7 }
              }}
            />

            {/* Dynamic overlay gradients */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-red-600/20"
              initial={{ opacity: 0, x: "-100%" }}
              whileHover={{ opacity: 1, x: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            {/* Hover text overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="bg-black/80 backdrop-blur-sm rounded-lg px-6 py-3 border border-red-500/50"
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-white font-semibold">Explore Dashboard Features</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* AI Form Creator Guide with sequenced slide in */}
      <motion.div
        ref={aiGuideRef}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ 
          opacity: 1, 
          x: 0,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3
          }
        }}
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.5 }
        }}
        className="relative z-10"
      >
        <AIFormCreatorGuidePage />
      </motion.div>

      {/* All Templates with sequenced slide in */}
      <motion.div
        ref={templatesRef}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ 
          opacity: 1, 
          x: 0,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3
          }
        }}
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{
          scale: 1.005,
          transition: { duration: 0.6 }
        }}
        className="relative z-10"
      >
        <AllTemplates />
      </motion.div>

      {/* Enhanced CTA Section with sequenced animations */}
      <motion.div
        ref={ctaRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2
          }
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="bg-[#7f0008] py-16 text-center px-6 mt-24 relative overflow-hidden cursor-pointer"
        whileHover={hoverEffects.ctaSection}
      >
        {/* Animated background patterns */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.4
            }
          }}
          className="text-3xl md:text-4xl font-semibold mb-6 relative z-10"
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
            transition: { duration: 0.3 }
          }}
        >
          Ready to explore more?
        </motion.h2>

        <motion.button
          onClick={() => window.location.href = '/resource-center'}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.5
            }
          }}
          className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-md relative z-10 cursor-pointer overflow-hidden"
          whileHover={hoverEffects.ctaButton}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1 }
          }}
        >
          {/* Button shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          <span className="relative z-10">Go to Full Resource Center</span>
        </motion.button>

        {/* Floating particles effect */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ 
              opacity: [0.2, 0.8, 0.2],
              scale: 1,
              transition: {
                duration: 0.6,
                delay: 0.6 + i * 0.1
              }
            }}
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6 + i * 0.1
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced cinematic overlay with sequenced animation */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)
          `
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 3, 
          delay: 1,
          ease: "easeOut"
        }}
      />

      {/* Enhanced grain texture overlay */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-30 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3Ccircle cx='40' cy='20' r='1'/%3E%3Ccircle cx='15' cy='35' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ 
          duration: 2, 
          delay: 0.5,
          ease: "easeOut"
        }}
      />
    </motion.div>
  );
};

export default Landing1;