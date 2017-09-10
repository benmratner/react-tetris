import React, { Component } from 'react'
import styles from './styles.scss'
import { PlaySquare, Blocks } from 'components'

class Playfield extends Component{

	constructor (props){
		super(props)
		this.displayName = "Home"

		this.state = {
			"blocksInPlay": [],
			"allColoredSquares": []
		}
	}
	componentDidMount() {
		// this.setState({blocksInPlay: this.props.blocksInPlay})
		this.collateBlocks()

		
	}
	componentWillReceiveProps(nextProps) {
		// this.setState({blocksInPlay: nextProps.blocksInPlay})
		if (this.props.blocksInPlay !== nextProps.blocksInPlay){
			this.collateBlocks()

		}

		if (this.props.blockTicks < nextProps.blockTicks){
			this.fall()
		

		}

		
	}

	collateBlocks(){
		let allColoredSquares = []
		for (let i = this.props.blocksInPlay.length - 1; i >= 0; i--) {
			const { shape, color } = this.props.blocksInPlay[i];

			for (let square in shape){
				shape[square]
				allColoredSquares.push({
					...shape[square],
					color,
				})
			}
		}
		this.setState({allColoredSquares})
		console.log('collated')

	}

	fall(){

		const downArray = JSON.parse(JSON.stringify(this.state.allColoredSquares))

		for (let square in downArray){
			if (downArray[square].y > 0){
				downArray[square].y--
			}
		}
		console.log(downArray)
		this.setState({allColoredSquares: downArray})
	}

	getPlayfield (){
		const grid = []

		let { rows, cols } = this.props

		for (let row = rows -1; row >= 0; row--){
			grid.push(
				<PlayfieldRow y={row} cols={cols} coloredBlocks={this.state.allColoredSquares} key={`row ${row}`}/>
			)
		}


		return grid
	}


	render (){
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
	return (
		<div className="fieldRow" key={y}>
			{gridRow}
		</div>
	)
}

export default Playfield
