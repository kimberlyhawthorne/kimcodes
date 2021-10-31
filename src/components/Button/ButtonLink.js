import React from 'react';
import styled from 'styled-components';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';

// STYLES
import BUTTONS from 'styles/buttons';

const Button = styled.a`
	display: inline-block;
	padding: 1rem;
	border-radius: 25px;
	text-decoration: none;
	text-align: center;
	${(props) => props.isSecondary ? BUTTONS.secondary : BUTTONS.primary};
`;

export const ButtonLink = ({className, href, isNewWindow, isSecondary, message}) => {
	const {formatMessage} = useIntl();
	const text = formatMessage({id: message});

	return (
		<Button
			// styles
			className={className}
			isSecondary={isSecondary}
			// element
			href={href}
			{...(isNewWindow && {
				['aria-label']: `${text} - ${formatMessage({id: "accessibility-newWindow"})}`,
				target: '_blank',
				rel: 'noreferrer'
			})}
		>
			{text}
		</Button>
	);
};

ButtonLink.propTypes = {
	className: PropTypes.string,
	href: PropTypes.string,
	isNewWindow: PropTypes.bool,
	isSecondary: PropTypes.bool,
	message: PropTypes.string
}

export default ButtonLink;