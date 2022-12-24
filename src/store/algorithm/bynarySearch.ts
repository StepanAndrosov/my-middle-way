import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Leaderboard } from '../../features/Algorithms/types'

import { leaderboard } from '../../data'

const initialState = {
  leaderboard,
}

export const slice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {},
})
