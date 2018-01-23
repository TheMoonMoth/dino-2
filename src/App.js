import React from "react"
import logo from "./assets/g-dino.png"
import "./App.css"
import { Header } from "./Header"
import ProfilesList from "./Main"
import { Footer } from "./Footer"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: []
    }
  }

  componentDidMount() {
    fetch("./dinosaurs.json")
    .then(resp => resp.json())
    .then(resp => this.setState({
      profiles: resp
    }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <h2>Profiles</h2>
          <ul id="profiles">
            <ProfilesList profiles={this.state.profiles} />
          </ul>
        </main>
        <Footer />
      </div>
    )
  }
}
