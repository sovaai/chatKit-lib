import React, { PureComponent } from 'react'

interface OutBoundClickProps {
  onClick(): void
  className?: string
  exceptions?: string[]
  children: React.ReactNode
  outboundClickEnabled?: boolean
}

export default class OutBoundClick extends PureComponent<OutBoundClickProps> {
  private ref = React.createRef<HTMLDivElement>()

  static defaultProps = {
    exceptions: [],
    outboundClickEnabled: true,
  }

  handleClick = (ev: MouseEvent) => {
    if (this.ref.current) {
      const isOutside = (ref: Node) => !ref.contains(ev.target as HTMLDivElement)
      if (
        isOutside(
          this.ref.current
        ) /*  &&
        !this.props.exceptions.some(item => {
          return (ev.target as HTMLDivElement).classList.contains(item)
        }) */
      ) {
        this.props.onClick()
      }
    }
  }

  escFunction = (e: KeyboardEvent) => {
    if (e.key === 'Escape') this.props.onClick()
  }

  componentDidMount() {
    this.props.outboundClickEnabled && document.addEventListener('keydown', this.escFunction)
    this.props.outboundClickEnabled && document.addEventListener('click', this.handleClick)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false)
    document.removeEventListener('click', this.handleClick, false)
  }

  render() {
    const { outboundClickEnabled } = this.props
    if (!outboundClickEnabled) {
      return <>{this.props.children}</>
    }
    return (
      <div className={this.props.className} ref={this.ref}>
        {this.props.children}
      </div>
    )
  }
}
