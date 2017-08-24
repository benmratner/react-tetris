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

		for (let cols = 10; cols >= 0; cols--) {
			gridRow.push(
				<div className={styles.fieldSquare}>
				</div>
			)
		}

		for (let rows = 20; rows >= 0; rows--) {
			<div className={Styles.fieldRow}>
			grid.push(gridRow)
			</div>
		}

		return grid;
	}


	render (){

		// const rows = 20
		// const cols = 10
		const grid = this.getPlayfield();
		return (
			<div>
			{grid}
			</div>
		)
	}
}

export default Playfield;
