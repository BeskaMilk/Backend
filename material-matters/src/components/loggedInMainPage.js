import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class LoggedInMainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
	}
	
	toggleCategories(){
		if(this.state.activeTab === 0){
			return (
				<div className= "feedPage">
					{/* <h1>This is feed page. You can see all the materials and construction team info here. The information your friend company uploaded as well as your own data.</h1> */}
					<Card shadow={5} style={{width: '512px', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Mauris sagittis pellentesque lacus eleifend lacinia...
						</CardText>
						<CardActions border>
							<Button colored>Get Started</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
			)
		}
		else if(this.state.activeTab === 1){
			return (
				// <div><h1>This is your data page. You can see all the materials and construction team info that you uploaded here. </h1></div>
				<Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
					<CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
					<CardText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Aenan convallis.
					</CardText>
					<CardActions border>
						<Button colored>View Updates</Button>
					</CardActions>
				</Card>
			)
		}
		else if(this.state.activeTab === 2){
			return (
				<div><h1>This is a wiki page. You'll be able to learn about materials, construction methods and share your knowledges as well.</h1></div>
			)
		}
	}

    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Feed</Tab>
                    <Tab>My</Tab>
                    <Tab>Wiki</Tab>
                </Tabs>
                 <section className="projects-grid">
					 <Grid className="projects-grid">
						 <Cell col={12}>
							<div className="content">{this.toggleCategories()}</div>



						 </Cell>
					 </Grid>
					{/* <div className="content">Content for the tab: {this.state.activeTab}</div> */}
				</section> 
            </div>    
        );
    }
}

export default LoggedInMainPage;



