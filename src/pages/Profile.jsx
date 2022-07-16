import React from 'react';
import { Link } from 'react-router-dom';

const ProfileScreen = () => {
  const missions = [
    {
      id: '1',
      title: 'Thaicon',
      url: '/missions?id=1',
    },
    {
      id: '2',
      title: 'Iridium NEXT',
      url: '/missions?id=2',
    },
    {
      id: '3',
      title: 'Thaicon',
      url: '/missions?id=3',
    },
    {
      id: '4',
      title: 'Iridium NEXT',
      url: '/missions?id=4',
    },
  ];

  const rockets = [
    {
      id: '101',
      title: 'Thaicon',
      url: '/rockets?id=1',
    },
    {
      id: '102',
      title: 'Iridium NEXT',
      url: '/rockets?id=2',
    },
    {
      id: '103',
      title: 'Thaicon',
      url: '/rockets?id=3',
    },
  ];

  return (
    <section>
      <div className="container profile-grid">
        <div>
          <h2>My Missions</h2>
          <ul className="list-group">
            {
              missions.map((item) => (
                <li key={item.id}>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h2>My Rockets</h2>
          <ul className="list-group">
            {
              rockets.map((item) => (
                <li key={item.id}>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfileScreen;
