export const addItem = (data) => {
  return {
    type: "ADD_ITEM",
    payload: {
      id: new Date().getTime.toString(),
      data: data,
    },
  };
};

export const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    id,
  };
};

export const removeAll = () => {
  return {
    type: "REMOVE_ALL",
  };
};
