import React, { Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Badge, Icon, Footer, FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Images from './components/Images';
import axios from 'axios';


class App extends Component{
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    axios.post('');
  }
  
  render(){
    return (
      
      <div className="demo-big-content">
          {/* <Layout>
           <Header className="header-color" title="Matters" scroll>
            <Navigation>
                <Link to="/landingPage">Landing Page</Link>
                <Link to="/aboutUs">About Us</Link>
                <Link to="/register">Register</Link>
                <Link to="/logIn">Log in</Link>
                <Link to="/loggedInMainPage">Logged in main page</Link>
                <Link to="/contact">Contact</Link>

                
                <Badge text="1" overlap>
                    <Icon name="account_box" />
                </Badge>

            </Navigation>
          </Header>  

          <Content>
          <div className="page-content" />
              <Main/>
          </Content>

          </Layout> */}
            <input type= "file" onChange={this.fileSelectedHandler}/>
            <button onClick={this.fileUploadHandler}>Upload</button>
            <Images />
      </div>
    );
  }
}

export default App;
