import React, { Component } from 'react'
import FilterSort from './FilterSort.js'

export default class FilterSortContainer extends Component {

  render(){

    return(
      <div>
      < FilterSort
      sortName={this.props.sortName}
      sortWeight={this.props.sortWeight}
      filterGreased={this.props.filterGreased}
      />
      </div>

    )
  }
}
// filterNotGreased={this.props.filterNotGreased}
