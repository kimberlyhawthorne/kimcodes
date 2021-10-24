import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import Translation from 'components/Localization/Translation';

// STYLES
import {COLORS} from 'styles/variables';

const Primary = `
	background-color: ${COLORS.brick};
	color: ${COLORS.lilac};

	&:hover {
		background-color: ${COLORS.lilac};
		color: ${COLORS.brick};
	}
`;

const Secondary = `
	background-color: ${COLORS.lilac};
	color: ${COLORS.brick};

	&:hover {
		background-color: ${COLORS.maroon};
		color: ${COLORS.lilac};
	}
`;

const Button = styled.a`
	display: inline-block;
	padding: 1rem 3.5rem;
	border-radius: 25px;
	text-decoration: none;
	text-align: center;

	${(props) => {
		if (props.isSecondary) {
			return Secondary;
		}

		return Primary;
	}}
`;

export const ButtonLink = ({className, href, isNewWindow, isSecondary, message}) => (
	<Button
		// styles
		className={className}
		isSecondary={isSecondary}
		// element
		href={href}
		{...(isNewWindow && {target: '_blank'})}
	>
		<Translation id={message} />
	</Button>
);

export default ButtonLink;