import React from 'react';
import FilterSort from './FilterSort.js'

export default class FilterSortContainer extends React.Component {
  render() {
    return (
      <div>
        < FilterSort
        sortName={this.props.sortName}
        sortWeight={this.props.sortWeight}
        filterGreased={this.props.filterGreased}
        filterNotGreased={this.props.filterNotGreased}
        />
      </div>

    )
  }
}
