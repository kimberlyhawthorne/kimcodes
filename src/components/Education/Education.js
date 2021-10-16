import React from 'react';
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby';

// STYLES
import {COLORS} from 'styles/variables';
import {Col, Container, Row} from 'styles/grid';
import {SectionTitle, Heading4} from 'styles/typography';

// COMPONENTS
import Translation from 'components/Localization/Translation';

// COMPONENT STYLES
const Heading = styled(Heading4)`
	font-weight: 100;
	position: relative;
	display: inline-block;

	&:after {
		content: '';
		position: absolute;
		top: calc(100% + 8px);
		left: 0;
		width: 100%;
		border-top: 2px solid ${COLORS.brick};
	}
`;

const Paragraph = styled.p`
	margin: 0.25rem 0;
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
		<Container backgroundColor={COLORS.white}>
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
						<Col xs={12} xl={4}>
							<Heading>
								<Translation id={degree} />
							</Heading>

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
		</Container>
	);
}

export default Education;