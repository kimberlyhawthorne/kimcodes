import React from 'react';
import styled from 'styled-components';

import {COLORS} from 'styles/variables';
import {Container as ContainerBase, Row} from 'styles/grid';
import {Heading2} from 'styles/typography';

import Translation from 'components/Localization/Translation';

const Container = styled(ContainerBase)`
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
`;

const Heading = styled(Heading2)`
	color: ${COLORS.white}
`;

const Introduction = () => {
	return (
		<Row backgroundColor={COLORS.black}>
			<Container>
				<Heading>
					<Translation id="introduction-title" />
				</Heading>
			</Container>
		</Row>
	);
}

export default Introduction;