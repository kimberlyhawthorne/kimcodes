import styled from 'styled-components';

export const UnorderedList = styled.ul`
	padding-inline-start: 20px;
`;

export const ListItem = styled.li`
	&:not(:last-child) {
		padding-bottom: 0.5rem;
	}
`;