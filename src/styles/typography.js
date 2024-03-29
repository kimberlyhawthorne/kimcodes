import styled from 'styled-components';
import {FONTS, COLORS} from 'styles/variables';

export const Heading1 = styled.h1`
	font-family: ${FONTS.bold};
	color: ${COLORS.lilac};
	line-height: normal;
`;

export const Heading2 = styled.h2`
	font-family: ${FONTS.bold};
	color: ${COLORS.lilac};
	line-height: normal;
`;

export const Heading3 = styled.h3`
	font-family: ${FONTS.bold};
	color: ${COLORS.lilac};
	line-height: normal;
`;

export const Heading4 = styled.h4`
	font-family: ${FONTS.bold};
	line-height: normal;
`;

export const SectionTitle = styled(Heading2)`
	color: ${COLORS.lilac};
	text-align: center;
`;

// MIXINS
export const BodyText = `
	font-family: ${FONTS.regular};
	font-size: 1rem;
	line-height: 1.25rem;
`;

// shared styles for all text links
const TextLink = `
	text-decoration: none;
`;

// LINKS
export const LINKS = {
	lilac: `
		${TextLink};
		color: ${COLORS.lilac};

		&:focus,
		&:hover {
			background-color: ${COLORS.lilac};
			color: ${COLORS.brick};
		}
	`,
	brick: `
		${TextLink};
		color: ${COLORS.brick};

		&:focus,
		&:hover {
			background-color: ${COLORS.brick};
			color: ${COLORS.lilac};
		}
	`
}