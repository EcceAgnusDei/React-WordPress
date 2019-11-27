import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getPostInfos } from 'actions/postActions';
import Link from 'elements/Link'

function Excerpt(props) {

	const {title, img, excerpt, slug} = props.post;

	return (
		<div>
			{img && <img src={img.medium} alt={img.alt_text} />}
			<Link>
				<NavLink to={`${props.rootLink}/${slug}`}><h2>{title.rendered}</h2></NavLink>
			</Link>
			<div dangerouslySetInnerHTML={{__html: excerpt.rendered}} /> 
		</div>
	);
}

export default Excerpt

