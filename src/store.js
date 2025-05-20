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
      const exists = store[action.endpoint].some(
        (item) => item.uid === action.payload.uid
      );
      if (exists) return store;

      return {
        ...store,
        [action.endpoint]: [...store[action.endpoint], action.payload],
      };
    default:
      throw Error("Unknown action.");
  }
}
