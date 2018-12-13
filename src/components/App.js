import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from "./HogContainer"

let weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: hogs
    }
  }

  greasedFilter = (event) => {
    const value = event.target.value
    let copyHogs = [...hogs]

    let condition = (arr) => {
      if (value === "greased") {
        return arr.filter(hog => hog.greased === true)
      } else if (value === "ungreased") {
        return arr.filter(hog => hog.greased === false)
      } else {
        return hogs
      }
    }
    let results = condition(copyHogs)
    this.setState({
      hogs: results
    })
  }

  weightSort = (event) => {
    const value = event.target.value
    let copyHogs = [...this.state.hogs]

    let condition = (arr) => {
      if (value === "ascending") {
        return arr.sort((a, b) => a[weight] - b[weight])
      } else if (value === "descending") {
        return arr.sort((a, b) => b[weight] - a[weight])
      }
    }

    let results = condition(copyHogs)
    this.setState({
      hogs: results
    })
  }

  nameSort = (event) => {
    const value = event.target.value
    let copyHogs = [...this.state.hogs]

    function compare (a,b) {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    }

    let condition = (arr) => {
      if (value === "ascending") {
        return arr.sort((a, b) => compare(a, b))
      } else if (value === "descending") {
        return arr.sort((a, b) => compare(b, a))
      }
    }

    let results = condition(copyHogs)
    this.setState({
      hogs: results
    })
  }

  render() {
    return (
      <div className="App">
        < Nav
          greasedFilter={this.greasedFilter}
          weightSort={this.weightSort}
          nameSort={this.nameSort}
        />
        < HogContainer hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
