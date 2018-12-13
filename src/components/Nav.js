import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {

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

			<span className="smallHeader">Greasy Filter</span>
			<div className="field" >
				<select name="type" id="type" onChange={props.greasedFilter}>
					<option value="all">All</option>
					<option value="greased">Greased</option>
					<option value="ungreased">Ungreased</option>
				</select>
			</div>

			<span className="smallHeader">Weight Sort</span>
			<div className="field" >
				<select name="type" id="type" onChange={props.weightSort}>
					<option value="none">None</option>
					<option value="ascending">Lightest to Heaviest</option>
					<option value="descending">Heaviest to Lightest</option>
				</select>
			</div>

			<span className="smallHeader">Name Sort</span>
			<div className="field" >
				<select name="type" id="type" onChange={props.nameSort}>
					<option value="none">None</option>
					<option value="ascending">A to Z</option>
					<option value="descending">Z to A</option>
				</select>
			</div>

		</div>
	)
}

export default Nav
