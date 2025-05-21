import { CiHeart } from "react-icons/ci";
import "../styles/single-card.css";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const SingleCard = ({
  name,
  item1,
  item2,
  item3,
  imglink,
  linkTo,
  uid,
  endpoint,
}) => {
  const { store, dispatch } = useGlobalReducer();

  const handleFavorites = () => {    
    dispatch({
      type: "add_to_favorites",
      payload: { name, uid, endpoint },
    });
  };

  return (
    <div className="card">
      <img src={imglink} className="card-img-top"></img>
      <div className="card-body py-2">
        <h5 className="card-title m-0 text-center">{name}</h5>
      </div>
      <ul className="list-group list-group-flush text-start">
        <li className="list-group-item py-1">{item1}</li>
        <li className="list-group-item py-1">{item2}</li>
        <li className="list-group-item py-1">{item3}</li>
      </ul>
      <div className="card-body d-flex justify-content-between align-items-center p-2">
        <Link to={linkTo} type="button" className="btn btn-outline-info">
          Learn more!
        </Link>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleFavorites}
        >
          <CiHeart className="icon-heart" />
        </button>
      </div>
    </div>
  );
};
