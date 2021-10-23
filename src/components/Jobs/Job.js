import React from 'react';
import styled from 'styled-components';

// STYLES
import {Heading3, ExternalLink} from 'styles/typography';
import {COLORS, FONTS} from 'styles/variables';
import {
	BulletlessList as BulletlessListBase,
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

const BulletlessList = styled(BulletlessListBase)`
	display: inline-block;
`;

const Job = ({
	company,
	endDate,
	startDate,
	tasks,
	title,
	website
}) => {
	return (
		<JobContainer>
			<div>
				<span>image</span>
				<BulletlessList>
					<ListItem>
						<Translation id={title} />
					</ListItem>
					<ListItem>
						<ExternalLink href={website} target="_blank">
							<Translation id={company} />
						</ExternalLink>
					</ListItem>
					<ListItem>
						<Translation id={startDate} />
						{` - `}
						<Translation id={endDate} />
					</ListItem>
				</BulletlessList>
			</div>

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