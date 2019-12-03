import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, NavLink, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

import { fetchPosts } from './actions/postActions.js';
import { fetchCategories } from './actions/categoryActions.js';
import Posts from './pages/posts/PostsPage';
import Post from './pages/posts/OnePostPage';
import Header from './layout/Header';
import Home from './pages/home/HomePage';
import NotFound from './pages/NotFound';
import theme from './theme';
import 'assets/css/style.css';

const StyledContent = styled.div`
  padding-top: ${props => 1.5 * props.theme.headerHeight + 'px'};

  .primary-link {
    color: ${props => props.theme.primary};
  }
  .primary-link:hover {
    color: ${props => props.theme.primaryHover};
  }

  .black-link {
    color: ${props => props.theme.black};
  }

  .small-font {
    font-size: 0.8rem;
  }
`;

const GeneralStyle = styled.div`
  position: relative;
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.font.sans}, sans-serif;
  min-height: 100vh;
  background-color: ${props => props.theme.light};
  .MuiCircularProgress-root {
    position: absolute;
    top: 50%;
    left: calc(50% - ${props => props.theme.circularProgressSize / 2}px);
  }
  .MuiDivider-root {
    background-color: rgba(0, 0, 0, 0.18);
  }
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

function App(props) {
  useEffect(() => {
    props.fetchAllPosts();
    props.fetchAllCategories();
  }, []);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <GeneralStyle>
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
                <Route exact path="/posts/:category" component={Posts} />
                <Route path="/posts/:category/:index" component={Posts} />
                <Route path="/post/:slug" component={Post} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </StyledContent>
        </GeneralStyle>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchPosts()),
    fetchAllCategories: () => dispatch(fetchCategories())
  };
};

export default connect(null, mapDispatchToProps)(App);
