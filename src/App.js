import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Route, Navlink} from 'react-router-dom';
import { connect } from 'react-redux';

import { getPosts } from './actions/postActions.js';
import Infos from './containers/Infos';
import Post from './containers/Post';

function App(props) {

  useEffect(() => {
    props.getAllPosts();
  }, [])

  return (
    <React.Fragment>
      <h1>Hello World!</h1>
      <main>
        <Route exact path="/" component={Infos} />
        <Route path="/:slug" component={Post} />
      </main>
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPosts: () => dispatch(getPosts())
  }
}

export default connect(null, mapDispatchToProps)(App);
