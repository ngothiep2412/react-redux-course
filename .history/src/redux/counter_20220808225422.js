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

const  couterReducer = (state = initializeValue, action) {
    switch (action.type) {
        case value:
            
            break;
    
        default:
            break;
    }
}