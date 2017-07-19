const sq3 = Math.sqrt(3)

export class HexCoord {
  static readonly origin = new HexCoord(0, 0)

  readonly x: number
  readonly y: number
  readonly z: number

  constructor (x: number, y: number) {
    this.x = Math.floor(x)
    this.y = Math.floor(y)
    this.z = 0 - this.x - this.y
    Object.freeze(this)
  }

  static fillCircle (radius: number): HexCoord[] {
    const rad = Math.floor(Math.abs(radius))
    const result = []

    for (let dx = -rad; dx <= rad; dx++) {
      for (let dy = Math.max(-rad, -dx - rad); dy <= Math.min(rad, -dx + rad); dy++) {
        result.push(new HexCoord(dx, dy))
      }
    }

    return result
  }

  static fromCartesian (cx: number, cy: number): HexCoord {
    const x = (cx * sq3 - cy) / 3
    const y = (cx * sq3 + cy) / 3

    return new HexCoord(x, y)
  }

  toCartesian (): [number, number] {
    const cx = (this.x - this.y) * sq3 / 2
    const cy = (this.x + this.y) * -3 / 2

    return [cx, cy]
  }

  dist (to: HexCoord): number {
    const dx = Math.abs(this.x - to.x)
    const dy = Math.abs(this.y - to.y)
    const dz = Math.abs(this.z - to.z)

    return (dx + dy + dz) / 2
  }

  neg (): HexCoord {
    return new HexCoord(-this.x, -this.y)
  }

  add (to: HexCoord): HexCoord {
    return new HexCoord(this.x + to.x, this.y + to.y)
  }

  cornersCoord (): [number, number][] {
    return [
      [0, 1],
      [sq3 / 2, 0.5],
      [sq3 / 2, -0.5],
      [0, -1],
      [-sq3 / 2, -0.5],
      [-sq3 / 2, 0.5]
    ]
  }
}
