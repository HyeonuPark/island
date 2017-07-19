import { Component, ReactElement } from 'react'

export default function pure<Props> (renderFunc: (props: Props) => ReactElement<Props>) {
  return class extends Component<Props, {}> {
    render () {
      return renderFunc(this.props)
    }

    shouldComponentUpdate (nextProps: Props, nextState: {}) {
      return this.props !== nextProps
    }
  }
}
