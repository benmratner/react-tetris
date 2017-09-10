import React from 'react'
import { MainContainer, } from 'containers'
import { Playfield, Blocks} from 'components'


class Home extends React.Component{
	constructor (props){
		super(props)
		this.displayName = "Home"
		this.blockInterval = 1500

		this.state = {
			secondsElapsed: 0,
			start: 1000,
			remaining: 1000,
			isPaused: false,
			blockStart: this.blockInterval,
			blockRemaining: this.blockInterval,
			blockTicks: 0,
		}

		this.blocks = [
				Blocks("T", { "x": 0, "y": 15, "r": 0 }),
				Blocks("T", { "x": 5, "y": 15, "r": 90 }),
				Blocks("T", { "x": 0, "y": 0, "r": 180 }),
				Blocks("T", { "x": 5, "y": 10, "r": 270 }),
			]
	}

	componentDidMount() {
		this.resumeGameTimer()
		this.resumeBlocks()
		this.tickTime = new Date()
	}

	componentWillUnmount () {
		clearInterval(this.interval)
	}

	componentDidUpdate(prevProps, prevState) {
		// console.log('update')
	}

	tick () {
		this.setState({remaining: 1000, secondsElapsed: this.state.secondsElapsed + 1})
	}

	blockTick () {

		this.setState({blockRemaining: this.blockInterval, blockTicks: this.state.blockTicks + 1})
		// for (let block in this.blocks){
		// 	for (let square in this.blocks[block].shape){
		// 		if (!this.blocks[block].shape.some((el)=>el.y === 0)){
		// 			this.blocks[block].shape[square].y--
	
		// 		}
		// 	}
		// }
				const now = new Date()
		// console.log (now - this.tickTime.getTime())
		this.tickTime = now
	}

	pause(){
		clearTimeout(this.gameTimer)
		clearTimeout(this.blockTimer)

		const timeInInterval = (new Date() - this.state.start)

		const remaining = this.state.remaining - timeInInterval
		const blockRemaining = this.state.blockRemaining - timeInInterval


		this.setState({remaining, blockRemaining, isPaused: true})
	}

	resumeGameTimer(){
		this.setState({isPaused: false, start: new Date()})
		this.gameTimer = setTimeout(()=>{
			this.setState({remaining: 1000});
			this.resumeGameTimer()
			this.tick()

		}, this.state.remaining)
	}

	resumeBlocks(){
		this.setState({isPaused: false})
		this.blockTimer = setTimeout(()=>{
			this.setState({blockRemaining: this.blockInterval});
			this.resumeBlocks()
			this.blockTick()

		}, this.state.blockRemaining)
	}

	handlePauseButton (){
		if (this.state.isPaused){
			this.resumeGameTimer()
			this.resumeBlocks()
		} else {
			this.pause()
		}
	}

	render (){

		const seconds = this.state.secondsElapsed

		return (
			<div>
				<h1>Seconds: {seconds} {this.state.remaining}</h1>
				<h1>blockTicks: {this.state.blockTicks} {this.state.blockRemaining}</h1>

				<button onClick={this.handlePauseButton.bind(this)}>Pause</button>
				<Playfield rows={20} cols={10} blocksInPlay={this.blocks} blockTicks={this.state.blockTicks}/>
			</div>
			)
	}
}

export default Home
