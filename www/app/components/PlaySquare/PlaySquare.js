import React, { PropTypes, } from 'react'
import './styles.scss'
class PlaySquare extends React.Component{
    constructor (props){
        super(props)
    }

	render (){
		const className = "playsquare " + this.props.color
		return (
			<div className={className}>
				x
			</div>
		)
	}
}

export default PlaySquare
