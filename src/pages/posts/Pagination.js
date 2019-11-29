import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import ForwardIcon from '@material-ui/icons/ArrowForwardIos';

const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	& a {
		color: ${props => props.theme.black};
	}

	.MuiButton-label {
		font-weight: bold;
	}

	.MuiButton-root {
		min-width: 38px;
		font-size: 0.95rem;
	}
`;

function Pagination({ perPage, total, current, limit, root }) {
	const buttonSize = 'medium';

	const digits = [];
	for (let i = 1; i < total / perPage + 1; i++) {
		digits.push(i);
	}

	const firstDigitsJSX = digits.slice(0, Math.min(digits.length, limit)).map((item, index) => (
		<NavLink to={`${root}${item}`} key={item}>
			<Button color={current === item ? 'primary' : 'inherit'} size={buttonSize}>
				{item}
			</Button>
		</NavLink>
	));

	const lastDigitsJSX = digits.slice(Math.max(limit, digits.length - limit)).map((item, index) => (
		<NavLink to={`${root}${item}`} key={item}>
			<Button color={current === item ? 'primary' : 'inherit'} size={buttonSize}>
				{item}
			</Button>
		</NavLink>
	));

	const currentDigitsJSX = digits
		.slice(Math.max(limit, current - limit), Math.min(digits.length - limit, current + limit - 1))
		.map((item, index) => (
			<NavLink to={`${root}${item}`} key={item}>
				<Button color={current === item ? 'primary' : 'inherit'} size={buttonSize}>
					{item}
				</Button>
			</NavLink>
		));

	const digitsJSX = [...firstDigitsJSX, ...currentDigitsJSX, ...lastDigitsJSX];

	let incr = 0;
	while (incr < digitsJSX.length - 1) {
		if (digitsJSX[incr + 1].key - digitsJSX[incr].key > 1) {
			digitsJSX.splice(
				incr + 1,
				0,
				<Button size={buttonSize} key={777 + incr} disabled>
					...
				</Button>
			);
			incr++;
		}
		incr++;
	}

	return (
		<StyledDiv>
			{current > 1 ? (
				<NavLink to={`${root}${current - 1}`}>
					<Button size={buttonSize}>
						<BackIcon />
					</Button>
				</NavLink>
			) : (
				<Button disabled size={buttonSize}>
					<BackIcon />
				</Button>
			)}
			{digitsJSX}
			{current < total / perPage ? (
				<NavLink to={`${root}${current + 1}`}>
					<Button size={buttonSize}>
						<ForwardIcon />
					</Button>
				</NavLink>
			) : (
				<Button disabled size={buttonSize}>
					<ForwardIcon />
				</Button>
			)}
		</StyledDiv>
	);
}

export default Pagination;
