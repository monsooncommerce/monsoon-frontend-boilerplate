const main = (state = {loading: true}, action) => {
  switch (action.type) {
    case "USER_FETCH_SUCCEEDED":
      const { user } = action;
      console.log(user);
      return {...state, user, loading: false};
    default:
      return state;
  }
};

export default main;
