import styled from 'styled-components';
import {CONTENT_WIDTH} from 'styles/variables';

// restricted width container
export const Container = styled.div`
	width: 100%;
	max-width: ${CONTENT_WIDTH};
	margin: 0 auto;
	padding: 3rem;
	background-color: ${(props) => props.backgroundColor};
	color: ${(props) => props.color};
`

// restricted-width row
export const Row = styled.div`
	display: flex;
	align-items: center;

	${(props) => {
		if (props.gutter) {
			return `
				> *:not(:first-child) {
					margin-left: ${props.gutter};
				}

				> *:not(:last-child) {
					margin-right: ${props.gutter};
				}
			`;
		}

		if (props.backgroundColor) {
			return `background-color: ${props.backgroundColor};`;
		}
	}}
`;

// allow for tag flexibility
export const Column = (size = '1') => ({
	'flex-grow': size
});