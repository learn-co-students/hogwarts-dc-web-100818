import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';
import SortController from './SortController';

class App extends Component {
  constructor () {
    super()
    this.state = {
      hogs: hogs,
      greased: false,
      sortedBy: "none"

    }
  }

  sorter = (event) => {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';
    if (event.target.value === "weight") {
      this.setState({
        hogs: hogs.sort((a,b) => {
          return a[weight] - b[weight];
        }),
        sortedBy: event.target.value,
      })
    } else if(event.target.value === "name") {
      this.setState({
        hogs: hogs.sort((a,b) => {
          return a.name.localeCompare(b.name);
        }),
        sortedBy: event.target.value,
      })
    } else {
      this.setState({
        hogs: hogs,
        sortedBy: "none",
      })
    }
  }

  greaseFilter = (event) => {
    this.setState({
      greased: event.target.value,
      hogs: hogs.filter(hog => hog.greased === this.state.greased)
    })

  }

  render() {

    return (

      <div className="App">
          < Nav />
          <SortController sorter={this.sorter} greaseFilter={this.greaseFilter} />
          <HogContainer hogs={this.state.hogs}/>

      </div>
    )
  }
}

export default App;
