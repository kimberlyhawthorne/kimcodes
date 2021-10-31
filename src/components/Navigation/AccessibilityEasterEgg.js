import React from 'react';
import styled from 'styled-components';

import {ScreenReaderOnly} from 'styles/base';
import {COLORS} from 'styles/variables';
import {FocusVisible} from 'styles/base';

import Translation from 'components/Localization/Translation';

const Container = styled.aside`
	${FocusVisible};
	position: absolute;
	bottom: 100%;
	left: 1rem;
	padding: 1rem;
	z-index: 1;
	background-color: ${COLORS.lilac_light};
	color: ${COLORS.brick};
	transition: bottom 0.2s ease-out;

	&:active,
	&:focus {
		transition: bottom 0.2s ease-out;
		bottom: calc(100% - 5rem);
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