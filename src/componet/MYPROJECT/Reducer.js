const arr = []

export const myReducer = (state = arr, action) => {
    if (action.type === "ADD") {
        return [
            ...state,
            {
                ...action.payload,
                quantity: 1
            }
        ]
    }
    return state
}
