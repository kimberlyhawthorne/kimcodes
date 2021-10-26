import styled from 'styled-components';

import {PADDING} from 'styles/variables';
import {BodyText} from 'styles/typography';

export const UnorderedList = styled.ul`
	${BodyText};
	padding-inline-start: 20px;
`;

export const BulletlessList = styled(UnorderedList)`
	list-style-type: none;
`;

export const ListItem = styled.li`
	&:not(:last-child) {
		padding-bottom: 0.5rem;
	}
`;

export const Section = styled.section`
	padding-bottom: ${PADDING};
	padding-top: ${PADDING};
`;

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