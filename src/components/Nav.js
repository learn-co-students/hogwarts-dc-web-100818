import piggy from '../porco.png'
import React from 'react'
import App from './App'

class Nav extends React.Component {
	render() {
		return (
			<div className="navWrapper">
				<span className="headerText">Hogwarts</span>
				<div className="TwirlyPig">
					<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
						<img src={piggy} className="App-logo" alt="piggy" />
					</a>
				</div>
				<span className="normalText">A React App for County Fair Hog Fans</span>
				<br/>
				<select onChange={this.props.filterChange}>
					<option value='-'>-</option>	
					<option value='name'>Name</option>
					<option value='weight'>Weight</option>
				</select>
				<select onChange={this.props.greaseChange}>
					<option value='all'>All</option>
					<option value='true'>Greased</option>
					<option value='false'>Ungreased</option>
				</select>
			</div>
		)
	}
}

export default Nav
