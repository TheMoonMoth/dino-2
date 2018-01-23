import React from "react"
import logo from "./assets/g-dino.png"

export class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="gDino logo" />
      </header>
    )
  }
}
