import styled from 'styled-components';

const WPContentContainer = styled.div`
	color: ${props => props.theme.black}

	a {
		color: ${props => props.theme.primary}
	}

	a:hover {
		color: ${props => props.theme.primaryHover}
	}

	p {
		font-family: ${props => props.theme.font.sans}, sans-serif;
		text-align: justify;
	}

	figure {
		display: block;
		margin: ${props => props.theme.marginScale * 2 + 'px'} 0;
	}

	h1, h2, h3, h4, h5, h6, h7 {
		color: ${props => props.theme.primary};
		font-family: ${props => props.theme.font.serif}, serif;
	}

	/* Image */
	img {
		max-width: 100%;
	}

	.alignleft {
		float: left;
		margin: 0 1rem 0 0;
	}

	.alignright {
		float: right;
		margin: 0 0 0 1rem;
	}

	.aligncenter {
		display: table;
		margin: auto;
		max-width: 100%;
	}
	
	/* Gallery */
	.wp-block-gallery {
	    display: flex;
	    flex-wrap: wrap;
	    list-style-type: none;
	    padding: 0;
	}

	.blocks-gallery-item {
		display: flex;
		flex-grow: 1;
		padding: 7px
		flex-direction: column;
		justify-content: center;
		position: relative;
		min-width: 200px;
	}

	.columns-3 .blocks-gallery-item {
		width: calc((100% - 32px)/3);
	}

	.columns-2 .blocks-gallery-item {
		width: calc((100% - 16px)/2);
	}

	.columns-3 .blocks-gallery-item:nth-of-type(3n) {
		margin-right: 0;
	}

	.blocks-gallery-item:last-child {
		margin-right: 0;
	}
	
	.blocks-gallery-item figure {
		margin: 0;
		height: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
	}

	.blocks-gallery-item img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		flex: 1;
		display: block;
	}
	
	/* Citation */
	.wp-block-quote {
		font-style: italic;
		color: ${props => props.theme.grey}
		display: flex;
	}

	.wp-block-quote::before {
		content: "“";
		font-size: 2rem;
		align-self: flex-start;
    	line-height: 1;
	}

	.wp-block-quote::after {
		content: "”";
		font-size: 2rem;
		align-self: flex-end;
    	line-height: 0.3;
	}

	/* Video et audio*/
	.fluid-width-video-wrapper {
		width: 100%;
	}

	iframe {
		max-width: 100%;
		width: 800px;
		height: 480px;
		margin: auto;
		display: table;
	}

	.wp-block-audio audio {
    	width: 100%;
	}

	.wp-block-video {
		max-width: 100%;
		min-width: 300px;
		display: table;
		margin-left: auto;
		margin-right: auto;
	}

	.wp-block-video video {
		max-width: 100%;
	}

	/* Cover */
	.wp-block-cover, .wp-block-cover-image {
	    position: relative;
	    background-color: #000;
		background-position: 50%;
	    background-size: cover;
	    min-height: 430px;
	    width: 100%;
	    margin: 0 0 1.5em;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    overflow: hidden;
	}

	.has-small-font-size {
		font-size: 13px;
	}

	.has-medium-font-size {
		font-size: 20px;
	}
	
	.has-large-font-size {
		font-size: 36px;
	}

	.has-huge-font-size {
		font-size: 48px;
	}

	.has-pale-pink-color {
    	color:#f78da7;
	}
	
	.has-vivid-red-color {
	    color: #cf2e2e;
	}

	.has-luminous-vivid-orange-color {
    	color: #ff6900;
	}

	.has-luminous-vivid-amber-color {
    	color: #fcb900;
	}

	.has-light-green-cyan-color {
    	color: #7bdcb5;
	}

	.has-vivid-green-cyan-color {
    	color: #00d084;
	}

	.has-pale-cyan-blue-color {
    	color: #8ed1fc;
	}

	.has-vivid-cyan-blue-color {
    	color: #0693e3;
	}

	.has-very-light-gray-color {
    	color: #eee;
	}

	.has-cyan-bluish-gray-color {
    	color: #abb8c3;
	}

	.has-very-dark-gray-color {
    	color: #313131;
	}

	.has-pale-pink-background-color {
    	color:#f78da7;
	}
	
	.has-vivid-red-background-color {
	    color: #cf2e2e;
	}

	.has-luminous-vivid-orange-background-color {
    	color: #ff6900;
	}

	.has-luminous-vivid-amber-background-color {
    	color: #fcb900;
	}

	.has-light-green-cyan-background-color {
    	color: #7bdcb5;
	}

	.has-vivid-green-cyan-background-color {
    	color: #00d084;
	}

	.has-pale-cyan-blue-background-color {
    	color: #8ed1fc;
	}

	.has-vivid-cyan-blue-background-color {
    	color: #0693e3;
	}

	.has-very-light-gray-background-color {
    	color: #eee;
	}

	.has-cyan-bluish-gray-background-color {
    	color: #abb8c3;
	}

	.has-very-dark-gray-background-color {
    	color: #313131;
	}

	.has-background-dim::before {
	    content: "";
	    position: absolute;
	    top: 0;
	    left: 0;
	    bottom: 0;
	    right: 0;
	    background-color: inherit;
	    opacity: .5;
	    z-index: 1;
	}

	.has-background-dim-10::before {
    	opacity: .1;
	}

	.has-background-dim-20::before {
    	opacity: .2;
	}

	.has-background-dim-30::before {
    	opacity: .3;
	}

	.has-background-dim-40::before {
    	opacity: .4;
	}

	.has-background-dim-50::before {
    	opacity: .5;
	}

	.has-background-dim-60::before {
    	opacity: .6;
	}

	.has-background-dim-70::before {
    	opacity: .7;
	}

	.has-background-dim-80::before {
    	opacity: .8;
	}

	.has-background-dim-90::before {
    	opacity: .9;
	}

	/* File */

`;

export default WPContentContainer;
