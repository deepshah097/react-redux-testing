import React, { Component } from 'react';
import DefaultImage from './components/DefaultImages'
import { Route, Switch} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import Photo from './components/Photo';
import { getAllPhotos } from './actions/photos';
class App extends Component {
  componentDidMount(){
   this.props.getPhotos();
  }
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Switch>
            <Route path="/" exact component={DefaultImage}/>            
            <Route path="/photos/:code" component={Photo}/>
            <Route render={()=><h1>404 page not found</h1>}/>
      </Switch>
      </BrowserRouter>      
      </div>
    );
  }
}
const mapDispathToProps=(dispatch)=> {
  return {
    getPhotos: () => dispatch(getAllPhotos())
  }
}
export default connect(null, mapDispathToProps)(App);
