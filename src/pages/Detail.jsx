import { useParams } from "react-router-dom";
import "../styles/detail.css"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { AppConfig } from "../config/config.js";

export const Detail = () => {
  const { endpoint, id } = useParams();
  const { store, dispatch } = useGlobalReducer();
  const item = store[endpoint]?.find((elelement) => elelement.uid === id);
  const images = AppConfig.images[endpoint];
  const fields = AppConfig.fieldsToShowInDetails[endpoint];

  return (
    <div className="w-75 container bg-dark p-5 ">
      <div className="row">
        <div className="col-6">
          <img src={`${images[id - 1]}`} className="card-img-top"></img>
        </div>
        <div className="col-6 border-start border-custom">
          <h3 className="text-light">{item.properties.name}</h3>
          <p className="text-light">{item.description}</p>
        </div>
      </div>
      <div className="row pt-2 mt-4 border-top border-custom">
        {fields.slice(0, 7).map((field) => (
          <div className="col border-start border-custom" key={field.key}>
            <h5 className="text-light">{field.label}</h5>
            <p className="text-light">{item.properties[field.key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
