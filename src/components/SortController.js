import React from 'react';

class SortController extends React.Component {

  render () {

    return (
      <form>
      Sort by:
        <select onChange={(event) => this.props.sorter(event)}>
            <option value="null">---</option>
            <option value="name">name</option>
            <option value="weight">weight</option>
        </select>
      Greased?
        <select onChange={(event) => this.props.greaseFilter(event)}>
            <option value="false">no</option>
            <option value="true">yes</option>
        </select>
      </form>
    )
  }
}
export default SortController;
