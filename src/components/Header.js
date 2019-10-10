import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { addClassToElement } from '../util.js';

function Header(props) {
	let menuJSX;

	if (Array.isArray(props.children)) {
		menuJSX = props.children.map(item => 
			<li className="nav-item" key={item.props.children}>
				{addClassToElement(item, 'nav-link')}
			</li>)
	} else {
		menuJSX = 
			<li className="nav-item" key={props.children.props.children}>
				{addClassToElement(props.children, 'nav-link')}
			</li>
	}
	return (
		<header>
			<Navbar bg="light" expand="lg">
			{props.brand &&
				<NavLink
					to="/"
					className="navbar-brand"
				>{props.brand}
				</NavLink>}
				<Navbar.Toggle arai-controls="header-nav" />
				<Navbar.Collapse id="header-nav">
					<ul className="ml-auto navbar-nav">
						{menuJSX}
					</ul>
				</Navbar.Collapse>
			</Navbar> 
		</header>
	);
}

export default Header