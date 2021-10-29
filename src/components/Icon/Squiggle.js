import React from 'react';
import styled from 'styled-components';

// STYLES
import {COLORS} from 'styles/variables';

const Container = styled.span`
	width: 5rem;
	display: block;
	margin: 0 auto;
`;

const Squiggle = () => {
	return (
		<Container>
			<svg fill={COLORS.lilac_light} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79 8" xmlSpace="preserve"><path d="M79 0c-2.2 0-3.3 2-4.1 3.5C74 5.1 73.5 6 72.5 6s-1.5-.9-2.4-2.5C69.3 2 68.2 0 66 0c-2.2 0-3.3 2-4.1 3.5C61 5.1 60.4 6 59.5 6c-1 0-1.5-.9-2.4-2.5C56.3 2 55.2 0 53 0c-2.2 0-3.3 2-4.1 3.5C48 5.1 47.4 6 46.5 6c-1 0-1.5-.9-2.4-2.5C43.3 2 42.2 0 40 0c-2.2 0-3.3 2-4.1 3.5C35 5.1 34.4 6 33.5 6s-1.5-.9-2.4-2.5C30.3 2 29.2 0 27 0c-2.2 0-3.3 2-4.1 3.5C22 5.1 21.4 6 20.5 6c-1 0-1.5-.9-2.4-2.5C17.3 2 16.2 0 14 0c-2.2 0-3.3 2-4.1 3.5C9 5.1 8.5 6 7.5 6S6 5.1 5.1 3.5C4.3 2 3.2 0 1 0 .4 0 0 .4 0 1s.4 1 1 1c1 0 1.5.9 2.4 2.5C4.2 6 5.3 8 7.5 8s3.3-2 4.1-3.5C12.5 2.9 13 2 14 2s1.5.9 2.4 2.5C17.2 6 18.3 8 20.5 8c2.2 0 3.3-2 4.1-3.5C25.5 2.9 26 2 27 2s1.5.9 2.4 2.5C30.2 6 31.3 8 33.5 8s3.3-2 4.1-3.5C38.4 2.9 39 2 40 2s1.5.9 2.4 2.5C43.2 6 44.3 8 46.5 8c2.2 0 3.3-2 4.1-3.5C51.4 2.9 52 2 53 2s1.5.9 2.4 2.5C56.2 6 57.3 8 59.5 8c2.2 0 3.3-2 4.1-3.5C64.4 2.9 65 2 66 2s1.5.9 2.4 2.5C69.2 6 70.3 8 72.5 8s3.3-2 4.1-3.5C77.5 2.9 78 2 79 2c.6 0 1-.4 1-1s-.4-1-1-1z"/></svg>
		</Container>
	);
}

export default Squiggle;
