import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Images from './Images';



class LandingPage extends Component{

	render(){
		return(


				<div className="landing-grid" id="root">
                <div className="hero is-fullheight is-bold is-info">
                    <div className="hero-body">
                    <div className="container">
                        <div className="header content">
                        {/* <h2 className="subtitle is-6">Code Challenge #16</h2>
                        <h1 className="title is-1">
                            Infinite Scroll Unsplash Code Challenge
                        </h1> */}
                        </div>

                        <Images />

                    </div>
                    </div>
                </div>
                </div>

		)
	}
}

export default LandingPage;