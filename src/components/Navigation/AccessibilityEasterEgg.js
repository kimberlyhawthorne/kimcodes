import React from 'react';
import styled from 'styled-components';

import {ScreenReaderOnly} from 'styles/base';
import {COLORS} from 'styles/variables';

import Translation from 'components/Localization/Translation';

const Container = styled.div`
	${ScreenReaderOnly};
	top: -1rem;
	transition: top 0.2s ease-out;

	&:active,
	&:focus {
		transition: top 0.2s ease-out;
		position: absolute;
		top: 1rem;
		left: 1rem;
		padding: 1rem;
		background-color: ${COLORS.lilac_light};
		color: ${COLORS.brick};
		outline: none;
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