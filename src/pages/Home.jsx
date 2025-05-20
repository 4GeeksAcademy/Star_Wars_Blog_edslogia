import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ScrollContainer } from "../components/ScrollContainer.jsx";
import { fetchWithCache } from "../services/SwapiTech.jsx";
import { SingleCard } from "../components/SingleCard.jsx";
import { useState, useEffect } from "react";
import { AppConfig } from "../config/config.js";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const downloadData = async () => {
      for (const endpoint of AppConfig.api.endpoints) {
        for (const id of AppConfig.values.items) {
          const res = await fetchWithCache(endpoint, id);
          if (res) {
            dispatch({ type: "add_data", endpoint, payload: res });
          }
        }
      }
      setLoading(false);
    };

    if (loading !== false) {
      downloadData();
    }
  }, []);

  return (
    <div className="bg-dark">
      {AppConfig.api.endpoints.map((endpoint) => (
        <ScrollContainer key={endpoint} title={endpoint.toUpperCase()}>
          {store[endpoint].map((item, i) => {
            const fields = AppConfig.fieldsToShow[endpoint];

            return (
              <SingleCard
                key={`${endpoint}_${i}`}
                name={item.properties.name}
                item1={`${fields[0].label}: ${item.properties[fields[0].key]}`}
                item2={`${fields[1].label}: ${item.properties[fields[1].key]}`}
                item3={`${fields[2].label}: ${item.properties[fields[2].key]}`}
                imglink={
                  "https://lumiere-a.akamaihd.net/v1/images/mon-mothma-main_effb3e9c.jpeg?region=168%2C0%2C944%2C531"
                }
              />
            );
          })}
        </ScrollContainer>
      ))}
    </div>
  );
};
