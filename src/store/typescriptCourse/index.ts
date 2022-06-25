import { slice } from "./tsCourse";

const tsReducer = slice.reducer

const tsActions = {
    ...slice.actions
}

export {
    tsReducer,
    tsActions
}