import { CiHeart } from "react-icons/ci";
import "../styles/character-card.css"

export const SingleCard = ({name, item1, item2, item3, imglink}) => (
  <div className="card">
    <img
      src={imglink}
      className="card-img-top"
    ></img>
    <div className="card-body py-2">
      <h5 className="card-title m-0 text-center">{name}</h5>
    </div>
    <ul className="list-group list-group-flush text-start p">
      <li className="list-group-item py-1">{item1}</li>
      <li className="list-group-item py-1">{item2}</li>
      <li className="list-group-item py-1">{item3}</li>
    </ul>
    <div className="card-body d-flex justify-content-between align-items-center p-2">
      <button type="button" className="btn btn-outline-info">
        Learn more!
      </button>
      <button type="button" className="btn btn-outline-danger">
        <CiHeart className="icon-heart"/>
      </button>
    </div>
  </div>
);
