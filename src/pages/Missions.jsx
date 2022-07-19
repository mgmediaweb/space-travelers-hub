import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMission } from '../redux/missions/missions';

const MissionsScreen = () => {
  const { missions } = useSelector((state) => state.missions);
  const missionList = Object.keys(missions);
  const dispatch = useDispatch();
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
                missionList.map((mission) => (
                  <tr key={mission}>
                    <th className="table-width1 text-start">{ missions[mission].title}</th>
                    <td>{missions[mission].description}</td>
                    <td className="table-width1 text-center">
                      {
                         missions[mission].member ? <span className="badge-active">Active Member</span> : <span className="badge-secondary">Not a Member</span>
                      }
                    </td>
                    <td className="table-width2 text-center">
                      {
                        missions[mission].member ? (
                          <button
                            type="button"
                            className="btn-outline-danger"
                            onClick={() => dispatch(updateMission(mission))}
                          >
                            Leave Mission
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn-outline"
                            onClick={() => dispatch(updateMission(mission))}
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
