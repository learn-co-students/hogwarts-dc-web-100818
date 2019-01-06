import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from '../containers/HogsContainer'
import Filter from './Filter'

class App extends Component {
  constructor(){
    super()
    this.state = {
      filter: "none",
      greased: false
    }
  }

  sortHogs = (event) => {
    let sortBy = event.target.value

    if(sortBy === "name") {
        this.setState({currentSort: "name"})
    } else if(sortBy === "weight") {
        this.setState({currentSort: "weight"})
    } else {
        this.setState({currentSort: "none"})
    }
  }

  sortHogsBy = () => {
   let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

   let filtered = this.filterGreased()

   if(this.state.currentSort !== "none") {
     return filtered.sort((a,b) => {
       if(this.state.currentSort === "name") {
         return a.name.localeCompare(b.name)
       } else {
         return a[weight] - b[weight]
       }
     })
   } else {
     return filtered
   }
 }

  showGreased = (event) => {
    let currentStatus = event.target.value

    if(currentStatus === "greased") {
      this.setState({greased: true})
    } else {
      this.setState({greased: false})
    }
  }

  filterGreased = () => {
    if(this.state.greased) {
      return hogs.filter(hog => hog.greased === true)
    } else {
      return hogs
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter sortHogs={this.sortHogs} showGreased={this.showGreased} />
        <HogsContainer hogs={this.sortHogsBy()}/>
      </div>
    )
  }
}

export default App;
