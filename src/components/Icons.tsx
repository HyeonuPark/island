import * as React from 'react'
import pure from './pure'

export interface IconPosition {
  x: number
  y: number
  size: number
}

function icon<T> (gen: () => React.ReactElement<T>) {
  return pure(({x, y, size}: IconPosition) => (
    <g transform={`translate(${x},${y}) scale(${size / 100})`}>
      {gen()}
    </g>
  ))
}

export const Sword = icon(() => (
  <g transform='rotate(-38)'>
    <rect x='-30' y='-35' width='10' height='70'/>
    <path d='M-20 -20 h70 l30 20 l-30 20 h-70 v-8 h67 l20 -12 l-20 -12 h-67 z'/>
    <path d='M-20 -2 h67 l7 2 l-7 2 h-67 z'/>
    <path d='M-30 -6 h-35 l-5 -5 l-11 11 l11 11 l5 -5 h35 v-5 h-38 l-2 2 l-3 -3 l3 -3 l2 2 h38 z'/>
  </g>
))

export const Road = icon(() => (
  <g transform='rotate(-38) translate(-60 -33) scale(0.75)'>
    <rect x='0' y='0' width='160' height='10'/>
    <rect x='20' y='30' width='40' height='10'/>
    <rect x='100' y='30' width='40' height='10'/>
    <rect x='0' y='60' width='160' height='10'/>
  </g>
))

export const Wood = icon(() => (
  <g transform='scale(1.1)'>
    <path d='M30 -40 a30 15 0 0 1 -60 0 v80 a30 15 0 0 0 60 0 v-30 a10 11 0 0 1 0 -20 z' stroke='black'/>
    <path d='M30 8 a9 10 0 0 1 0 -16 v2 l4 -2 l6 -12 l6 2 l-2 5 l8 -4 l4 8 l-26 15 z' stroke='black'/>
    <ellipse cx='0' cy='-40' rx='30' ry='15' fill='none' stroke='black'/>
    <ellipse cx='0' cy='-40' rx='20' ry='10' fill='none' stroke='black'/>
    <ellipse cx='0' cy='-40' rx='10' ry='5' fill='none' stroke='black'/>
    <line x1='3' y1='-41' x2='23' y2='-49' stroke='black'/>
    <line x1='4' y1='-40' x2='27' y2='-43' stroke='black'/>
  </g>
))
