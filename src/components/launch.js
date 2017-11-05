import React, {Component} from 'react';
class LaunchButton extends Component {

constructor(props) {
	super(props);
	this.state = {term : 0};
    
}
	render() {
		return( 
			<div>
		<input
		    type="button"
			
			 value = { this.state.term } >
		</input>
		</div>

			);
	}
}

export default LaunchButton;