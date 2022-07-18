import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const rocketList = Object.keys(rockets);
  const rocketReserved = [];

  if (rocketList.length) {
    rocketList.forEach((item) => {
      if (rockets[item].reserved) {
        rocketReserved.push({
          id: rocketReserved.length + 1,
          title: rockets[item].title,
        });
      }
    });
  }

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
  ];

  return (
    <section>
      <div className="container profile-grid">
        <div>
          <h2><Link to="/missions">My Missions</Link></h2>
          <ul className="list-group">
            {
              missions.map((item) => (
                <li key={item.id}>
                  {item.title}
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h2><Link to="/rockets">My Rockets</Link></h2>
          <ul className="list-group">
            {
              rocketReserved.length ? rocketReserved.map((item) => (
                <li key={item.id}>{item.title}</li>
              )) : <li>No rockets selected</li>
            }
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfileScreen;
