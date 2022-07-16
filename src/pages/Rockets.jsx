import React from 'react';
import Card from '../components/card/Card';

const RocketsScreen = () => {
  const rockets = [
    {
      id: 'a1',
      image: 'https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg',
      title: 'Falcon 1',
      reserved: false,
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet fringilla nisi, eu commodo augue luctus in. Vestibulum bibendum est a nibh auctor, non posuere risus vulputate. Mauris tincidunt odio iaculis lorem elementum, eget dictum nibh malesuada.',
    },
    {
      id: 'b2',
      image: 'https://live.staticflickr.com/65535/48954138922_9c42173f08_b.jpg',
      title: 'Falcon Heavy',
      reserved: true,
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet fringilla nisi, eu commodo augue luctus in. Vestibulum bibendum est a nibh auctor, non posuere risus vulputate. Mauris tincidunt odio iaculis lorem elementum, eget dictum nibh malesuada.',
    },
  ];

  return (
    <section>
      <div className="container">
        {
          rockets.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              information={item.information}
              reserved={item.reserved}
              title={item.title}
            />
          ))
        }
      </div>
    </section>
  );
};

export default RocketsScreen;
