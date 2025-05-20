import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ScrollContainer } from "../components/ScrollContainer.jsx";
import {
  DownloadGroupItem,
  DownloadItem,
  fetchWithCache,
} from "../services/SwapiTech.jsx";
import { SingleCard } from "../components/SingleCard.jsx";
import { useState, useEffect } from "react";
import { AppConfig } from "../config/config.js";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [loading, setLoading] = useState();

  useEffect(() => {

    const downloadData = async () => {
      for (const endpoint of AppConfig.api.endpoints) {
        console.log("descargando endpoint: ", endpoint)
        for (const id of AppConfig.values.items) {
          const res = await fetchWithCache(endpoint, id);
          if (res) {
            dispatch({ type: "add_data", endpoint, payload: res.result });
          }
        }
      }
      setLoading(false);
    };

    if (loading !== false) {
      downloadData();
    }
  }, []);
  
  if (loading) return <div className="text-light p-5">Loading...</div>;

  return (
    <div className="bg-dark">
      {AppConfig.api.endpoints.map((endpoint) => (
        <ScrollContainer key={endpoint} title={endpoint.toUpperCase()}>
          {store[endpoint].map((item, i) => (
            <SingleCard
              key={`${endpoint}_${i}`}
              name={item.properties.name}
              item1={Object.keys(item.properties)[1] + ": " + Object.values(item.properties)[1]}
              item2={Object.keys(item.properties)[2] + ": " + Object.values(item.properties)[2]}
              item3={Object.keys(item.properties)[3] + ": " + Object.values(item.properties)[3]}
              imglink={"https://lumiere-a.akamaihd.net/v1/images/mon-mothma-main_effb3e9c.jpeg?region=168%2C0%2C944%2C531"}
            />
          ))}
        </ScrollContainer>
      ))}
    </div>
  );
};
