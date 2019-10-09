import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

import { getPostInfos } from '../actions/postActions';

function Excerpt(props) {

	const {title, img, excerpt, slug} = props.post;
	console.log("post complet", props.post)
	console.log("img", props.post.img)

	return (
		<div>
			{img && <img src={img.medium} alt={img.alt_text} />}
			<NavLink to={`/${slug}`}><h2>{title.rendered}</h2></NavLink>
			<div dangerouslySetInnerHTML={{__html: excerpt.rendered}} /> 
		</div>
	);
}

export default Excerpt

