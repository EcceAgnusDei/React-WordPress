import React from 'react';
import styled from 'styled-components';

import { H1 } from 'elements/H';
import PostInfos from 'elements/PostInfos';

function PostHeader({ title, author, date, categories }) {
	return (
		<div>
			<H1 m={0}>{title}</H1>
			<PostInfos author={author} date={date} categories={categories} />
		</div>
	);
}

export default PostHeader