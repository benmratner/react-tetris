import React, { Component } from 'react'
import styles from './styles.scss'
import { PlaySquare, Blocks } from 'components'

class Playfield extends Component{

	constructor (props){
		super(props)
		this.displayName = "Home"

		this.state = {
			"blocksInPlay": []
		}
	}
	componentDidMount() {
		this.setState({blocksInPlay: this.props.blocksInPlay})
		
	}
	componentWillReceiveProps(nextProps) {
		this.setState({blocksInPlay: nextProps.blocksInPlay})
		
	}

	collateBlocks(){
		console.log(this.state.blocksInPlay)
		let allColoredBlocks = []
		for (let i = this.state.blocksInPlay.length - 1; i >= 0; i--) {
			const { shape, color } = this.state.blocksInPlay[i];

			for (let square in shape){
				shape[square]
				allColoredBlocks.push({
					...shape[square],
					color,
				})
			}
		}
		return allColoredBlocks


	}

	getPlayfield (){
		const grid = []

		let { rows, cols } = this.props
		// console.log(this.collateBlocks()[0].x)

		const coloredBlocks = this.collateBlocks()


		for (let row = rows -1; row >= 0; row--){
			// const rowColoredBlocks = this.collateBlocks().filter(el => {el.y === rows} )
			grid.push(
				<PlayfieldRow y={row} cols={cols} coloredBlocks={coloredBlocks}/>
			)
		}


		return grid
	}


	render (){

		// const rows = 20
		// const cols = 10
		const grid = this.getPlayfield()

		return (
			<div className="playfield">
			{grid}
			</div>
		)
	}
}

const PlayfieldRow = (props) => {
		let { cols, coloredBlocks, y } = props

	const gridRow = []




	for (let col = 0; col < cols; col++){
		let isColored = false;
		let color = "";
			isColored = coloredBlocks.find((el) => el.x === col && el.y === y)
			// console.log(startSquare)
			color = isColored ? isColored.color : "";

			if (isColored){
				gridRow.push(
					<PlaySquare x={col} y={y} color={color} key={`${col}, ${y}`}/>
				)
			} else {
				gridRow.push(
					<PlaySquare x={col} y={y} key={`${col}, ${y}`}/>
				)
			}

	}
	console.log(gridRow)
	return (
		<div className="fieldRow" key={y}>
			{gridRow}
		</div>
	)
}

export default Playfield
