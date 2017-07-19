import * as React from 'react'

import * as css from './Board.css'

import { HexTile } from './HexTile'
import { HexCoord } from '../hex/coord'

export const Board = () => (
  <svg className={css.board} viewBox='0 0 400 300' preserveAspectRatio='xMidYMid' version='1.1' baseProfile='full' xmlns='http://www.w3.org/2000/svg'>
    <g transform='translate(200,150)'>
      {
        HexCoord.fillCircle(3)
          .map(hex => {
            let [x, y] = hex.toCartesian()

            return <HexTile x={x * 26} y={y * 26} size='25' isWater={hex.dist(HexCoord.origin) === 3} key={`${x},${y}`}/>
          })
      }
    </g>
  </svg>
)
