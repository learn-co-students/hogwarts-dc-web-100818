import React from 'react'
import HogCard from "./HogCard.js"

export default class HogContainer extends React.Component {
  render() {
    return(
      <div className="ui grid container">
        {this.props.hogs.map(hog => {
          return (< HogCard key={hog.id} hog={hog}/>)
        })}
      </div>
    )
  }
}
