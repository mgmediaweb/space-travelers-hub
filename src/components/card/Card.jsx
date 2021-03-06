import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateRocket } from '../../redux/rockets/rockets';
import './Card.scss';

const Card = (props) => {
  const dispatch = useDispatch();

  const {
    description,
    id,
    image,
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
          { description }
        </p>
        {
          reserved ? (
            <button
              type="button"
              className="btn-outline-secondary"
              onClick={() => dispatch(updateRocket(id))}
            >
              Cancel Reservation
            </button>
          ) : (
            <button
              type="button"
              className="btn"
              onClick={() => dispatch(updateRocket(id))}
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
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  reserved: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Card.defaultProps = {
  description: 'No information available',
  image: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
  reserved: false,
};

export default Card;
