import { CiHeart } from "react-icons/ci";
import "../styles/character-card.css"

export const PlanetCard = () => (
  <div className="card">
    <img
      src="https://lumiere-a.akamaihd.net/v1/images/lola-sayu_e41867d8.jpeg?region=69%2C0%2C1422%2C800"
      className="card-img-top"
    ></img>
    <div className="card-body">
      <h5 className="card-title">Planet name</h5>
    </div>
    <ul className="list-group list-group-flush text-start">
      <li className="list-group-item">Population: 177</li>
      <li className="list-group-item">Climate: Arid</li>
      <li className="list-group-item">Gravity: 1G</li>
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
