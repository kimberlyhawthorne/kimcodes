import React from 'react';
import styled from 'styled-components';

import {COLORS, FONTS} from 'styles/variables';
import {ExternalLink} from 'styles/typography';
import {media} from 'styled-bootstrap-grid';
import {Container as ContainerBase} from 'styles/grid';

import Translation from 'components/Localization/Translation';

const Container = styled(ContainerBase)`
	padding-bottom: 0;
`;

const Link = styled(ExternalLink)`
	border: 5px solid ${COLORS.brick};
	padding: 0.5rem 1rem;
	font-family: ${FONTS.ibm};
	text-transform: uppercase;
	font-weight: 600;
	display: inline-block;
	width: 100%;
	margin-bottom: 1rem;
	text-align: center;

	&:hover {
		color: ${COLORS.white}
	}

	${media.md`
		width: auto;
		margin-right: 1rem;
	`}
`

const Navigation = () => {
	return (
		<Container backgroundColor={COLORS.white}>
			<Link href="/" target="_blank">
				<Translation id="navigation-resume" />
			</Link>
			<Link href="/" target="_blank">
				<Translation id="navigation-github" />
			</Link>

			<Link href="/" target="_blank">
				<Translation id="navigation-email" />
			</Link>
		</Container>
	);
}

export default Navigation;