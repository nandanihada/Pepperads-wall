import React from 'react';
import { ArrowRight, Star, Users, TrendingUp, Award, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CommunityShowcases = () => {
  const styles = {
    body: {
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
      color: '#fff',
      lineHeight: 1.6,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    hero: {
      position: 'relative',
      height: '500px',
      marginBottom: '60px',
    },
    heroImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.3,
    },
    heroOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, #000, transparent, #000)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 20px',
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      maxWidth: '800px',
      margin: '0 auto',
      animation: 'fadeIn 2s ease-in-out',
    },
    accent: {
      color: '#E31B23',
    },
    showcaseGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      margin: '60px 0',
    },
    showcaseCard: {
      background: 'linear-gradient(145deg, rgba(40,0,0,0.7), rgba(20,0,0,0.6))',
      borderRadius: '20px',
      padding: '30px',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      border: '1px solid rgba(227, 27, 35, 0.2)',
      boxShadow: '0 8px 30px rgba(227, 27, 35, 0.2)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    cardCategory: {
      backgroundColor: 'rgba(227, 27, 35, 0.2)',
      color: '#E31B23',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: 'bold',
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '12px',
      marginBottom: '20px',
    },
    cardText: {
      color: '#bbb',
      marginBottom: '20px',
    },
    cardFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardStats: {
      display: 'flex',
      gap: '15px',
    },
    statItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      color: '#aaa',
      fontSize: '0.9rem',
    },
    readButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      color: '#E31B23',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'transform 0.2s',
    },
    featuredShowcase: {
      background: 'linear-gradient(145deg, rgba(60,0,0,0.8), rgba(30,0,0,0.7))',
      borderRadius: '20px',
      padding: '40px',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      border: '1px solid rgba(227, 27, 35, 0.3)',
      boxShadow: '0 12px 40px rgba(227, 27, 35, 0.4)',
      margin: '40px 0 60px 0',
    },
    featuredHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '30px',
    },
    featuredLabel: {
      color: '#E31B23',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    featuredGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
    },
    featuredContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    featuredTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    featuredText: {
      fontSize: '1.1rem',
      color: '#ccc',
      lineHeight: 1.7,
      marginBottom: '30px',
    },
    featuredResults: {
      display: 'flex',
      gap: '30px',
      marginBottom: '30px',
    },
    resultItem: {
      flex: 1,
    },
    resultNumber: {
      fontSize: '2.2rem',
      fontWeight: 'bold',
      color: '#E31B23',
      marginBottom: '5px',
    },
    resultLabel: {
      color: '#aaa',
      fontSize: '0.9rem',
    },
    featuredCta: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: '#E31B23',
      color: 'white',
      padding: '14px 30px',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    featuredImage: {
      width: '100%',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    },
    submitSection: {
      background: 'linear-gradient(145deg, rgba(30,30,30,0.8), rgba(20,20,20,0.7))',
      borderRadius: '20px',
      padding: '40px',
      textAlign: 'center',
      marginTop: '60px',
    },
    submitTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    submitText: {
      color: '#aaa',
      maxWidth: '800px',
      margin: '0 auto 30px',
      fontSize: '1.1rem',
    },
    filterContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '10px',
      margin: '40px 0',
    },
    filterButton: {
      padding: '10px 18px',
      backgroundColor: 'rgba(40, 40, 40, 0.8)',
      color: '#ccc',
      border: '1px solid rgba(227, 27, 35, 0.2)',
      borderRadius: '30px',
      fontSize: '0.9rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    filterActive: {
      backgroundColor: 'rgba(227, 27, 35, 0.2)',
      color: '#E31B23',
      border: '1px solid rgba(227, 27, 35, 0.5)',
    },
    scrollbarStyles: `
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 10px;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `
  };

  const showcases = [
    {
      id: 1,
      title: "MindfulMedia's Audience Surge",
      category: "Creator",
      image: "https://i.pinimg.com/736x/9c/cd/8c/9ccd8c875859f50f00155488f36fe2a5.jpg",
      description: "Creator | Grew wellness followers by 350% in 6 months and boosted monthly income.",
      stats: { views: "8.2K", likes: "729", comments: "83" }
    },
    {
      id: 2,
      title: "TechBurst's Scalable ROI",
      category: "Agency",
      image: "https://i.pinimg.com/1200x/a3/6e/6c/a36e6cd7366c25bba9ec3fa02ca2010f.jpg",
      description: "Agency | Drove higher client ROI with integrated PepperAds for SaaS campaigns.",
      stats: { views: "6.7K", likes: "493", comments: "61" }
    },
    {
      id: 3,
      title: "FitFusion's Engagement Strategy",
      category: "Brand",
      image: "https://i.pinimg.com/736x/8c/6c/ef/8c6cef6adb3d48d4671a571c9a57d0c4.jpg",
      description: "Brand | Doubled user retention with engaging ad workflows.",
      stats: { views: "7.4K", likes: "512", comments: "47" }
    },
    {
      id: 4,
      title: "StreamScape's Monetization",
      category: "Creator",
      image: "https://i.pinimg.com/736x/e4/11/fb/e411fb01a934ff69eb70cef582ede8a5.jpg",
      description: "Creator | A streamer’s setup that unlocked $12K in new revenue.",
      stats: { views: "12.3K", likes: "938", comments: "104" }
    },
    {
      id: 5,
      title: "EcoTrek's Community Building",
      category: "Brand",
      image: "https://i.pinimg.com/736x/01/8a/b1/018ab19a8241f340992470f7f20a3e05.jpg",
      description: "Brand | Built an engaged brand community and loyalty flow with PepperAds.",
      stats: { views: "5.6K", likes: "381", comments: "32" }
    },
    {
      id: 6,
      title: "MediaHub's Client Success",
      category: "Agency",
      image: "https://i.pinimg.com/736x/ca/24/d8/ca24d817ab32795ac12626eca239d797.jpg",
      description: "Agency | Delivered standout results in competitive verticals using campaign insights.",
      stats: { views: "4.9K", likes: "276", comments: "41" }
    }
  ];
  const navigate = useNavigate();


  return (
    <div style={styles.body}>
      <style>{styles.scrollbarStyles}</style>
      
      {/* Hero Section */}
      <div style={styles.hero}>
        <img src="/api/placeholder/1200/500" alt="Community Showcases" style={styles.heroImg} />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>
            Community <span style={styles.accent}>Showcases</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Real-world examples of how <span style={styles.accent}>creators, agencies, and marketers</span> are using PepperAds to grow their audience and revenue
          </p>
        </div>
      </div>
      
      <div style={styles.container}>
        {/* Featured Showcase */}
        <div style={styles.featuredShowcase}>
          <div style={styles.featuredHeader}>
            <span style={styles.featuredLabel}>
              <Award size={24} /> sample success story
            </span>
          </div>
          
          <div style={styles.featuredGrid}>
            <div style={styles.featuredContent}>
              <h2 style={styles.featuredTitle}>How StyleCode Scaled to 500K Subscribers</h2>
              <p style={styles.featuredText}>
                Fashion-tech creator Mia Chen scaled from 50K to 500K subscribers and 4x'd her monthly income—powered by smart PepperAds integration and a laser-focused strategy.
              </p>
              
              <div style={styles.featuredResults}>
                <div style={styles.resultItem}>
                  <div style={styles.resultNumber}>50K+</div>
                  <div style={styles.resultLabel}>New Subscribers</div>
                </div>
                <div style={styles.resultItem}>
                  <div style={styles.resultNumber}>3.6x</div>
                  <div style={styles.resultLabel}>Revenue Growth</div>
                </div>
                <div style={styles.resultItem}>
                  <div style={styles.resultNumber}>72%</div>
                  <div style={styles.resultLabel}>Engagement Rate</div>
                </div>
              </div>
              
              <button 
                onClick={() => navigate('/contactus')}
                style={styles.featuredCta}>
                Read Full Case Study <ArrowRight size={20} />
              </button>
            </div>
            
            <div>
              <img src="https://i.pinimg.com/736x/ed/82/e8/ed82e8dc472ee7df9ef16832547a083b.jpg" alt="Featured Showcase" style={styles.featuredImage} />
            </div>
          </div>
        </div>
        
        {/* Filter Buttons */}
        {/* <div style={styles.filterContainer}>
          <button style={{...styles.filterButton, ...styles.filterActive}}>All</button>
          <button style={styles.filterButton}>Creators</button>
          <button style={styles.filterButton}>Agencies</button>
          <button style={styles.filterButton}>Brands</button>
          <button style={styles.filterButton}>E-commerce</button>
          <button style={styles.filterButton}>Content Publishers</button>
        </div> */}
        
        {/* Showcase Grid */}
        <div style={styles.showcaseGrid}>
          {showcases.map(showcase => (
            <div style={styles.showcaseCard} key={showcase.id}>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>{showcase.title}</h3>
                <span style={styles.cardCategory}>{showcase.category}</span>
              </div>
              <img src={showcase.image} alt={showcase.title} style={styles.cardImage} />
              <p style={styles.cardText}>{showcase.description}</p>
              <div style={styles.cardFooter}>
                <div style={styles.cardStats}>
                  <span style={styles.statItem}>
                    <Users size={16} /> {showcase.stats.views}
                  </span>
                  <span style={styles.statItem}>
                    <Star size={16} /> {showcase.stats.likes}
                  </span>
                  <span style={styles.statItem}>
                    <TrendingUp size={16} /> {showcase.stats.comments}
                  </span>
                </div>
                <div style={styles.readButton}
                  onClick={() => navigate('/CaseStudies')}
                >
                  Read Case Study <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Submit Your Story Section */}
        <div style={styles.submitSection}>
          <h2 style={styles.submitTitle}>Share Your <span style={styles.accent}>Success Story</span></h2>
          <p style={styles.submitText}>
            Using PepperAds and seeing success? We’d love to feature you. Get spotlighted in front of our global creator and brand community.
          </p>
          <button 
            onClick={() => navigate('/login')}
            style={styles.featuredCta}>
            Submit Your Story <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityShowcases;
