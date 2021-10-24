import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'

// STYLES AND FONTS
import {COLORS} from 'styles/variables';
import {Section} from 'styles/base';
import {SectionTitle} from 'styles/typography';

// COMPONENTS
import Job from 'components/Jobs/Job';
import Translation from 'components/Localization/Translation';

const Jobs = () => {
	const data = useStaticQuery(graphql`
		query GetJobs {
			jobsJson {
				jobs {
					endDate
					company
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
		<Section>
			<SectionTitle>
				<Translation id="jobs-title" />
			</SectionTitle>

			{jobs.map(job => {
				return (
					<Job {...job} />
				);
			})}
		</Section>
	);
}

export default Jobs;