import React from 'react'
import { MainContainer, } from 'containers'
import { Playfield, Blocks} from 'components'


class Home extends React.Component{
constructor (props){
	super(props)
	this.displayName = "Home"
}
	render (){
		const blocks = [
				Blocks("T", { "x": 0, "y": 15, "r": 0 }),
				Blocks("T", { "x": 5, "y": 15, "r": 90 }),
				Blocks("T", { "x": 0, "y": 0, "r": 180 }),
				Blocks("T", { "x": 5, "y": 10, "r": 270 }),


			]
		return (
			<div>
				<h1>Home Component</h1>
				<Playfield rows={20} cols={10} blocksInPlay={blocks}/>
			</div>
			)
	}
}

export default Home
