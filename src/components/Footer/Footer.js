import React from 'react';
import styled from 'styled-components';

import {PADDING} from 'styles/variables';

const FooterContainer = styled.footer`
	padding-top: ${PADDING};
	text-align: center;
`;

const Footer = () => (
	<FooterContainer>
		<p>© Kimberly Hawthorne, 2021</p>
	</FooterContainer>
);

export default Footer;
