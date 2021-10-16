import React from 'react';
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby';

// STYLES AND FONTS
import {COLORS} from 'styles/variables';
import {Col, Container, Row} from 'styles/grid';
import {SectionTitle} from 'styles/typography';

// COMPONENTS
import List from 'components/List/List';
import Translation from 'components/Localization/Translation';

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
 		<Container backgroundColor={COLORS.black} color={COLORS.white}>
 			<Row>
 				{Object.keys(data.skillsJson).map(key => {

 					return (
	 					<Col xs={12} lg={4}>
	 						<SectionTitle>
	 							<Translation id={key} />
 							</SectionTitle>

 							<List items={data.skillsJson[key]} />
	 					</Col>
					);
 				})}
 			</Row>
 		</Container>
	);
};

export default Skills;