import React, { Component } from 'react';
import Images from './Images';

class LogIn extends Component{
	fileSelectedHandler = event => {
		console.log(event);
	}
	
	render(){
		return(
			<div>
				<input type= "file" onChange={this.fileSelectedHandler}/>
			</div>
		)
	}
}

export default LogIn;