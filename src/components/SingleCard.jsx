import { CiHeart } from "react-icons/ci";
import "../styles/character-card.css"

export const SingleCard = ({name, item1, item2, item3, imglink}) => (
  <div className="card">
    <img
      src={imglink}
      className="card-img-top"
    ></img>
    <div className="card-body">
      <h5 className="card-title m-0">{name}</h5>
    </div>
    <ul className="list-group list-group-flush text-start">
      <li className="list-group-item">{item1}</li>
      <li className="list-group-item">{item2}</li>
      <li className="list-group-item">{item3}</li>
    </ul>
    <div className="card-body d-flex justify-content-between align-items-center">
      <button type="button" className="btn btn-outline-info">
        Learn more!
      </button>
      <button type="button" className="btn btn-outline-danger">
        <CiHeart className="icon-heart"/>
      </button>
    </div>
  </div>
);
