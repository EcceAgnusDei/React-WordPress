import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Route, NavLink, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { getPosts } from './actions/postActions.js';
import Posts from './containers/Posts';
import Post from './containers/Post'
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import theme from './theme';

function App(props) {

  useEffect(() => {
    props.getAllPosts();
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Header brand="ReactWP">
        <NavLink
          exact 
          to="/"
        >Home
        </NavLink>
        <NavLink
          exact 
          to="/posts"
        >Posts
        </NavLink>
      </Header>
      <main className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route path="/posts/:slug" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </ThemeProvider>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPosts: () => dispatch(getPosts())
  }
}

export default connect(null, mapDispatchToProps)(App);
