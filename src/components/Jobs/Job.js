import React from 'react';
import styled from 'styled-components';

import {Heading3, ExternalLink} from 'styles/typography';
import {COLORS, FONTS} from 'styles/variables';
import {Col, Row} from 'styles/grid';

import List from 'components/List/List';
import Translation from 'components/Localization/Translation';

const JobContainer = styled.div`
	border-top: 1px solid ${COLORS.peach};
`;

const JobTitle = styled(Heading3)`
	color: ${COLORS.brick}
`;

const Company = styled(ExternalLink)`
	padding: 0.75rem;
	min-width: 6rem;
	text-align: center;
	display: inline-block;
	background-color: ${COLORS.peach};
	color: ${COLORS.black};
	font-weight: 600;
	text-transform: uppercase;

	&:hover {
		background-color: ${COLORS.brick};
		color: ${COLORS.white};
	}

`;

const Dates = styled(Col)`
	font-weight: 600;
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
			<JobTitle>
				<Translation id={title} />
			</JobTitle>

			<Row alignItems="center">
				<Col xs={12} mdAuto={true}>
					<Company href={website} target="_blank">
						<Translation id={company} />
					</Company>
				</Col>

				<Dates xs={12} mdAuto={true}>
					<Translation id={startDate} />
					{` - `}
					<Translation id={endDate} />
				</Dates>
			</Row>


			<List items={tasks} />
		</JobContainer>
	);
};

export default Job;