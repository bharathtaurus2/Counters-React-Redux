export const CounterReducer = (counters = [], action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      const counter = { id: action.payload.id, value: action.payload.value };
      return [...counters, counter];

    case "REMOVE_COUNTER":
      const filtered = counters.filter(
        counter => counter.id !== action.payload
      );
      return filtered;

    case "ADD":
      const addList = counters.map(counter => {
        if (counter.id === action.payload.id) {
          return {
            id: counter.id,
            value: counter.value + 1
          };
        }
        return counter;
      });
      return addList;

    case "SUB":
      const subList = counters.map(counter => {
        if (counter.id === action.payload.id) {
          return {
            id: counter.id,
            value: counter.value - 1
          };
        }
        return counter;
      });
      return subList;
    default:
      return counters;
  }
};

export const selectCounterReducer = (selected = null, action) => {
  if (action.type === "SELECT") {
    return { id: action.payload };
  }
  return selected;
};
