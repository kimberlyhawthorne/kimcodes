import React from 'react';
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby';

// STYLES AND FONTS
import {COLORS} from 'styles/variables';
import {Col, Container, Row as RowBase} from 'styles/grid';
import {SectionTitle} from 'styles/typography';
import {BulletlessList, ListItem} from 'styles/base';

// COMPONENTS
import Translation from 'components/Localization/Translation';

// COMPONENT STYLES
const Row = styled(RowBase)`
	color: ${COLORS.lilac};
`;

const Skills = () => {
	const data = useStaticQuery(graphql`
		query GetSkills {
			skillsJson {
				languages
				skills
				software
			}
		}
	`);

	// RENDERING
	if (!data.skillsJson) {
		return null;
	}

	return (
		<Row>
			{Object.keys(data.skillsJson).map(key => {
				const skills = data.skillsJson[key];

				return (
					<Col xs={12} lg={4}>
						<SectionTitle>
							<Translation id={key} />
						</SectionTitle>

						{!!skills.length &&
							<BulletlessList>
								{skills.map(skill => (
									<ListItem>
										<Translation id={skill} />
									</ListItem>
								))}
							</BulletlessList>
						}
					</Col>
				);
			})}
		</Row>
	);
};

export default Skills;