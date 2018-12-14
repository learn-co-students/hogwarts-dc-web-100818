import React, { Component } from 'react'
import Hogs from './Hogs.js'
import FilterSortContainer from './FilterSortContainer.js'


export default class HogsContainer extends Component {

  state = {
    currentOrder: this.props.hogData
  }

  sortName = () => {
   let hogNameOrder = this.state.currentOrder

   hogNameOrder.sort(function(a, b){
     return a.name.localeCompare(b.name)
   })
   this.setState({
     currentOrder: hogNameOrder
   })
  }

  sortWeight = () => {
    let hogWeightOrder = this.state.currentOrder

    hogWeightOrder.sort(function(a, b){
      return a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
    })
    this.setState({
      currentOrder: hogWeightOrder
    })

  }

  filterGreased = () => {
    let hogGreased = this.state.currentOrder

      let greased = hogGreased.filter(hog => hog.greased === true)
      console.log(greased)

      this.setState({
        currentOrder: greased
      })
    }


  render(){
    return(
      <div>
        <div>
        < FilterSortContainer
        sortName={this.sortName}
        sortWeight={this.sortWeight}
        filterGreased={this.filterGreased}
         />
        <br></br>
        </div>
        <div className="ui grid container">
          {this.state.currentOrder.map(hog =>
            < Hogs hogObj={hog} key={hog.name}/>)}
        </div>
      </div>
    )
  }
}
// filterNotGreased={this.filterNotGreased}
