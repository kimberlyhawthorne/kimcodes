import React from 'react';
import {FormattedMessage} from 'react-intl';

import {ExternalLink} from 'styles/typography';

const Translation = ({
	id,
	linkColor,
	url,
	values
}) => {
	return (
		<FormattedMessage
			id={id}
			values={{
				bold: string => <strong>{string}</strong>,
				link: string => <ExternalLink color={linkColor} href={url} target="_blank">{string}</ExternalLink>,
				...values
			}}
		/>
	);
};

export default Translation;