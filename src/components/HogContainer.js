import React from 'react';
import HogCard from './HogCard.js'

class HogContainer extends React.Component {

  render () {
    console.log(this.props.hogs)
    return (
      <div className="ui grid container">
      {this.props.hogs.map(hog =>
        <HogCard hog={hog} key={hog.name}/>
      )}
       </div>
    )
  }
}
export default HogContainer;
