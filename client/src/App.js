import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic'
import Routes from './Routes'
import { Router } from 'react-router-dom';
import NavBar from './components/navbar/index'
import store from './store'

const history = createBrowserHistory();

export default class App extends Component {

  handleRedirect(path){
    history.push(path)
  }

  render(){
    return(
      <Provider store={store}>
        <BreadcrumbsProvider>
          <Router history={history}>
            <div>
              <NavBar />
              <Routes handleRedirect={this.handleRedirect} />
            </div>
          </Router>
        </BreadcrumbsProvider>
      </Provider>
    )
  }
}
