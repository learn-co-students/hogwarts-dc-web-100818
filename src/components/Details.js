import React, {Component} from 'react'

class Details extends Component {
  
  render() {
    return (
      <div className='description'>
        <p>Specialty: {this.props.pig.specialty}</p>
        <label>Greased: </label>
        <input type='checkbox' checked={this.props.pig.greased}/>
        <p>Weight: {this.props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>Higher Medal Achieved: {this.props.pig['highest medal achieved']} </p>
      </div>
    )
  }

}

export default Details
