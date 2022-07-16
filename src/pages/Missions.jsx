import React from 'react';

const MissionsScreen = () => {
  const missions = [
    {
      id: 'a1',
      title: 'Thaicon',
      member: false,
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet fringilla nisi, eu commodo augue luctus in. Vestibulum bibendum est a nibh auctor, non posuere risus vulputate. Mauris tincidunt odio iaculis lorem elementum, eget dictum nibh malesuada.',
    },
    {
      id: 'a2',
      title: 'Iridium NEXT',
      member: true,
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet fringilla nisi, eu commodo augue luctus in. Vestibulum bibendum est a nibh auctor, non posuere risus vulputate. Mauris tincidunt odio iaculis lorem elementum, eget dictum nibh malesuada.',
    },
    {
      id: 'a3',
      title: 'Thaicon',
      member: false,
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet fringilla nisi, eu commodo augue luctus in. Vestibulum bibendum est a nibh auctor, non posuere risus vulputate. Mauris tincidunt odio iaculis lorem elementum, eget dictum nibh malesuada.',
    },
    {
      id: 'a4',
      title: 'Iridium NEXT',
      member: false,
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet fringilla nisi, eu commodo augue luctus in. Vestibulum bibendum est a nibh auctor, non posuere risus vulputate. Mauris tincidunt odio iaculis lorem elementum, eget dictum nibh malesuada.',
    },
    {
      id: 'a5',
      title: 'Thaicon',
      member: false,
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet fringilla nisi, eu commodo augue luctus in. Vestibulum bibendum est a nibh auctor, non posuere risus vulputate. Mauris tincidunt odio iaculis lorem elementum, eget dictum nibh malesuada.',
    },
    {
      id: 'a6',
      title: 'Iridium NEXT',
      member: true,
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet fringilla nisi, eu commodo augue luctus in. Vestibulum bibendum est a nibh auctor, non posuere risus vulputate. Mauris tincidunt odio iaculis lorem elementum, eget dictum nibh malesuada.',
    },
    {
      id: 'a7',
      title: 'Thaicon',
      member: false,
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet fringilla nisi, eu commodo augue luctus in. Vestibulum bibendum est a nibh auctor, non posuere risus vulputate. Mauris tincidunt odio iaculis lorem elementum, eget dictum nibh malesuada.',
    },
    {
      id: 'a8',
      title: 'Iridium NEXT',
      member: false,
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet fringilla nisi, eu commodo augue luctus in. Vestibulum bibendum est a nibh auctor, non posuere risus vulputate. Mauris tincidunt odio iaculis lorem elementum, eget dictum nibh malesuada.',
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className="table-width1">Mission</th>
                <th>Desciption</th>
                <th className="table-width1">Status</th>
                <th className="table-width2">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {
                missions.map((mission) => (
                  <tr key={mission.id}>
                    <th className="table-width1 text-start">{mission.title}</th>
                    <td>{mission.information}</td>
                    <td className="table-width1 text-center">
                      {
                        mission.member ? <span className="badge-active">Active Member</span> : <span className="badge-secondary">Not a Member</span>
                      }
                    </td>
                    <td className="table-width2 text-center">
                      {
                        mission.member ? (
                          <button
                            type="button"
                            className="btn-outline-danger"
                            onClick={() => console.log('Outline Button')}
                          >
                            Leave Mission
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn-outline"
                            onClick={() => console.log('Outline Button')}
                          >
                            Join Mission
                          </button>
                        )
                      }
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MissionsScreen;
