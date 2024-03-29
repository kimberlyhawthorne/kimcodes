import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components';

// STYLES
import {COLORS, SPACING} from 'styles/variables';
import {Heading3, SectionTitle} from 'styles/typography';
import {UnorderedList, ListItem, Section} from 'styles/base';

// COMPONENTS
import Translation from 'components/Localization/Translation';

// COMPONENT STYLES
const size = '10rem';

const AboutContainer = styled(Section)`
	position: relative;
	padding-top: calc(${size} * .6);
	padding-bottom: ${SPACING.md};

	&:before {
		content: '';
		position: absolute;
		display: block;
		margin: 0 auto;
		width: ${size};
		height: ${size};
		bottom: calc(100% - calc(${size} * .3));
		left: 0;
		right: 0;
		background-image: url('/images/portrait-kim.jpg');
		background-size: cover;
		background-color: ${COLORS.brick};
		border-radius: 100%;
	}
`;

const Blurb = styled.p`
	padding-bottom: ${SPACING.sm};
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
		<AboutContainer>
			<SectionTitle>
				<Translation id="about-title" />
			</SectionTitle>

			<Blurb>
				<Translation
					id="about-me-blurb"
					values={{
						catEmoji: <span aria-hidden="true">🐱</span>,
						montrealEmoji: <span aria-hidden="true">🇨🇦</span>,
						vegetableEmoji: <span aria-hidden="true">🥦</span>,
						vintageEmoji: <span aria-hidden="true">🛋</span>
					}}/>
			</Blurb>

			<Heading3>
				<Translation id="about-wants-title" />
			</Heading3>

			{!!wishlist.length &&
				<UnorderedList>
					{wishlist.map(item => (
						<ListItem key={item}>
							<Translation id={item} />
						</ListItem>
					))}
				</UnorderedList>
			}
		</AboutContainer>
	);
}

export default About;