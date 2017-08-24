import React from 'react';
import {MainContainer} from 'containers';
import {Playfield} from 'components'


class Home extends React.Component {
constructor(props) {
	super(props);
	this.displayName = "Home";
}


	render (){
		return (
			<div>
				<h1>Home Component</h1>
				<Playfield />
			</div>
			)
	}
}

export default Home;