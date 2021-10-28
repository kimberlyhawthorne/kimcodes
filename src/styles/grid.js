import styled from 'styled-components';
import {SPACING} from 'styles/variables';

import {
	Col as ColBase,
	Container as ContainerBase,
	Row as RowBase
} from 'styled-bootstrap-grid';

// Container has max-width controlled by bootstrap
export const Container = styled(ContainerBase)`
	padding-top: ${(props) => props.paddingV || SPACING.md};
	padding-bottom: ${(props) => props.paddingV || SPACING.md};
	padding-left: ${SPACING.md};
	padding-right: ${SPACING.md};
`;

export const Row = styled(RowBase)`
	background-color: ${(props) => props.backgroundColor};
	color: ${(props) => props.color};
`;

export const Col = ColBase;