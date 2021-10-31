import React from 'react';
import styled from 'styled-components';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';

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
	logoAlt,
	startDate,
	tasks,
	title,
	website
}) => {
	const {formatMessage} = useIntl();

	return (
		<JobContainer>
			<JobTitleContainer>

				<a href={website} target="_blank" rel="noreferrer">
					<Logo
						alt={formatMessage({id: logoAlt})}
						src={`/images/${logo}.png`}
					/>
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
						<ListItem key={task}>
							<Translation id={task} />
						</ListItem>
					))}
				</UnorderedList>
			}
		</JobContainer>
	);
};

Job.propTypes = {
	company: PropTypes.string,
	endDate: PropTypes.string,
	logo: PropTypes.string,
	logoAlt: PropTypes.string,
	startDate: PropTypes.string,
	tasks: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string,
	website: PropTypes.string
};

export default Job;