import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import Routes from './Routes'
import NavBar from './components/navbar/index'
import store from './store'

const history = createBrowserHistory();
const initialState = {
  links: [],
  title: null,
  button: null
}

export default class App extends Component {

  constructor(){
    super()
    this.state = initialState;
    this.handleNavBarChange = this.handleNavBarChange.bind(this);
  }

  handleRedirect(path){
    history.push(path)
  }

  handleNavBarChange(links, title, button){
    this.setState({
      links: links,
      title: title,
      button: button
    })
  }

  render(){
    return(
      <Provider store={store}>
        <div>
          <NavBar
            links={this.state.links}
            title={this.state.title}
            button={this.state.button}
            handleRedirect={this.handleRedirect}
          />
          <Routes
            history={history}
            handleRedirect={this.handleRedirect}
            handleNavBarChange={this.handleNavBarChange}
          />
        </div>
      </Provider>
    )
  }
}
