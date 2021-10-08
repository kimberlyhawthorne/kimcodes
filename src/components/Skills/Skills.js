import React from 'react';
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby';

// STYLES AND FONTS
import {COLORS} from 'styles/variables';
import {Container, Row as RowBase} from 'styles/grid';
import {SectionTitle} from 'styles/typography';

// COMPONENTS
import List from 'components/List/List';
import Translation from 'components/Localization/Translation';

// COMPONENT STYLES
const Row = styled(RowBase)`
	align-items: baseline;
`;

const Section = styled.section`
	padding-left: 1rem;
	padding-right: 1rem;
`;

const Skills = () => {
	const raw = useStaticQuery(graphql`
		query GetSkills {
			skillsJson {
				languages
				skills
				software
			}
		}
	`);
	const {
		languages = [],
		skills = [],
		software = []
	} = raw.skillsJson;

	return (
		<Container backgroundColor={COLORS.black} color={COLORS.white}>
			<Row>
				<Section>
					<SectionTitle>
						<Translation id="skills-languages-title" />
					</SectionTitle>
					<List items={languages} />
				</Section>

				<Section>
					<SectionTitle>
						<Translation id="skills-skills-title" />
					</SectionTitle>
					<List items={skills} />
				</Section>

				<Section>
					<SectionTitle>
						<Translation id="skills-software-title" />
					</SectionTitle>
					<List items={software} />
				</Section>
			</Row>
		</Container>
	);
}

export default Skills;