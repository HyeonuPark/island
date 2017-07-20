import * as React from 'react'

import * as css from './Board.css'
// import { HexTile } from './HexTile'
// import { HexCoord } from '../hex/coord'

import { Sword, Road, Wood, Brick } from './Icons'

export const Board = () => (
  <svg className={css.board} viewBox='-200 -150 400 300' preserveAspectRatio='xMidYMid' version='1.1' baseProfile='full' xmlns='http://www.w3.org/2000/svg'>
    {/* {
        HexCoord.fillCircle(3)
        .map(hex => {
          let [x, y] = hex.toCartesian()

          return <HexTile x={x * 26} y={y * 26} size='25' isWater={hex.dist(HexCoord.origin) === 3} key={`${x},${y}`}/>
        })
    } */}
    <Sword x={-140} y={0} size={30}/>
    <Road x={-100} y={0} size={30}/>
    <Wood x={-60} y={0} size={30}/>
    <Brick x={60} y={0} size={90}/>
  </svg>
)
