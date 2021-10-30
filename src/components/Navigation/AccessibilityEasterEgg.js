import React from 'react';
import styled from 'styled-components';

import {ScreenReaderOnly} from 'styles/base';
import {COLORS} from 'styles/variables';
import {FocusVisible} from 'styles/base';

import Translation from 'components/Localization/Translation';

const Container = styled.aside`
	${FocusVisible};
	position: absolute;
	top: -4rem;
	left: 1rem;
	padding: 1rem;
	z-index: 1;
	background-color: ${COLORS.lilac_light};
	color: ${COLORS.brick};
	transition: top 0.2s ease-out;

	&:active,
	&:focus {
		transition: top 0.2s ease-out;
		top: 1rem;
	}
`;

const AccessibilityEasterEgg = () => {
	return (
		<Container tabIndex={0}>
			<Translation id="accessibility-prompt" />
		</Container>
	);
};

export default AccessibilityEasterEgg;