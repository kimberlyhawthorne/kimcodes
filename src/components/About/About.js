import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components';

// STYLES
import {COLORS} from 'styles/variables';
import {Container} from 'styles/grid';
import {Heading3, SectionTitle} from 'styles/typography';
import {UnorderedList, ListItem, Section} from 'styles/base';

// COMPONENTS
import Translation from 'components/Localization/Translation';

// COMPONENT STYLES
const size = '10rem';

const AboutContainer = styled(Section)`
	position: relative;
	padding-top: calc(${size} * .75);

	&:before {
		content: '';
		position: absolute;
		display: block;
		margin: 0 auto;
		width: ${size};
		height: ${size};
		bottom: calc(100% - calc(${size} / 2));
		left: 0;
		right: 0;
		background-image: url('/images/portrait-kim.jpg');
		background-size: cover;
		background-color: ${COLORS.brick};
		border-radius: 100%;
	}
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

			<p>
				<Translation
					id="about-me-blurb"
					values={{
						catEmoji: <span aria-hidden="true">🐱</span>,
						montrealEmoji: <span aria-hidden="true">🇨🇦</span>,
						vegetableEmoji: <span aria-hidden="true">🥦</span>,
						vintageEmoji: <span aria-hidden="true">🛋</span>
					}}/>
			</p>

			<Heading3>
				<Translation id="about-wants-title" />
			</Heading3>

			{!!wishlist.length &&
				<UnorderedList>
					{wishlist.map(item => (
						<ListItem>
							<Translation id={item} />
						</ListItem>
					))}
				</UnorderedList>
			}
		</AboutContainer>
	);
}

export default About;