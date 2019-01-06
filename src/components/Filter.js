import React from 'react'

class Filter extends React.Component {
  render(){
    return(
      <div>
        <select onChange={this.props.showGreased}>
          <option value="all">All</option>
          <option value="greased">Greased</option>
        </select>

        <select onChange={this.props.sortHogs}>
          <option value="none">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    )
  }
}

export default Filter
