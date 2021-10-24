import React from 'react';
import styled from 'styled-components';

// STYLES
import {COLORS} from 'styles/variables';
import {Row} from 'styles/grid';
import {Heading1} from 'styles/typography';

// COMPONENTS
import LanguageToggle from 'components/Localization/LanguageToggle';
import Translation from 'components/Localization/Translation';

const HeaderContainer = styled.header`
	padding-top: 3rem;
	padding-bottom: 3rem;
`;

const HeadingRow = styled(Row)`
	margin-top: 3rem;
	margin-bottom: 3rem;
	margin-left: inherit;
	margin-right: inherit;
`;

const Heading = styled(Heading1)`
	color: ${COLORS.lilac};
`;

const Header = () => {
	return (
		<HeaderContainer>
			<Row justifyContent="center" xlJustifyContent="end">
				<LanguageToggle />
			</Row>

			<HeadingRow justifyContent="center">
				<Heading>
					<Translation id="heading-title" />
				</Heading>
			</HeadingRow>
		</HeaderContainer>
	);
}

export default Header;