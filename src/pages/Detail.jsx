import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchWithCache } from "../services/SwapiTech.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { AppConfig } from "../config/config.js";

export const Detail = () => {
  const { endpoint, id } = useParams();
  const { store, dispatch } = useGlobalReducer();
  const item = store[endpoint]?.find((elelement) => elelement.uid === id);

  return (
    <div className="card">
      <img src="..." className="card-img-top">
      </img>
      <div className="card-body">
        <h5 className="card-title">{item.properties.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
      </div>
    </div>
  );
};
