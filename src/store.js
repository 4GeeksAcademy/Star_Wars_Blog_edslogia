export const initialStore = () => {
  return {
    message: null,
    peopleID: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      },
    ],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case "set_store":
      return action.payload;

    default:
      throw Error("Unknown action.");
  }
}
