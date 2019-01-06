import React from 'react'

class HogCard extends React.Component {
  constructor(){
    super()
    this.state = {
      details: false
    }
  }

  handleClick = () => {
    this.setState({ details: !this.state.details })
  }


  formatHogName = () => {
    let noSpaceName = this.props.hog.name.toLowerCase().split(" ").join("_")
    // this.props.hog.name.toLowerCase().replace(/\s+/g, "_")
    return require(`../hog-imgs/${noSpaceName}.jpg`)
  }

  render(){
    return(
      <div className="card">
        {this.props.hog.name}
        <img src={this.formatHogName()}/>
        <button onClick={this.handleClick}> View Details </button>
        { this.state.details ?
          <div>
            <p>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
            <p>Specialty: {this.props.hog.specialty}</p>
            <p>Highest Award: {this.props.hog['highest medal achieved']}</p>
            <p>Greasy: {this.props.hog.greased ? "yes" : "no"}</p>
          </div>
          : null
        }
      </div>
    )
  }
}

export default HogCard
