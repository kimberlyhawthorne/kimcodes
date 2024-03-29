import React from 'react';
import styled from 'styled-components';
import {media} from 'styled-bootstrap-grid';

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

const HeadingCol = styled(Col)`
	${media.md`
		text-align: center;
	`}
`;

const Header = () => {
	return (
		<header>
			<Row justifyContent="center" xlJustifyContent="end">
				<LanguageToggle />
			</Row>

			<HeadingRow justifyContent="center">
				<HeadingCol>
					<Heading1 aria-live="polite">
						<Translation id="header-introduction" />
					</Heading1>
				</HeadingCol>
			</HeadingRow>
		</header>
	);
}

export default Header;