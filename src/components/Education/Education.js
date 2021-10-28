import React from 'react';
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby';

// STYLES
import {SPACING} from 'styles/variables';
import {Section} from 'styles/base';
import {Col, Row} from 'styles/grid';
import {Heading4, SectionTitle} from 'styles/typography';

// COMPONENTS
import Translation from 'components/Localization/Translation';

// COMPONENT STYLES
const marginBottom = '0.5rem';

const EducationSection = styled(Section)`
	margin-top: ${SPACING.lg};
	margin-bottom: ${SPACING.xl}; // extra space for portrait
`;

const Paragraph = styled.p`
	margin-top: 0;
	margin-bottom: ${marginBottom};
`;

const Degree = styled(Heading4)`
	margin-bottom: ${marginBottom};
`;


const Education = () => {
	const data = useStaticQuery(graphql`
		query GetEducation {
			educationJson {
				education {
					degree
					endDate
					location
					school
					startDate
				}
			}
		}
	`);

	const programs = data?.educationJson?.education;

	if (!programs) {
		return null;
	}

	return (
		<EducationSection>
			<SectionTitle>
				<Translation id="education-title" />
			</SectionTitle>

			<Row>
				{programs.map(({
					degree,
					endDate,
					location,
					school,
					startDate
				}) => {

					return (
						<Col key={school} xs={12} md={6}>
							<Degree>
								<Translation id={degree} />
							</Degree>

							<Paragraph>
								<Translation id={school} />
							</Paragraph>

							<Paragraph>
								<Translation id={location} />
							</Paragraph>

							<Paragraph>
								<Translation id={startDate} />
								{' - '}
								<Translation id={endDate} />
							</Paragraph>
						</Col>
					);
				})}
			</Row>
		</EducationSection>
	);
}

export default Education;