import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigsContainer from '../containers/PigsContainer'
import Pig from './Pig'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pigs: hogs, //didn't need this really
      currentSort: '-',
      greased: 'all'
    }
  }

  filterChange = (event) => {
    this.setState({
      currentSort: event.target.value
    })
  }

  getSortedPigs = () => {
    let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    if (this.state.currentSort === '-') {
      return this.state.pigs
    } else if (this.state.currentSort === 'name') {
      return this.state.pigs.sort((a,b) => a.name > b.name)
    } else if (this.state.currentSort === 'weight') {
      return this.state.pigs.sort((a,b) => a[weight] - b[weight])
    }
  }

  greaseChange = (event) => {
    let boolean
    if (event.target.value === 'true') {
      boolean = true
    } else if (event.target.value === 'false') {
      boolean = false
    } else if (event.target.value === 'all') {
      boolean = "all"
    }
    this.setState({
      greased: boolean
    })
  }
  
  render() {
    return (
      <div className="App">
          < Nav filterChange={this.filterChange} greaseChange={this.greaseChange}/>
          < PigsContainer pigs={this.state.pigs} getSortedPigs={this.getSortedPigs} greased={this.state.greased}/>
      </div>
    )
  }
}

export default App;
