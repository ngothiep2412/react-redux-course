const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENTBYVALUE = "incrementbyvalue";
const initializeValue = {
  count: 0,
};

export const increment = () => ({
  type: INCREMENT,
});

export const incrementByValue = (value) => ({
  type: INCREMINCREMENTBYVALUEENT,
  payload: value,
});

export const decrement = () => ({
  type: DECREMENT,
});

const couterReducer = (state = initializeValue, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
export default couterReducer;
