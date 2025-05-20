import { CiHeart } from "react-icons/ci";
import "../styles/single-card.css"
import {Link} from "react-router-dom"

export const SingleCard = ({name, item1, item2, item3, imglink, linkTo}) => {

  const handleFavorites = async () => {
    try {
    } catch (error) {
      console.error("Error editando contacto: ", error)
    }
  };
  
  return(
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
      <Link to={linkTo} type="button" className="btn btn-outline-info" >
        Learn more!
      </Link>
      <button type="button" className="btn btn-outline-danger" onClick={handleFavorites}>
        <CiHeart className="icon-heart"/>
      </button>
    </div>
  </div>
)};
