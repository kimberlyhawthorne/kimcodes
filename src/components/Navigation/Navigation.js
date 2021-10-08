import React from 'react';
import styled from 'styled-components';

import {COLORS, FONTS} from 'styles/variables';
import {Container as ContainerBase} from 'styles/grid';
import {ExternalLink} from 'styles/typography';

import Translation from 'components/Localization/Translation';

const Container = styled(ContainerBase)`
	text-align: center;
`;

const Link = styled(ExternalLink)`
	border: 5px solid ${COLORS.brick};
	padding: 0.5rem 1rem;
	font-family: ${FONTS.ibm};
	text-transform: uppercase;
	font-weight: 600;
	margin: 0 1rem;

	&:hover {
		color: ${COLORS.white}
	}
`

const Navigation = () => {
	return (
		<Container backgroundColor={COLORS.white}>
			 <Link href="/" target="_blank">
				 <Translation id="navigation-resume" />
			 </Link>

			 <Link href="https://www.linkedin.com/in/kim-hawthorne-66ba6729" target="_blank">
				 <Translation id="navigation-linkedIn" />
			 </Link>

			  <Link href="mailto:kimberlyrhawthorne@gmail.com" target="_blank">
			 	 <Translation id="navigation-email" />
			  </Link>
		 </Container>
	);
}

export default Navigation;