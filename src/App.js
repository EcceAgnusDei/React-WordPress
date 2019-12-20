import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Route, NavLink, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

import { fetchPosts } from './actions/postActions.js';
import { fetchCategories } from './actions/categoryActions.js';
import { setScreenSize } from './actions/statusActions.js';

import { getSize } from 'utils/utils';
import Posts from './pages/posts/PostsPage';
import Post from './pages/posts/OnePostPage';
import Header from './layout/Header';
import Home from './pages/home/HomePage';
import NotFound from './pages/NotFound';
import theme from './theme';
import AppWrapper from 'AppWrapper';
import 'assets/css/style.css';

const StyledContent = styled.div`
  padding-top: ${props => 1.5 * props.theme.headerHeight + 'px'};
`;

const muiTheme = createMuiTheme({
  palette: {
    primary: { main: theme.primary, dark: theme.primaryHover, light: theme.primaryLight },
    common: {
      black: theme.black
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: parseInt(theme.sm),
      md: parseInt(theme.md),
      lg: parseInt(theme.lg),
      xl: parseInt(theme.xl)
    }
  }
});

function App({ fetchAllCategories, fetchAllPosts, setScreenSize, screenSize }) {
  useEffect(() => {
    fetchAllPosts();
    fetchAllCategories();
  }, []);

  useEffect(() => {
    window.onresize = () => {
      console.log(screenSize);
      if (screenSize != getSize(theme)) setScreenSize(getSize(theme));
    };
  }, [screenSize]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Header brand="ReactWP">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/posts">Posts</NavLink>
          </Header>
          <StyledContent>
            <Container>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={Posts} />
                <Route path="/posts/page/:index" component={Posts} />
                <Route exact path="/posts/archives/:year" component={Posts} />
                <Route path="/posts/archives/:year/page/:index" component={Posts} />
                <Route exact path="/posts/archives/:year/:month" component={Posts} />
                <Route path="/posts/archives/:year/:month/page/:index" component={Posts} />
                <Route exact path="/posts/:category" component={Posts} />
                <Route path="/posts/:category/:index" component={Posts} />
                <Route path="/post/:slug" component={Post} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </StyledContent>
        </AppWrapper>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchPosts()),
    fetchAllCategories: () => dispatch(fetchCategories()),
    setScreenSize: size => dispatch(setScreenSize(size))
  };
};

const mapStateToProps = state => {
  return {
    screenSize: state.status.screenSize
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
