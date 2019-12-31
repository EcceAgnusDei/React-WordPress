import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { CONSTANTS } from 'config';

import WidgetPost from './WidgetPost.js';
import WidgetHeader from './WidgetHeader.js';
import WidgetWrapper from './WidgetWrapper.js';
import PostsSupplier from './PostsSupplier.js';

function LastPostsWidget({ number, variant }) {
	return (
		<PostsSupplier
			filter={variant}
			render={(posts, currentPost, medias, title) => {
				const postsWithoutCurrent = posts.filter(post => post.id !== currentPost.id);
				const media = medias.find(media => media.id === postsWithoutCurrent[0].featured_media);
				const noRender = postsWithoutCurrent.length == 0;
				const toShowJSX = postsWithoutCurrent.slice(1, number).map((post, index) => (
					<ListItem button divider key={index}>
						<NavLink to={`/post/${post.slug}`} className="black-link small-font">
							{post.title.rendered}
						</NavLink>
					</ListItem>
				));
				return noRender ? null : (
					<WidgetWrapper>
						<WidgetHeader>{title}</WidgetHeader>
						<Divider />
						<WidgetPost post={postsWithoutCurrent[0]} media={media} />
						<Divider />
						<List disablePadding>{toShowJSX}</List>
					</WidgetWrapper>
				);
			}}
		/>
	);
}

LastPostsWidget.defaultProps = {
	number: CONSTANTS.NB_POSTS_WIDGET
};

export default LastPostsWidget;
