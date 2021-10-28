import React from 'react';
import styled from 'styled-components';

// STYLES
import {SPACING} from 'styles/variables';
import {Col, Row} from 'styles/grid';
import {Heading1} from 'styles/typography';

// COMPONENTS
import LanguageToggle from 'components/Localization/LanguageToggle';
import Translation from 'components/Localization/Translation';

const HeadingRow = styled(Row)`
	margin-top: ${SPACING.lg};
`;

const Header = () => {
	return (
		<header>
			<Row justifyContent="center" xlJustifyContent="end">
				<LanguageToggle />
			</Row>

			<HeadingRow justifyContent="center">
				<Col mdAuto>
					<Heading1 aria-live="polite">
						<Translation id="header-introduction" />
					</Heading1>
				</Col>
			</HeadingRow>
		</header>
	);
}

export default Header;