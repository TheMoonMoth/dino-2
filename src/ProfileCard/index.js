import React from "react"

export class ProfileCard extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      active: true
    }
    this.toggleClass = this.toggleClass.bind(this)
  }

  toggleClass() {
    var currentState = this.state.active
    this.setState({ active: !currentState})
  }

  render() {
    return(
      <li>
        <div className="profile-card" >
          <header className="profile-header" onClick={this.toggleClass} >
            <img src={require(`${this.props.profile.image}`)} alt={this.props.profile.name}/>
            <h2>{this.props.profile.name}</h2>
          </header>
          <section className={this.state.active?'skills-container hidden' : 'skills-container'}>
            <h4>Skills</h4>
            <ul>
              {this.props.profile.skills.map(skill => {
                  return(
                    <li key={skill}>{skill}</li>
                  )
              })}
            </ul>
          </section>
        </div>
      </li>
    )
  }
}
