import { slice as bynarySlice } from './bynarySearch'

const bynarySearchReducer = bynarySlice.reducer
const bynarySearchActions = {
  ...bynarySlice.actions,
}

export { bynarySearchReducer, bynarySearchActions }
