import React, { useState } from 'react'
import { Divider, Collapse } from 'antd'
import styles from './BynarySearch.module.css'
import { ChoosePoints } from './ChoosePoints'
import { PlayerCard } from './PlayerCard'
import { useSelector } from 'react-redux'
import { getLeaderboard } from './selectors'
import { getLegaueIdx, getPlace } from './utils'
import {
  errorMessage,
  successMessage,
} from '../../../utils/messsage-utils'
const { Panel } = Collapse

export const BynarySearch = React.memo(() => {
  const [name, setName] = useState<string>('')
  const [league, setLeague] = useState<number>(0)
  const [points, setPoints] = useState<number>(0)
  const [place, setPlace] = useState<number>(0)
  const leaderboard = useSelector(getLeaderboard)

  const parentHandleChange = (points: number) => {
    let league
    const leagueIdx = getLegaueIdx(leaderboard, points)
    if (typeof leagueIdx === 'number') {
      league = leaderboard[leagueIdx]
    } else {
      errorMessage('no league with that many points')
      return
    }
    let place
    if (league) {
      place = getPlace(league, points)
      if (!place) {
        errorMessage(
          `league number ${
            leagueIdx + 1
          }, there is no player with that many points`
        )
        return
      }
    } else return
    successMessage(
      `league ${leagueIdx + 1}, place ${place.place}, player ${
        league[place.idx].login
      }`
    )
    setName(league[place.idx].login)
    setLeague(leagueIdx + 1)
    setPlace(place.place)
    setPoints(league[place.idx].leaguePoints)
  }

  return (
    <Collapse>
      <Panel header="Bynary Search" key="1">
        <h2>Bynary Search</h2>
        <p>
          I have a sorted array of leader tables so I can apply a binary
          search to reduce the search iterations
        </p>
        <p>
          In the problem I need to find a league and a place in the league
          by the number of points
        </p>
        <div className={styles.Content}>
          <ChoosePoints handleChange={parentHandleChange} />
          {name && <PlayerCard player={{ name, points, league, place }} />}
        </div>

        <Divider />
      </Panel>
    </Collapse>
  )
})
