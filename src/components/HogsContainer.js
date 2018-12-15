import React from 'react';
import Hogs from './Hogs.js'
import FilterSortContainer from './FilterSortContainer.js'

export default class HogsContainer extends React.Component {

  state = {
    currentOrder: this.props.hogData
  }

  sortName =() => {
    let hogNameOrder = this.state.currentOrder

    this.setState({
      currentOrder: hogNameOrder.sort(function(a, b) {
            return a.name.localeCompare(b.name)
          })
    })
  }

  sortWeight =() => {
    let hogWeightOrder = this.state.currentOrder

    this.setState({
      currentOrder: hogWeightOrder.sort(function(a,b) {
        return a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
      })
    })
  }


  filterGreased =() => {
    console.log("filtering by greased")
    let currentHogs = this.state.currentOrder
    let greased = currentHogs.filter(hog => hog.greased === true)
    console.log(greased)

    this.setState({
      currentOrder: greased
    })
  }

  filterNotGreased = () => {
    console.log("not greased")
    let currentHogs = this.state.currentOrder
    let ungreased = currentHogs.filter(hog => hog.greased === false)
    console.log(ungreased)
  }

  render() {
    return (
      <div>

      <div>
        < FilterSortContainer
        sortName={this.sortName}
        sortWeight={this.sortWeight}
        filterGreased={this.filterGreased}
        filterNotGreased={this.filterNotGreased}/>
        <br></br>
      </div>

      <div className= "ui grid container">
      {this.state.currentOrder.map(hog => < Hogs key={hog.name} hogObj={hog} />)}
      </div>

      </div>
    )
  }
}
