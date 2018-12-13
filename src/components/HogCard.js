import React from 'react'

export default class HogCard extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: false
    }
  }

  urlConverter = (hogName) => {
    let replaceAll = function(search, replacement, name) {
        var target = name;
        return target.split(search).join(replacement);
    };
    const modifiedName = hogName.toLowerCase()
    let imgUrl = require(`../hog-imgs/${replaceAll(" ","_", modifiedName)}.jpg`)
    return imgUrl
  }

  handleImgClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return(
      <div className="ui eight wide column" onClick={this.handleImgClick}>
        <div>{this.props.hog.name}</div>

        {!this.state.clicked ? (<img src={this.urlConverter(this.props.hog.name)} />) : null}

        {this.state.clicked ? <div>Specialty: {this.props.hog.specialty}</div> : null}

        {this.state.clicked ? <div>Greased: {`${this.props.hog.greased}`}</div> : null}

        {this.state.clicked ? <div>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</div> : null}

        {this.state.clicked ? <div>Highest medal achieved: {`${this.props.hog["highest medal achieved"]}`}</div> : null}

      </div>
    )
  }
}
