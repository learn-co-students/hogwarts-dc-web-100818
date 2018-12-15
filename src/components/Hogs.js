import React from 'react';

export default class Hogs extends React.Component {

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
    let hog = this.props.hogObj
    let imgUrl = `${hog.name.toLowerCase().split(' ').join('_')}`

    return (
      <div onClick = {this.handleClick} className="ui card">
        <h1>{hog.name}</h1>
        <img alt={this.props.hogObj.name} src={require(`../hog-imgs/${imgUrl}.jpg`)} />
      </div>
    )
  }

  backCard = () => {
    let hog = this.props.hogObj
    let weight = hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
    let medal = hog["highest medal achieved"]
    let greased = hog.greased === true ? "true" : "false"

    return (
      <div onClick = {this.handleClick} className="ui card">
        <h1>{hog.name}</h1>
        <h3>Specialty: {hog.specialty}</h3>
        <h3>Weight: {weight}</h3>
        <h3>Medal-Type: {medal}</h3>
        <h3>Greased: {greased} </h3>
      </div>
    )
  }

  render() {
    return (
      <div className= "ui eight wide column">
        {this.state.hogToggle === false ? this.frontCard() : this.backCard() }
      </div>
    );
  }
}
