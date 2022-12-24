import { memo } from 'react'
import styles from './BynarySearch.module.css'

type Player = {
  name: string
  league: number
  place: number
  points: number
}

type Props = {
  player: Player
}

export const PlayerCard: React.FC<Props> = memo(({ player }) => {
  return (
    <div className={styles.PlayerCard}>
      <h3>Selected player</h3>
      <div>
        Name: <b>{player.name}</b>
      </div>
      <div>
        League: <b>{player.league}</b>
      </div>
      <div>
        Place: <b>{player.place}</b>
      </div>
      <div>
        Points: <b>{player.points}</b>
      </div>
    </div>
  )
})
