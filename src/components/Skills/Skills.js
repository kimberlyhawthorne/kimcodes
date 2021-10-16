import React from 'react';
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby';
import {useMedia} from 'react-media';

// STYLES AND FONTS
import {COLORS} from 'styles/variables';
import {Col, Container, Row} from 'styles/grid';
import {SectionTitle} from 'styles/typography';

// COMPONENTS
import List from 'components/List/List';
import Translation from 'components/Localization/Translation';

// const Skills = () => {
// 	const raw = useStaticQuery(graphql`
// 		query GetSkills {
// 			skillsJson {
// 				languages
// 				skills
// 				software
// 			}
// 		}
// 	`);
// 	const {
// 		languages = [],
// 		skills = [],
// 		software = []
// 	} = raw.skillsJson;

// 	return (
// 		<Container backgroundColor={COLORS.black} color={COLORS.white}>
// 			<Row>
// 				<Col xs={12} lg={4}>
// 					<SectionTitle>
// 						<Translation id="skills-languages-title" />
// 					</SectionTitle>
// 					<List items={languages} />
// 				</Col>

// 				<Col xs={12} lg={4}>
// 					<SectionTitle>
// 						<Translation id="skills-skills-title" />
// 					</SectionTitle>
// 					<List items={skills} />
// 				</Col>

// 				<Col xs={12} lg={4}>
// 					<SectionTitle>
// 						<Translation id="skills-software-title" />
// 					</SectionTitle>
// 					<List items={software} />
// 				</Col>
// 			</Row>
// 		</Container>
// 	);
// }

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


	const GLOBAL_MEDIA_QUERIES = { // TO DO: use bootstrap media queries
	    small: "(max-width: 599px)",
	    medium: "(min-width: 600px) and (max-width: 1199px)",
	    large: "(min-width: 1200px)"
	};
	const matches = useMedia({queries: GLOBAL_MEDIA_QUERIES});

	// TOGGLES
	const [hasToggles, setHasToggles] = React.useState(!matches.large);
	const [open, setOpen] = React.useState(() => {
		if (hasToggles) {
			const object = data?.skillsJson;
			return Object.keys(object || {})[0];
		}
	});

	const handleToggle = React.useCallback((value) => () => {
		// user clicks the already opened toggle? close it
		if (open === value) {
			return setOpen(null);
		}

		return setOpen(value);
	}, [open]);

	React.useEffect(() => {
		setHasToggles(!matches.large);
	}, [matches]);

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
	 							{hasToggles &&
		 							<button onClick={handleToggle(key)}>+</button>
	 							}
	 							<Translation id={key} />
 							</SectionTitle>

	 						{((open === key) || !hasToggles) &&
	 							<List items={data.skillsJson[key]} />
	 						}
	 					</Col>
					);
 				})}
 			</Row>
 		</Container>
	);
};

export default Skills;