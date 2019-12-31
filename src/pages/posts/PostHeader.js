import React from 'react';
import styled from 'styled-components';

import { H1 } from 'elements/H';
import PostInfos from 'elements/PostInfos';

function PostHeader({ post }) {
	return (
		<header>
			<H1 m={0}>{post.title.rendered}</H1>
			<PostInfos post={post} />
		</header>
	);
}

export default PostHeader;
