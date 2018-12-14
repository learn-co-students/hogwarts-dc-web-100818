import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigsContainer from '../containers/PigsContainer'
import Pig from './Pig'
import hogs from '../porkers_data';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pigs: hogs,
      currentSort: 'none',
      greased: 'all'
    }
  }

  filterChange = (e) => {
    this.setState({
      currentSort: e.target.value
    })
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

  getSortedPigs = () => {
    let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    if (this.state.currentSort === 'none') {
      return this.state.pigs
    } else if (this.state.currentSort === 'name') {
      return this.state.pigs.sort((a,b) => a.name.localeCompare(b.name))
    } else if (this.state.currentSort === 'weight') {
      return this.state.pigs.sort((a, b) => a[weight] - b[weight])
    }
  }

  render() {
    return (
      <div className="App">
          <Nav filterChange={this.filterChange} greaseChange={this.greaseChange}/>
          <PigsContainer pigs={this.state.pigs} getSortedPigs={this.getSortedPigs} greased={this.state.greased}/>
      </div>
    )
  }
}

export default App;
