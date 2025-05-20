// src/config/config.js

export const AppConfig = {

  api: {
    baseUrl: "https://swapi.tech/api",
    endpoints: ["people", "planets", "species"],
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
