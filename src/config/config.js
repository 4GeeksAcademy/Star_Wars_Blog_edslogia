// src/config/config.js

export const AppConfig = {

  api: {
    baseUrl: "https://swapi.tech/api",
    endpoints: ["people", "planets", "species" ],
  },

   fieldsToShow: {
    people: [
      { key: "height", label: "Height" },
      { key: "eye_color", label: "Eye Color" },
      { key: "gender", label: "Gender" },
    ],
    planets: [
      { key: "population", label: "Population" },
      { key: "climate", label: "Climate" },
      { key: "gravity", label: "Gravity" },
    ],
    species: [
      { key: "classification", label: "Classification" },
      { key: "language", label: "Language" },
      { key: "average_lifespan", label: "Lifespan" },
    ],
    starships: [
      { key: "model", label: "Model" },
      { key: "manufacturer", label: "Manufacturer" },
      { key: "starship_class", label: "Class" },
    ],
  },

  images: {
    people: [
      "https://example.com/people1.jpg",
      "https://example.com/people2.jpg",
      // ...
    ],
    planets: [
      "https://example.com/planet1.jpg",
      "https://example.com/planet2.jpg",
    ],
    species: [],
    starships: [],
  },

  values: {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
};
