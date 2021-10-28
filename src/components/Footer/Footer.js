import React from 'react';
import styled from 'styled-components';

import {SPACING} from 'styles/variables';

const FooterContainer = styled.footer`
	text-align: center;
	font-size: 12px;
	padding-top: ${SPACING.sm};
`;

const Footer = () => (
	<FooterContainer>
		<p>© Kimberly Hawthorne, 2021</p>
	</FooterContainer>
);

export default Footer;
