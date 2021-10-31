import React from 'react';
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby'

// STYLES AND FONTS
import {SPACING} from 'styles/variables';
import {Section} from 'styles/base';
import {SectionTitle} from 'styles/typography';

// COMPONENTS
import Job from 'components/Jobs/Job';
import Translation from 'components/Localization/Translation';

const JobsSection = styled(Section)`
	padding-top: ${SPACING.lg};
`;

const Jobs = () => {
	const id = "jobs-section";
	const data = useStaticQuery(graphql`
		query GetJobs {
			jobsJson {
				jobs {
					company
					endDate
					logo
					logoAlt
					startDate
					tasks
					title
					website
				}
			}
		}
	`);

	const jobs = data?.jobsJson?.jobs || [];

	if (!jobs.length) {
		return null;
	}

	return (
		<JobsSection aria-describedby={id}>
			<SectionTitle id={id}>
				<Translation id="jobs-title" />
			</SectionTitle>

			{jobs.map(job => {
				return (
					<Job key={job.company} {...job} />
				);
			})}
		</JobsSection>
	);
}

export default Jobs;