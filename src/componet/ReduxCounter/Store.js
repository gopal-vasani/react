import { createStore } from "redux";

// Reducer
function counter(state = { count: 0 }, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
}

const store = createStore(counter);

export default store;
