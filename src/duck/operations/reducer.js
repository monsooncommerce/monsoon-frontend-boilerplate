const main = (state = {}, action) => {
  switch (action.type) {
    case "GET_REPORT":
      const { data } = action.payload;
      return {...state, data};
    default:
      return state;
  }
};

export default main;
