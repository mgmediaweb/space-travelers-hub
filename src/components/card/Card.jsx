import PropTypes from 'prop-types';
import './Card.scss';

const Card = (props) => {
  const {
    id,
    image,
    information,
    reserved,
    title,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>
          { reserved && <span className="badge-active">Reserved</span> }
          { information }
        </p>
        {
          reserved ? (
            <button
              type="button"
              className="btn-outline-secondary"
              onClick={() => console.log(id)}
            >
              Cancel Reservation
            </button>
          ) : (
            <button
              type="button"
              className="btn"
              onClick={() => console.log('Reserve Rocket')}
            >
              Reserve Rocket
            </button>
          )
        }
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Card.defaultProps = {
  reserved: false,
};

export default Card;
