import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header(props) {
	return (
		<header>
			<Navbar bg="light" expand="lg">
				<NavLink
					to="/"
					className="navbar-brand"
				>ReactWP
				</NavLink>
				<Navbar.Toggle arai-controls="header-nav" />
				<Navbar.Collapse id="header-nav">
					<ul className="ml-auto navbar-nav">
						<li>
							<NavLink 
								to="/"
								className="nav-link"
							>Home
							</NavLink>
						</li>
					</ul>
				</Navbar.Collapse>
			</Navbar> 
		</header>
	);
}

export default Header