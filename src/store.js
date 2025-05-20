export const initialStore = () => ({
  people: [],
  planets: [],
  species: [],
  starships: [],
  config: {
    message: null,
    developer: "edslogia"
  }
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_data":
      return {
        ...store,
        [action.endpoint]: [...store[action.endpoint], action.payload],
      };
    default:
      throw Error("Unknown action.");
  }
}
