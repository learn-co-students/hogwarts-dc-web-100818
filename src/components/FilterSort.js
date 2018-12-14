import React, { Component } from 'react'

export default class FilterSort extends Component {



  render(){
    return(
      <div>
        <button id="name" onClick={this.props.sortName}>Sort by Name</button>
        <button id="weight" onClick={this.props.sortWeight}>Sort by Weight</button>
        <button id="greased" onClick={this.props.filterGreased}>Greased</button>
      </div>
    )
  }
}
    // <button id="notGreased" onClick={this.props.filterNotGreased}>Not Greased</button>
