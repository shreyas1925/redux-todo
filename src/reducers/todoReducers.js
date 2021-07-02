const initialState = {
  list: [],
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { id, data } = action.payload;

      return {
        ...state, //previous state
        list: [
          ...state.list, //once again checking

          {
            id: id, //returning
            data: data,
          },
        ],
      };

    default:
      return state;
  }
};

export default todoReducers;
