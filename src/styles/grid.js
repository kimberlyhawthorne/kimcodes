import styled from 'styled-components';
import {CONTENT_WIDTH} from 'styles/variables';

import {
	Col as ColBase,
	Container as ContainerBase,
	Row as RowBase
} from 'styled-bootstrap-grid';

export const Container = styled(ContainerBase)`
	margin: 0 auto;
	padding: 3rem;
	background-color: ${(props) => props.backgroundColor};
	color: ${(props) => props.color};
`;

export const Row = styled(RowBase)`
	background-color: ${(props) => props.backgroundColor};
`;

export const Col = ColBase;