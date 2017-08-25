import React from 'react';
import styles from './styles.scss'

class Playfield extends React.Component {
constructor(props) {
	super(props);
	this.displayName = "Home";
}

	getPlayfield (){
		const grid = []
		const gridRow = []

		for (let cols = 10; cols >= 1; cols--) {
			gridRow.push(
				<div className="fieldSquare">
				X
				</div>
			)
		}
		for (let rows = 20; rows >= 1; rows--) {
			grid.push(
				<div className="fieldRow">
					{gridRow}
				</div>
			)
		}
		console.log(grid)

		return grid;
	}


	render (){

		// const rows = 20
		// const cols = 10
		const grid = this.getPlayfield();
		return (
			<div className="playfield">
			{grid}
			</div>
		)
	}
}

export default Playfield;
