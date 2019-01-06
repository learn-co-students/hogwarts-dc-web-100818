import React from 'react'
import HogCard from '../components/HogCard'

class HogsContainer extends React.Component {
  render(){
    return(
      <div className="ui cards">
        {this.props.hogs.map( (hog, index) => <HogCard hog={hog} key={index} />)}
      </div>
    )
  }
}

export default HogsContainer
