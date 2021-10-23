import React from 'react';
import {FormattedMessage} from 'react-intl';

import DEFAULTS from 'locales/EN';

// STYLES
import {ExternalLink} from 'styles/typography';

const Translation = ({
	id,
	className,
	linkColor,
	url,
	values
}) => {
	return (
		<FormattedMessage
			id={id}
			defaultMessage={DEFAULTS[id]}
			values={{
				bold: string => <strong>{string}</strong>,
				link: string => <ExternalLink color={linkColor} href={url} target="_blank">{string}</ExternalLink>,
				...values
			}}
		>
			{(message) => {
				if (className) {
					return (<span className={className}>{message}</span>);
				}

				return message;

			}}
		</FormattedMessage>
	);
};

export default Translation;