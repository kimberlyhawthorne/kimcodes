import styled from 'styled-components';

export const UnorderedList = styled.ul`
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