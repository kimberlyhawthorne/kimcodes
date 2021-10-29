import styled from 'styled-components';

import {BodyText} from 'styles/typography';
import {COLORS} from 'styles/variables';

export const UnorderedList = styled.ul`
	${BodyText};
	padding-inline-start: 20px;
`;

export const BulletlessList = styled(UnorderedList)`
	list-style-type: none;
`;

export const ListItem = styled.li`
	&::marker {
		color: ${COLORS.lilac};
	}
	&:not(:last-child) {
		margin-bottom: 0.25rem;
	}
`;

export const Section = styled.section``;

export const ScreenReaderOnly = `
	&:not(:focus):not(:active) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
`;