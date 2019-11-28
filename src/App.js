import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, NavLink, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

import { getPosts } from './actions/postActions.js';
import Posts from './pages/posts/PostsPage';
import Post from './pages/posts/OnePostPage'
import Header from './layout/Header';
import Home from './pages/home/HomePage';
import NotFound from './pages/NotFound';
import theme from './theme';
import 'assets/css/style.css';

const StyledMain = styled.main`
  padding-top: ${props => 1.5 * props.theme.headerHeight + 'px'};
`;

const muiTheme = createMuiTheme({
  palette: {
    primary: { main: theme.primary, dark: theme.primaryHover },
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

function App(props) {

  useEffect(() => {
    props.getAllPosts();
  }, [])

  return (
    <MuiThemeProvider theme={muiTheme}>
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
        <StyledMain>
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/posts:index" component={Posts} />
              <Route path="/posts/:slug" component={Post} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </StyledMain>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPosts: () => dispatch(getPosts())
  }
}

export default connect(null, mapDispatchToProps)(App);
