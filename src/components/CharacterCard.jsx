import { CiHeart } from "react-icons/ci";
import "../styles/character-card.css"

export const CharacterCard = () => (
  <div className="card">
    <img
      src="https://lumiere-a.akamaihd.net/v1/images/cassian-andor-main_69925fe9.jpeg?region=359%2C0%2C1414%2C798"
      className="card-img-top"
    ></img>
    <div className="card-body">
      <h5 className="card-title">Luke Skywalker</h5>
    </div>
    <ul className="list-group list-group-flush text-start">
      <li className="list-group-item">Heigth: 177</li>
      <li className="list-group-item">Gender: Male</li>
      <li className="list-group-item">Eye clor: Brown</li>
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
