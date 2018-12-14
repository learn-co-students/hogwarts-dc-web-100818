import React from 'react';

class HogCard extends React.Component {

  constructor () {
    super()
    this.state = {
      clicked: false
    }
  }

  formatHogName = (name) => {
    let noSpaceName = name.toLowerCase().split(" ").join("_")
    return require(`../hog-imgs/${noSpaceName}.jpg`)
  }

  clicker = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render () {

    return(
      <div onClick={this.clicker}>
        {!this.state.clicked ?
        (<div className="card">
          <h2> {this.props.hog.name}</h2>
          <img className="image" src={this.formatHogName(this.props.hog.name)} alt={this.props.hog.name} />
        </div>)
          :
        (<div className="card">
          <h2>{this.props.hog.name}'s Info </h2>
          <p>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} </p>
          <p>Specialty: {this.props.hog.specialty} </p>
          <p>Greased: {String(this.props.hog.greased)} </p>
        </div>)}
      </div>
    )
  }
}
export default HogCard;
