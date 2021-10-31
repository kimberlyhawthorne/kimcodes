import React from 'react';
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby';

// STYLES AND FONTS
import {COLORS} from 'styles/variables';
import {Col, Row as RowBase} from 'styles/grid';
import {BodyText, SectionTitle as SectionTitleBase} from 'styles/typography';
import {
	BulletlessList as BulletlessListBase,
	ListItem,
	Section
} from 'styles/base';

// COMPONENTS
import Translation from 'components/Localization/Translation';

// STYLED
const SectionTitle = styled(SectionTitleBase)`
	${BodyText};
	text-align: left;
`;

const Row = styled(RowBase)`
	color: ${COLORS.lilac};
`;

const BulletlessList = styled(BulletlessListBase)`
	padding-left: 0;
`;

const Skills = () => {
	const data = useStaticQuery(graphql`
		query GetSkills {
			skillsJson {
				skillsets {
					title,
					items
				}
			}
		}
	`);
	const skillsets = data?.skillsJson?.skillsets;

	// RENDERING
	if (!skillsets) {
		return null;
	}

	return (
		<Row>
			{skillsets.map((set) => {
				const {title, items} = set;

				return (
					<Col key={title} as={Section} xs={12} lg={4}>
						<SectionTitle>
							<Translation id={title} />
						</SectionTitle>

						{!!items.length &&
							<BulletlessList>
								{items.map(item => (
									<ListItem key={item}>
										<Translation id={item} />
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