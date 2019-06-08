export const addCounter = counterId => {
  var counter = {
    id: counterId,
    value: 0
  };
  return {
    type: "ADD_COUNTER",
    payload: counter
  };
};

export const selectCounter = id => {
  return {
    type: "SELECT",
    payload: id
  };
};

export const removeCounter = id => {
  return {
    type: "REMOVE_COUNTER",
    payload: id
  };
};

export const add = (id, value) => {
  return {
    type: "ADD",
    payload: { id, value }
  };
};

export const subtract = (id, value) => {
  return {
    type: "SUB",
    payload: { id, value }
  };
};
