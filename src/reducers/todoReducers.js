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

    case "DELETE_ITEM":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      // it will return unmatched id's

      return {
        ...state, //previous state
        list: newList,
      };

    default:
      return state;
  }
};

export default todoReducers;
