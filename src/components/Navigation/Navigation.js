import React from 'react';
import styled from 'styled-components';
import {useIntl} from 'react-intl';

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

const Navigation = ({ariaLabel, isSecondary}) => {
	const {locale} = useIntl();

	return (
		<Row
			as="nav"
			aria-label={ariaLabel}
			justifyContent="center">
			<Col col={12} xl={4}>
				<ButtonLink
					href={`/images/KimHawthorne_${locale}.pdf`}
					isNewWindow={true}
					isSecondary={isSecondary}
					message="navigation-resume"
				/>
			</Col>
			<Col col={12} xl={4}>
				<ButtonLink
					href="https:\/\/github.com\/kimberlyhawthorne"
					isNewWindow={true}
					isSecondary={isSecondary}
					message="navigation-github"
				/>
			</Col>
			<Col col={12} xl={4}>
				<ButtonLink
					href="mailto:hi@hawthorne.kim"
					isSecondary={isSecondary}
					message="navigation-email"
				/>
			</Col>
		</Row>
	);
};

export default Navigation;