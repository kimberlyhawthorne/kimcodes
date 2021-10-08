import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components';

// STYLES
import {COLORS} from 'styles/variables';
import {Container} from 'styles/grid';
import {SectionTitle} from 'styles/typography';

// COMPONENTS
import List from 'components/List/List';
import Translation from 'components/Localization/Translation';

// COMPONENT STYLES
const Blurb = styled.p`
	font-size: 2rem;
`;

const Wishlist = styled.div`
	font-size: 1.5rem;
`;


const About = () => {
	const data = useStaticQuery(graphql`
		query GetAbout {
			aboutJson {
				wants
			}
		}
	`);

	const wishlist = data?.aboutJson?.wants;

	return (
		<Container backgroundColor={COLORS.peach}>
			<SectionTitle>
				<Translation id="about-title" />
			</SectionTitle>

			<Blurb>
				<Translation
					id="about-me-blurb"
					values={{
						catEmoji: '🐱',
						montrealEmoji: '🇨🇦',
						vegetableEmoji: '🥦',
						vintageEmoji: '🛋'
					}}/>
			</Blurb>

			<SectionTitle>
				<Translation id="about-wants-title" />
			</SectionTitle>

			<Wishlist>
				<List items={wishlist} />
			</Wishlist>
		</Container>
	);
}

export default About;