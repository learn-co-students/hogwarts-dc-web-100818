import React from 'react';

export default class FilterSort extends React.Component {



  render() {
    return (
    <div>
      <button onClick={this.props.sortName}>
        Sort by Name
      </button>
      <button onClick={this.props.sortWeight}>
        Sort by Weight
      </button>
      <button onClick={this.props.filterGreased}>
        Greased Hogs
      </button>
      <button onClick={this.props.filterNotGreased}>
        Ungreased Hogs
      </button>
    </div>
    )
  }
}
