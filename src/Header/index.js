import React from "react"

export class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={this.props.logo} className="App-logo" alt="gDino logo" />
      </header>
    )
  }
}
