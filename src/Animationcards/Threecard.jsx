import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div data-text="Smart Targeting" style={{ '--r': -15 }} className="glass">
          <img src="https://i.postimg.cc/28qCfmXy/red-dart-arrow-hitting-target-center-dartboard.png" alt="Smart Targeting" />
          <p>
            Reach the right audience at the right time with AI-powered targeting and intent-based optimization.
          </p>
        </div>

        <div data-text="Real-Time Tracking" style={{ '--r': 5 }} className="glass">
          <img src="https://i.postimg.cc/PqYwQJp8/1287161-164732-OVURV2-709-removebg-preview.png" alt="Real-Time Tracking" />
          <p>
            Monitor every click, conversion, and campaign metric with our lightning-fast analytics dashboard.
          </p>
        </div>

        <div data-text="For Advertisers" style={{ '--r': 25 }} className="glass">
          <img src="https://i.postimg.cc/JncxzPR0/63060941-9411475-removebg-preview.png" alt="For Advertisers" />
          <p>
            Built for advertisers: From awareness to action, manage full-funnel campaigns effortlessly.
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    padding: 10px;
  }

  .glass {
    position: relative;
    width: 220px;
    height: 280px;
    background: linear-gradient(#ffffff22, transparent);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: 0.5s ease;
    border-radius: 12px;
    margin: 0 -45px;
    backdrop-filter: blur(10px);
    transform: rotate(calc(var(--r) * 1deg));
    overflow: hidden;
    padding: 15px 10px 50px;
    color: white;
  }

  .container:hover .glass {
    transform: rotate(0deg);
    margin: 0 10px;
  }

  .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 45px;
    background: rgba(255, 255, 255, 0.07);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.1rem;
    color: #ffe;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  .glass img {
    width: 100px;
    height: 100px;
    margin-bottom: 12px;
    filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.2));
  }

  .glass p {
    font-size: 14px;
    line-height: 1.5;
    color: #fefefe;
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.05);
    padding: 0 5px;
  }

  /* Mobile: stack cards vertically */
  @media (max-width: 640px) {
    .container {
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }

    .glass {
      width: 85vw;
      max-width: 280px;
      height: auto;
      min-height: 220px;
      margin: 0;
      transform: rotate(0deg);
      padding: 20px 15px 55px;
    }

    .container:hover .glass {
      margin: 0;
    }

    .glass img {
      width: 70px;
      height: 70px;
    }
  }

  /* Tablet: reduce overlap */
  @media (min-width: 641px) and (max-width: 900px) {
    .glass {
      width: 180px;
      height: 240px;
      margin: 0 -30px;
    }

    .glass img {
      width: 80px;
      height: 80px;
    }

    .glass p {
      font-size: 12px;
    }
  }
`;

export default Card;
