const INCREMENT = "increment";
const DECREMENT = "decrement";

const initializeValue = {
  count: 0,
};

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
