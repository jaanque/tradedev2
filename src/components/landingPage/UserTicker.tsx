import React from 'react';
import './UserTicker.css';

const users = [
  { name: '@alex_dev', value: '+12.5%', price: '124 TK' },
  { name: '@sarah_des', value: '+8.2%', price: '98 TK' },
  { name: '@mike_builds', value: '-2.1%', price: '45 TK' },
  { name: '@jess_create', value: '+15.0%', price: '210 TK' },
  { name: '@tom_code', value: '+5.4%', price: '88 TK' },
  { name: '@emma_art', value: '-0.5%', price: '67 TK' },
  { name: '@david_pm', value: '+3.2%', price: '105 TK' },
  { name: '@lisa_ux', value: '+9.8%', price: '150 TK' },
];

const UserTicker: React.FC = () => {
  return (
    <div className="user-ticker-container">
      <div className="user-ticker-wrapper">
        <div className="user-ticker-track">
          {[...users, ...users, ...users, ...users].map((user, index) => (
            <div key={index} className="ticker-item">
              <span className="user-name">{user.name}</span>
              <span className={`user-value ${user.value.startsWith('+') ? 'positive' : 'negative'}`}>
                {user.value}
              </span>
              <span className="user-price">{user.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTicker;
