import React from 'react';
import {FormattedMessage} from 'react-intl';
import styled from 'styled-components';

// STYLES
import {COLORS} from 'styles/variables';
import {Container as ContainerBase, Row} from 'styles/grid';
import {Heading2} from 'styles/typography';

// COMPONENTS
import LanguageToggle from 'components/Localization/LanguageToggle';
import Translation from 'components/Localization/Translation';

const Container = styled(ContainerBase)`
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
`;

const Heading = styled(Heading2)`
	color: ${COLORS.black}
`;

const LanguageToggleWrapper = styled.div`
	margin-left: auto;
`;

const Header = ({children}) => {
	return (
		<Row backgroundColor={COLORS.white}>
			<Container>
				<Row>
					<Heading>
						<Translation id="greeting-title" />
					</Heading>

					<LanguageToggleWrapper>
						<LanguageToggle />
					</LanguageToggleWrapper>
				</Row>
			</Container>
		</Row>
	);
}

export default Header;