import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './MarketLeaderboard.css';

gsap.registerPlugin(ScrollTrigger);

const leaderboardData = [
  { rank: 1, name: "Sarah Desmond", handle: "@sarah_des", price: "124.50 TK", change: "+12.5%", isPositive: true },
  { rank: 2, name: "Mike Builds", handle: "@mike_builds", price: "98.20 TK", change: "+8.2%", isPositive: true },
  { rank: 3, name: "Jessica Create", handle: "@jess_create", price: "88.75 TK", change: "-2.1%", isPositive: false },
  { rank: 4, name: "Tom Coder", handle: "@tom_code", price: "76.40 TK", change: "+5.4%", isPositive: true },
  { rank: 5, name: "Emma Art", handle: "@emma_art", price: "67.10 TK", change: "+15.0%", isPositive: true },
];

const MarketLeaderboard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate rows entering
    gsap.from('.leaderboard-row.content', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

  }, { scope: containerRef });

  return (
    <section className="market-leaderboard" ref={containerRef}>
      <div className="leaderboard-header">
        <h2>Market Movers</h2>
        <p>Top trending creators in the last 24 hours.</p>
      </div>

      <div className="leaderboard-container">
        {/* Header Row */}
        <div className="leaderboard-row lb-head">
          <span>#</span>
          <span>Creator</span>
          <span>Price</span>
          <span>24h Change</span>
        </div>

        {/* Data Rows */}
        {leaderboardData.map((user, index) => (
          <div key={index} className="leaderboard-row content">
            <span className="lb-rank">{user.rank}</span>
            <div className="lb-user">
              <div className="lb-avatar">{user.name.charAt(0)}</div>
              <div className="lb-info">
                <span className="lb-name">{user.name}</span>
                <span className="lb-handle">{user.handle}</span>
              </div>
            </div>
            <span className="lb-price">{user.price}</span>
            <div className={`lb-change ${user.isPositive ? 'change-positive' : 'change-negative'}`}>
              {user.change}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketLeaderboard;
