import React from 'react';
import styled from 'styled-components';

// STYLES
import {COLORS} from 'styles/variables';
import {
	BulletlessList,
	ListItem,
	UnorderedList
} from 'styles/base';

// COMPONENTS
import Translation from 'components/Localization/Translation';

// STYLED COMPONENTS
const JobContainer = styled.div`
	&:not(:last-child) {
		margin-bottom: 3rem;
	}
`;

// Job title
const JobTitleContainer = styled.div`
	display: flex;
	align-items: start;
`;

const JobTitleList = styled(BulletlessList)`
	display: inline-block;
	color: ${COLORS.lilac};
`;

const Logo = styled.img`
	margin-top: 1rem;
	max-width: 5rem;
`;


const Job = ({
	company,
	endDate,
	logo,
	startDate,
	tasks,
	title,
	website
}) => {
	return (
		<JobContainer>
			<JobTitleContainer>

				<a href={website} target="_blank" rel="noreferrer">
					<Logo alt={company} src={`/images/${logo}.png`} />
				</a>

				<JobTitleList>
					<ListItem>
						<Translation id={title} />
					</ListItem>

					<ListItem>
						<Translation id={company} />
					</ListItem>

					<ListItem>
						<Translation id={startDate} />
						{` - `}
						<Translation id={endDate} />
					</ListItem>
				</JobTitleList>
			</JobTitleContainer>

			{!!tasks.length &&
				<UnorderedList>
					{tasks.map(task => (
						<ListItem>
							<Translation id={task} />
						</ListItem>
					))}
				</UnorderedList>
			}
		</JobContainer>
	);
};

export default Job;