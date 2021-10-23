import React from 'react';
import styled from 'styled-components';

import {Col as ColBase, Row} from 'styles/grid';

import {ButtonLink as ButtonLinkBase} from 'components/Button/ButtonLink';

const Col = styled(ColBase)`
	display: flex;
	justify-content: center;
	margin-top: 1rem;
	margin-bottom: 1rem;
`;

const ButtonLink = styled(ButtonLinkBase)`
	width: 100%;
	max-width: 24rem;
`;

const Navigation = () => (
	<Row justifyContent="center">
		<Col col={12} xl={3}>
			<ButtonLink
				href="/"
				isNewWindow={true}
				message="navigation-resume"
			/>
		</Col>
		<Col col={12} xl={3}>
			<ButtonLink
				href="/"
				isNewWindow={true}
				message="navigation-github"
			/>
		</Col>
		<Col col={12} xl={3}>
			<ButtonLink
				href="/"
				isNewWindow={true}
				message="navigation-email"
			/>
		</Col>
	</Row>
);

export default Navigation;