import '../css/main.css';
import Listings from '../../stays.json';

function Listing() {
  return (
    <div className="Listing">
      <div className="photo">
        <img
          src={Listings[0].photo}
          style={{ width: '100%', height: '100%', borderRadius: '24px' }}
        />
      </div>
    </div>
  );
}

export default Listing;
