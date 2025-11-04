export const myAction = (data) => {
    return {
        type: "ADD",
        data
    }
}

export const deleteAction = (data) => {
    return {
        type: "DELETE",
        data
    }
}

export const editAction = (i, newValue) => {
    return {
        type: "EDIT",
        data: { i, newValue }
    }
}
