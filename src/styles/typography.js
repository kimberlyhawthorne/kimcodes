import styled from 'styled-components';
import {FONTS, COLORS} from 'styles/variables';

export const Heading1 = styled.h1`
	font-family: ${FONTS.recoleta};
`;

export const Heading2 = styled.h2`
	font-family: ${FONTS.recoleta};
`;

export const Heading3 = styled.h3`
	font-family: ${FONTS.recoleta};
`;

export const Heading4 = styled.h4`
	font-family: ${FONTS.recoleta};
`;

export const ExternalLink = styled.a`
	color: ${(props) => props.color || COLORS.brick};
	text-decoration: none;

	&:hover {
		background-color: ${COLORS.brick};
		color: ${COLORS.white};
	}
`;

export const SectionTitle = styled.h2`
	color: ${COLORS.lilac};
	text-align: center;
`;

// mixin
export const BodyText = `
	font-size: 0.875rem;
`;
