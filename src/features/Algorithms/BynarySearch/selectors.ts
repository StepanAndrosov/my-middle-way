import { AppStoreType } from '../../../store/store'

export const getLeaderboard = (state: AppStoreType) =>
  state.bynarySearchStore.leaderboard

export const lastPlayerPoints = (state: AppStoreType) =>
  state.bynarySearchStore.leaderboard[0][0].leaguePoints

export const firstPlayerPoints = (state: AppStoreType) => {
  const { leaderboard } = state.bynarySearchStore
  const last = leaderboard.length - 1
  return leaderboard[last][leaderboard[last].length - 1].leaguePoints
}
