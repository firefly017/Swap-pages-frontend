const initialState = {
  //books.all => [];
  all: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_BOOKS":
      return { ...state, all: [...action.payload] };
    default:
      return state;
  }
};
