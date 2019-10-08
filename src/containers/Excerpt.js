import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPostInfos } from '../actions/postActions';

function Excerpt(props) {

	const {title, img, excerpt} = props.post;
	console.log("post complet", props.post)
	console.log("img", props.post.img)

	return (
		<div>
			{img && <img src={img.medium} alt={img.alt_text} />}
			<h2>{title.rendered}</h2>
			<div dangerouslySetInnerHTML={{__html: excerpt.rendered}} /> 
		</div>
	);
}

export default Excerpt

