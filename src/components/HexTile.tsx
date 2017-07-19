import * as React from 'react'

import { HexCoord } from '../hex/coord'
import pure from './pure'

export interface IHexTileProps {
  x: number
  y: number
  size: number
  isWater: boolean
}

const hexCorners = new HexCoord(0, 0).cornersCoord()
const polyPoints = ([] as number[]).concat(...hexCorners).join(' ')

export const HexTile = pure(({x, y, size, isWater}: IHexTileProps) => (
  <polygon
    transform={`translate(${x},${y}) scale(${size})`}
    points={polyPoints}
    fill={isWater ? 'cyan' : 'brown'}
  />
))
