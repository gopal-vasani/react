const arr = []
export const myReducer = (state = arr, action) => {


    if (action.type == "ADD") {
        state = [
            ...state, action.data
        ]
    }
    else if (action.type == "DELETE") {
        const update = [...state]
        update.splice(action.data, 1)
        return update
    }
    else if (action.type == "EDIT") {
        const { i, newValue } = action.data;
        const newArr = [...state];
        newArr[i] = newValue;
        return newArr;
    }


    return state
}