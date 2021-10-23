import React from 'react';
import styled from 'styled-components';

// STYLES
import {COLORS} from 'styles/variables';
import {Container, Row} from 'styles/grid';
import {Heading1} from 'styles/typography';

// COMPONENTS
import LanguageToggle from 'components/Localization/LanguageToggle';
import Navigation from 'components/Navigation/Navigation';
import Translation from 'components/Localization/Translation';

const HeadingRow = styled(Row)`
	margin-top: 3rem;
	margin-bottom: 3rem;
	margin-left: inherit;
	margin-right: inherit;
`;

const Heading = styled(Heading1)`
	color: ${COLORS.lilac};
`;

const Header = ({children}) => {
	return (
		<Row backgroundColor={COLORS.maroon}>
			<Container>
				<Row justifyContent="center" xlJustifyContent="end">
					<LanguageToggle />
				</Row>

				<HeadingRow justifyContent="center">
					<Heading>
						<Translation id="heading-title" />
					</Heading>
				</HeadingRow>

				<Navigation />
			</Container>
		</Row>
	);
}

export default Header;