import React, { Component } from 'react'

export default class Hogs extends Component {

  state = {
    hogToggle: false
  }

  handleClick = () => {
    let newHogToggle = !this.state.hogToggle
    this.setState({
      hogToggle: newHogToggle
    })
  }

  frontCard = () => {
    const hogUrlName = (this.props.hogObj.name).toLowerCase().split(" ").join("_")
    let imgUrl = require(`../hog-imgs/${hogUrlName}.jpg`)
    return(
      <div className="ui card" onClick={this.handleClick}>
        <h4>{this.props.hogObj.name}</h4>
        <img alt={this.props.hogObj.name} src={imgUrl} />
      </div>
    )
  }

  backCard = () => {
    let weight = this.props.hogObj["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
    let medal = this.props.hogObj["highest medal achieved"]
    let greasy = this.props.hogObj.greased ? "true" : "false"
    return(
        <div className="ui card" onClick={this.handleClick}>
          <p>Specialty: {this.props.hogObj.specialty}</p>
          <p>Weight: {weight}</p>
          <p>Highest Medal Achieved: {medal}</p>
          <p>Greased?: {greasy} </p>

        </div>
    )
  }

  render(){
    return(
      <div className="ui eight wide column">
          {this.state.hogToggle === false ? this.frontCard() : this.backCard()}
      </div>
    )
  }
}
