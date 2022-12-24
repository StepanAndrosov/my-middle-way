import type { Leaderboard } from '../types'

export const getLegaueIdx = (leaderboard: Leaderboard, points: number) => {
  let left = 0
  let right = leaderboard.length - 1
  while (left <= right) {
    const middleIndex = Math.floor((right + left) / 2)
    const middle = leaderboard[middleIndex]
    const firstPlayerPoints = middle[middle.length - 1].leaguePoints
    const lastPlayerPoints = middle[0].leaguePoints

    if (lastPlayerPoints <= points && points <= firstPlayerPoints) {
      return middleIndex
    }
    if (lastPlayerPoints > points) {
      right = middleIndex - 1
    } else if (points > firstPlayerPoints) {
      left = middleIndex + 1
    }
  }
  return null
}

export const getPlace = (league: Leaderboard[number], points: number) => {
  let left = 0
  let right = league.length - 1

  const firstPlace = league[right].leaguePoints
  const lastPlace = league[0].leaguePoints

  if (lastPlace > points || firstPlace < points) return null

  while (left <= right) {
    const middleIndex = Math.floor((right + left) / 2)
    const middle = league[middleIndex].leaguePoints

    if (middle === points) {
      return { place: league.length - middleIndex, idx: middleIndex }
    }
    if (middle > points) {
      right = middleIndex - 1
    } else if (points > middle) {
      left = middleIndex + 1
    }
  }
  return null
}
