import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import Translation from 'components/Localization/Translation';

// STYLES
import BUTTONS from 'styles/buttons';

const Button = styled.a`
	display: inline-block;
	padding: 1rem 3.5rem;
	border-radius: 25px;
	text-decoration: none;
	text-align: center;
	${(props) => props.isSecondary ? BUTTONS.secondary : BUTTONS.primary};
`;

console.warn(BUTTONS);

export const ButtonLink = ({className, href, isNewWindow, isSecondary, message}) => (
	<Button
		// styles
		className={className}
		isSecondary={isSecondary}
		// element
		href={href}
		{...(isNewWindow && {
			target: '_blank',
			rel: 'noreferrer'
		})}
	>
		<Translation id={message} />
	</Button>
);

export default ButtonLink;