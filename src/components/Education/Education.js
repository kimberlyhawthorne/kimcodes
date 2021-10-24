import React from 'react';
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby';

// STYLES
import {COLORS} from 'styles/variables';
import {Section as SectionBase} from 'styles/base';
import {Col, Container, Row} from 'styles/grid';
import {SectionTitle, Heading4} from 'styles/typography';

// COMPONENTS
import Translation from 'components/Localization/Translation';

// COMPONENT STYLES
// make room for About photo
const Section = styled(SectionBase)`
	padding-bottom: 7.5rem;
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
		<Section>
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
							<Heading4>
								<strong>
									<Translation id={degree} />
								</strong>
							</Heading4>

							<p>
								<Translation id={school} />
							</p>

							<p>
								<Translation id={location} />
							</p>

							<p>
								<Translation id={startDate} />
								{' - '}
								<Translation id={endDate} />
							</p>
						</Col>
					);
				})}
			</Row>
		</Section>
	);
}

export default Education;