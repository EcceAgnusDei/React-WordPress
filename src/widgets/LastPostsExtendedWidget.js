import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import PostsSupplier from './PostsSupplier.js';

function LastPostsExtendedWidget({ number }) {
	return (
		<PostsSupplier
			render={(posts, loading) => {
				const toShowJSX = posts.slice(0, number).map((post, index) => (
					<Grid item xs={12 / number} key={index}>
						<NavLink to={`/post/${post.slug}`} className="black-link small-font">
							<Button>{post.title.rendered}</Button>
						</NavLink>
					</Grid>
				));
				return (
					<Grid container spacing={3}>
						{toShowJSX}
					</Grid>
				);
			}}
		/>
	);
}

export default LastPostsExtendedWidget;
